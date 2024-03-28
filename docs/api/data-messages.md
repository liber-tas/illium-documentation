---
sidebar_position: 7
---
# Data Messages

```go
message TransactionData {
    oneof txids_or_txs {
        // Just the transaction ID
        bytes transaction_ID    = 1;
        // A marshaled transaction.
        Transaction transaction = 2;
    }
}

message BlockInfo {
    // The hash of the block header.
    bytes  block_ID   = 1;
    // A version number to track software/protocol upgrades.
    uint32 version    = 2;
    // The height of the block in the chain.
    uint32 height     = 3;
    // The block in the chain right before this one.
    bytes parent      = 4;
    // The next block in the chain (or nil if this block is the tip).
    bytes child       = 5;
    // The timestamp of the block. Expressed in seconds since 1970-01-01.
    int64 timestamp   = 6;
    // The root of the Merkle Tree built from all transactions in the block.
    bytes tx_root     = 7;
    // The peerID of the validator that created the block.
    bytes producer_ID = 8;
    // The size of the block in bytes.
    uint32 size       = 9;
    // The number of transactions in the block.
    uint32 num_txs    = 10;
    // The total transaction fees in the block.
    uint64 total_fees = 11;
}

message Validator {
    // The validator ID encoded in bytes.
    bytes validator_ID     = 1;
    // The number of coins staked by this validator in nanoillium.
    uint64 total_stake     = 2;
    // The total stake weighted by time lock in nanoillium.
    uint64 stake_weight    = 3;
    // The nullifiers for the utxos the validator has staked.
    repeated Stake stake   = 4;
    // The total of any unclaimed validator rewards in nanoillium.
    uint64 unclaimed_coins = 5;
    // The number of blocks this validator has created this epoch.
    uint32 epoch_blocks    = 6;

    message Stake {
        // The nullifier that is staked
        bytes nullifier           = 1;
        // The amount staked in nanoillium
        uint64 amount             = 2;
        // The timestamp that this utxo is timelocked until
        int64 timelocked_until    = 3;
        // When this nullifier will expire and be removed from
        // the validator set.
        int64 expiration          = 4;
        // The earliest date at which this nullifier can be restaked.
        // One week before expiration.
        int64 restake_eligibility = 5;
    }
}

message Utxo {
    // The commitment associated with the output
    bytes commitment    = 1;
    // The amount of coins in nanoillium
    uint64 amount       = 2;
    // The address that the utxo is associated with
    string address      = 3;
    // Whether or not this is a watch only utxo.
    // We canot spend watch only utxos without the
    // private key.
    bool watchOnly      = 4;
    // Is this utxo staked by the wallet.
    bool staked         = 5;
    // The timestamp this utxo is timelocked until (if applicable)
    int64 locked_untill = 6;
}

message RawTransaction {
    // The transaction as it appears on the network
    Transaction tx                 = 1;
    // The private (hidden) data for each input
    repeated PrivateInput inputs   = 2;
    // The private (hidden) data for each output
    repeated PrivateOutput outputs = 3;
}

message PrivateInput {
    // The amount of the input in nanoillium
    uint64 amount                 = 1;
    // Input asset ID
    bytes asset_ID                = 2;
    // Input salt
    bytes salt                    = 3;
    // Input state
    bytes state                   = 4;
    // The txo proof linking the input
    // commitment to the accumulator
    TxoProof txo_proof            = 5;
    // The locking script
    string script                 = 6;
    // The locking function parameters
    repeated bytes locking_params = 7;
    // Optional lurk expression used as
    // input to locking script. This is
    // only necessary for watch-only utxos.
    string unlocking_params       = 8;
}

message PrivateOutput {
    // Output scriptHash
    bytes script_hash = 1;
    // Output amount in nanoillium
    uint64 amount     = 2;
    // Output salt
    bytes salt        = 3;
    // Output asset ID
    bytes asset_ID    = 4;
    // Output state
    bytes state       = 5;
}

message TxoProof {
    // The commitment this inclusion proof is for
    bytes commitment      = 1;
    // The hashes that form the root preimage
    repeated bytes hashes = 2;
    // Flags indicate whether a hash in the hash list is left or right.
    // 0 == left, 1 == right.
    uint64 flags          = 3;
    // The index of this commitment in the tree
    uint64 index          = 4;
    // The txoRoot this proof links to. This is found in the block header.
    bytes txoRoot         = 5;
}

message Peer {
    // Peer ID
    string id             = 1;
    // The peer's user agent string
    string user_agent     = 2;
    // Multiaddrs
    repeated string addrs = 3;
}

message WalletTransaction {
    // Transaction ID
    bytes transaction_ID        = 1;
    // The net number of coins coming into the wallet in nanoillium
    // Positive = receive
    // Negative = send
    int64 netCoins              = 2;
    // The address and amount of each input if known
    // to the wallet.
    repeated IOMetadata inputs  = 3;
    // The address and amount of each output if known
    // to the wallet.
    repeated IOMetadata outputs = 4;
}

message IOMetadata {
    // Either address/amount information or unknown
    // if input or output did not belong to this wallet
    // and can't be decrypted.
    oneof io_type {
        TxIO tx_io      = 1;
        Unknown unknown = 2;
    }
    
    message TxIO {
        // Address associated with the input or output
        string address = 1;
        // Amount of coins associated with the input or output in nanoillium
        uint64 amount  = 2;
    }
    
    // Represents an input or output not belonging to
    // the wallet.
    message Unknown {}
}
```