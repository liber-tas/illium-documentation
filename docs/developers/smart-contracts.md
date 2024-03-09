---
sidebar_position: 6
description: Examples of smart contracts
---

# Smart Contracts

We're now in a position to see how we can use the building blocks we've learned about so far to build a full smart contract.
In the context of the illium protocol a smart contract is a recursive script deployed on the network that maintains
state, offers methods to the user to read or update that state, and/or transfer coins or tokens according to the rules
defined in the code.

It should be noted that utxo-based smart contracts are not *that* different from account-based system that you're probably
familiar with. 

Consider Ethereum as an example:
- Contracts are deployed to a specific address.
- This address defines the instance of the contract.
- Each transaction made to the address represents a state transition of the contract.
- Users only need to know the address of the contract to interact with it.

Now compare that to Illium:
- Contracts are deployed by sending coins to utxo who's script-hash defines the contract code.
- The outpoint (txid, output-index) of this initial utxo defines the instance of the contract.
- Each linked spend of the utxo represents a state transition of the contract.
- User's need to know data about the most recent utxo in the chain of transactions to interact with the contract.

Outside of that last part about needing to track the most recent utxo, there is very little difference between
illium and ethereum. And it wouldn't be hard for an IDE to track the utxos for you to remove any mental overhead. 

Let's take a look at some examples:

## Examples

### Auction Contract

This contract conducts a basic auction. Before the expiration is reached anyone can bid on the auction by calling 
`bid()` method and sending coins into the contract. When they do so the contract enforces a covenant requiring
that the previous high bidder be refunded. 

The beneficiary of the contract can claim the funds after expiration using the `withdraw()` method. 

When `bid()` is called the transaction format is required to be:
```
Inputs
======
0: <this-contract>
1: <bid>
2: <fee-paying-input> (optional)

Outputs
=======
0: <this-contract>
1: <prev-bidder-refund>
2: <change> (optional)
```

```
locking-params = (<auction-expiration> <asset-id> <recipient-pubkey>)
unlocking-params = (t <bid-amount> <refund-output>)
or
unlocking-params = (nil <signature>)
```

```lisp
(lambda (locking-params unlocking-params input-index private-params public-params)
	!(import std/collections/nth)
	
	;; Grab the locktime fields from the public parameters
	!(def locktime !(param locktime))
	!(def locktime-precision !(param locktime-precision))

	;; Assert that the locktime precision is less within the required range.
	!(assert (<= locktime-precision 60))

	;; Bid is a method to the contract. It can be called any time prior to 
	;; expiration to increase the current bid amount.
	;;
	;; It will also refund the previous high bidder his money.
	!(defun bid (bid-amount refund-output) (
		;; Import the encryption function from the standard library
		!(import std/crypto/encrypt)
		!(import std/inputs/script-hash)

		;; Set a bunch of variables based on the input parameters
		!(def input-script-hash (script-hash !(param priv-in 0)))
		!(def state !(param priv-in 0 state))
		!(def current-bid (car state))
		!(def prev-bidder-comm (car (cdr state)))
		!(def asset-id (car (cdr locking-params)))
		!(def refund-comm (num (commit refund-output)))
		!(def bid-amount (car (cdr unlocking-params)))
		!(def new-state !(list bid-amount refund-comm))
		!(def in-salt !(param priv-in 0 salt))
		!(def new-salt (num (commit in-salt)))
		!(def new-output !(list input-script-hash bid-amount asset-id new-salt new-state))

		;; Assert that input 1's amount is greater than or equal to the bid amount provided
		;; in the unlocking params.
		!(assert (>= !(param priv-in 1 amount) bid-amount))
		
		;; Assert that input 1's asset-id is the same as the one set in the locking-params
		!(assert (>= !(param priv-in 1 asset-id) asset-id))

		;; Assert that output 0 is constructed as expected
		;; - script-hash is same as the input script-hash (recursion)
		;; - amount is equal to the new bid
		;; - asset-id is equal to the input asset id
		;; - the salt is the hash of the previous salt
		;; - the new state is of form (bid-amount bidder-comm)
		!(assert-eq !(param priv-out 0) new-output)

		;; Assert that the input 1 amount is greater than the current bid
		!(assert (> bid-amount current-bid))

		;; Assert that the bidder's commitment contains the correct amount
		!(assert-eq bid-amount (nth 1 refund-output))

		;; Assert that the bidder's commitment contains the correct asset id
		!(assert-eq asset-id (nth 2 refund-output))

		;; Assert that the public output 0 ciphertext is equal to the encryption of
		;; the new contract output.
		!(assert-eq !(param pub-out 0 ciphertext) (encrypt new-salt new-output))

		;; Assert that the tranasction's locktime is less than the auction expiration
		!(assert (< locktime (car locking-params)))
		
		;; If the current-bid is greater than zero make sure the public output 1 commitment 
		;; is equal to the prev-bidder-comm. Otherwise we can just return t.
		(if (current-bid > 0)
		    (= !(param pub-out 1) prev-bidder-comm)
		    t
        )
	))

	;; Withdraw is another method. It can be used the by the auction beneficiary to withdraw
	;; the funds after expiration
	!(defun withdraw (signature) ( 
		;; Import the checksig function from the standard library
		!(import std/crypto/checksig)

		;; Assert that the tranasction's locktime is greater than or equal to the auction expiration
		!(assert (>= locktime (car locking-params)))

		;; Assert that the transaction's sig-hash is signed by the key provided in the locking-params
		!(assert (checksig signature (cdr (cdr locking-params)) !(param sighash)))

		;; Return true
		t
	))

	;; Execute one of the two methods based on the selection in the unlocking params
	(if (car unlocking-params)
		(bid (nth 1 unlocking-params) (nth 2 unlocking-params))
		(withdraw (cdr unlocking-params))
    )
)
```

### Voting Contract

This voting contract allows anyone to vote on an issue using their public key. 
The contract state tracks both the votes and who has already voted, ensuring
nobody votes twice. 

And admin is allowed to close the vote.

```
locking-params = (<len-candidates> <admin-pubkey>)
state = (<is_open> <db_root> <vote-records>)

unlocking-params = (<method> <vote> <pubkey> <signature> <merkle-proof>)
or 
unlocking-params = (<method> <signature>)
```

```lisp
(lambda (locking-params unlocking-params input-index private-params public-params)
    ;; Import the encryption and checksig functions from the standard library
    !(import std/crypto)
    !(import std/inputs/script-hash)
    
    !(defun close-vote () (
           ;; Verify the admin signature
           !(assert (checksig (cdr unlocking-params) (cdr (cdr unlocking-params)) !(param sighash)))
                      
           ;; Set the vote-open flag to 0      
           !(def state !(param priv-in input-index state))
           !(def new-state !(list 0 (cdr state)))
                            
           ;; Enforce a covenant making sure the output commitment is computed correctly
           !(def new-salt (num (commit !(param priv-in intput-index salt))))
           !(def new-output (num (commit !(list (script-hash !(params priv-in input-index)) 0 !(param priv-in input-index asset-id) new-state new-salt))))
           !(assert-eq !(priv-out 0) new-output)
   
           ;; Enforce that the ciphertext is computed correctly.
           !(assert-eq (!param pub-out 0 ciphertext) (encrypt new-salt new-output))
           
           ;; Return True
           t
    ))
  
    !(defun vote () (
        !(import std/merkle-db)
        !(import std/collections/nth)

        !(defun record-vote (candidate vote-records) (
            !(def current-votes (nth candidate vote-records))
            (map-update vote-records candidate (+ current-votes 1))
        ))

        !(defun make-vote-records (n i records) (
             (if (< i n)
                 (make-vote-records n (+ i 1) (cons records (cons 0 nil)))
                 records
             )
        ))
        
        !(def state !(param priv-in input-index state))

        !(def vote-records (if (state)
                                state
                                (make-vote-records (car locking-params) 1 !(list 0))
                            ))

        !(def pubkey (nth 1 unlocking-params))
        !(def merkle-proof (nth 4 unlocking-params))
        !(def signature (nth 3 unlocking-params))
        !(def state-root (nth 1 state))
        
        ;; Make sure the vote is open
        !(assert (> (car state) 0))
        
        ;; Verify the voter can produce a valid signature
        !(assert (checksig signature pubkey !(param sighash)))

        ;; Verify this pubkey hasn't voted yet
        !(assert-eq (db-exists pubkey merkle-proof state-root) nil)  
              
        ;; Compute the new state root                   
        !(def new-state-root (db-put nil pubkey merkle-proof state-root))

        ;; Compute the new state with the recorded vote
        !(def new-state !(list 1 new-state-root (record-vote (car (cdr unlocking-params)) vote-records)))

        ;; Enforce a covenant making sure the output commitment is computed correctly
        !(def new-salt (hash !(param priv-in intput-index salt)))
        !(def new-output !(list (script-hash !(params priv-in input-index)) 0 !(param priv-in input-index asset-id) new-state new-salt))
        !(assert-eq !(priv-out 0) new-output)

        ;; Enforce that the ciphertext is computed correctly.
        !(assert-eq (!param pub-out 0 ciphertext) (encrypt new-salt new-output))
        
        ;; Return True
        t
    ))
  
    (if (car unlocking-params)
        (vote)
        (close-vote)
    )
)
```

## Contracts Interacting With Other Contracts

Contracts aren't limited to interacting with only their code. Because transactions can have multiple inputs, contracts
can call methods in other contracts or even send coins into other contracts. 

Let's change the voting example above create a separate voter registration contract:

```lisp
(lambda (locking-params unlocking-params input-index private-params public-params)
    !(import std/merkle-db)
    !(import std/crypto/checksig)
    !(import std/collections/nth)
    !(import std/inputs/script-hash)
    
    !(def pubkey (car unlocking-params))
    !(def merkle-proof (nth 2 unlocking-params))
    !(def signature (nth 1 unlocking-params))
    !(def state-root (car !(param priv-in input-index state)))

    ;; Verify the voter can produce a valid signature
    !(assert (checksig signature pubkey !(param sighash)))

    ;; Compute the new state root
    !(def new-state-root (db-put nil pubkey merkle-proof state-root))
    
    ;; If this is the first time contract is used, set the isntance ID
    ;; to the nullifier. Otherwise load the instance ID from the state.
    !(def instance-id (if state
                          (car state)
                          !(param nullifiers input-index)))

    ;; Enforce a covenant making sure the output commitment is computed correctly
    !(def new-salt (hash !(param priv-in intput-index salt)))
    !(def new-state !(list instance-id new-state-root))
    !(def new-output !(list (script-hash !(params priv-in input-index)) 0 !(param priv-in input-index asset-id) new-state new-salt))
    !(assert-eq !(priv-out 0) new-output)

    ;; Enforce that the ciphertext is computed correctly.
    !(assert-eq (!param pub-out 0 ciphertext) (encrypt new-salt new-output))

    ;; Return True
    t
)
```

And now let's modify the `vote()` method in our previous contract to verify the voter is registered in the registration
contract. We're adding these lines in the method:

```lisp
;; Import the get-contract function
!(import std/contracts)

;; get-contract searches the inputs for an input with
;; the provided script-commitment and instance-id. 
;; Asserts that the input exists.
!(def registration-contract (get-contract (nth 2 locking-params) (nth 3 locking-params))

;; Grab the root hash of the registration db from the registration contract
!(def registration-db-root (car (cdr (nth 5 registration-contract))))

;; Grab the registration db inclusion proof from the unlocking params
!(def registration-proof (nth 5 unlocking-params))

;; Finally verify the voter's public key exists in the registration contract db.
!(assert db-exists pubkey registration-proof registration-db-root)
```

