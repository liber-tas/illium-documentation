"use strict";(self.webpackChunkillium_documentation=self.webpackChunkillium_documentation||[]).push([[4058],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),d=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return s.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||r;return n?s.createElement(m,i(i({ref:t},u),{},{components:n})):s.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=n(7462),a=(n(7294),n(3905));const r={sidebar_position:4},i="Wallet Service",o={unversionedId:"api/wallet_service",id:"api/wallet_service",title:"Wallet Service",description:"RPC Messages",source:"@site/docs/api/wallet_service.md",sourceDirName:"api",slug:"/api/wallet_service",permalink:"/docs/api/wallet_service",draft:!1,editUrl:"https://github.com/project-illium/illium-documentation/docs/api/wallet_service.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"apiSidebar",previous:{title:"Node Service",permalink:"/docs/api/node_service"},next:{title:"Wallet Server Service",permalink:"/docs/api/wallet_server"}},l={},d=[{value:"RPC Messages",id:"rpc-messages",level:3}],u={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wallet-service"},"Wallet Service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"service WalletService {\n    // GetBalance returns the combined balance of all addresses in the wallet\n    rpc GetBalance(GetBalanceRequest) returns (GetBalanceResponse) {}\n\n    // GetWalletSeed returns the mnemonic seed for the wallet. If the wallet\n    // seed has been deleted via the `DeletePrivateKeys` RPC an error will be\n    // returned.\n    //\n    // **Requires wallet to be unlocked**\n    rpc GetWalletSeed(GetWalletSeedRequest) returns (GetWalletSeedResponse) {}\n\n    // GetAddress returns the most recent address of the wallet.\n    rpc GetAddress(GetAddressRequest) returns (GetAddressResponse) {}\n\n    // GetAddresses returns all the addresses create by the wallet.\n    rpc GetAddresses(GetAddressesRequest) returns (GetAddressesResponse) {}\n\n    // GetAddressInfo returns additional metadata about an address.\n    rpc GetAddressInfo(GetAddressInfoRequest) returns (GetAddressInfoResponse) {}\n\n    // GetNewAddress generates a new address and returns it. Both a new spend key\n    // and view key will be derived from the mnemonic seed.\n    rpc GetNewAddress(GetNewAddressRequest) returns (GetNewAddressResponse) {}\n\n    // GetTimelockedAddress returns a timelocked address that cannot be spent\n    // from until the given timelock has passed. The private key used for this\n    // address is the same as the wallet's most recent spend key used in a basic\n    // address. This implies the key can be derived from seed, however the wallet\n    // will not detect incoming payments to this address unless the timelock is\n    // included in the utxo's state field.\n    rpc GetTimelockedAddress(GetTimelockedAddressRequest) returns (GetTimelockedAddressResponse) {}\n\n    // GetTransactions returns the list of transactions for the wallet\n    rpc GetTransactions(GetTransactionsRequest) returns (GetTransactionsResponse) {}\n\n    // GetUtxos returns a list of the wallet's current unspent transaction outputs (UTXOs)\n    rpc GetUtxos(GetUtxosRequest) returns (GetUtxosResponse) {}\n\n    // GetPrivateKey returns the serialized spend and view keys for the given address\n    //\n    // **Requires wallet to be unlocked**\n    rpc GetPrivateKey(GetPrivateKeyRequest) returns (GetPrivateKeyResponse) {}\n\n    // ImportAddress imports a watch address into the wallet.\n    rpc ImportAddress(ImportAddressRequest) returns (ImportAddressResponse) {}\n\n    // CreateMultisigSpendKeypair generates a spend keypair for use in a multisig address\n    rpc CreateMultisigSpendKeypair(CreateMultisigSpendKeypairRequest) returns (CreateMultisigSpendKeypairResponse) {}\n\n    // CreateMultisigViewKeypair generates a view keypair for use in a multisig address\n    rpc CreateMultisigViewKeypair(CreateMultisigViewKeypairRequest) returns (CreateMultisigViewKeypairResponse) {}\n\n    // CreateMultisigAddress generates a new multisig address using the provided public keys\n    //\n    // Note this address is *not* imported. You will need to call `ImportAddress` if you want to watch\n    // it.\n    rpc CreateMultisigAddress(CreateMultisigAddressRequest) returns (CreateMultisigAddressResponse) {}\n\n    // CreateMultiSignature generates and returns a signature for use when proving a multisig transaction\n    rpc CreateMultiSignature(CreateMultiSignatureRequest) returns (CreateMultiSignatureResponse) {}\n\n    // ProveMultisig creates a proof for a transaction with a multisig input\n    rpc ProveMultisig(ProveMultisigRequest) returns (ProveMultisigResponse) {}\n\n    // WalletLock encrypts the wallet's private keys\n    rpc WalletLock(WalletLockRequest) returns (WalletLockResponse) {}\n\n    // WalletUnlock decrypts the wallet seed and holds it in memory for the specified period of time\n    rpc WalletUnlock(WalletUnlockRequest) returns (WalletUnlockResponse) {}\n\n    // SetWalletPassphrase encrypts the wallet for the first time\n    rpc SetWalletPassphrase(SetWalletPassphraseRequest) returns (SetWalletPassphraseResponse) {}\n\n    // ChangeWalletPassphrase changes the passphrase used to encrypt the wallet private keys\n    rpc ChangeWalletPassphrase(ChangeWalletPassphraseRequest) returns (ChangeWalletPassphraseResponse) {}\n\n    // DeletePrivateKeys deletes the wallet's private keys and seed from disk essentially turning the wallet\n    // into a watch-only wallet. It will still record incoming transactions but cannot spend them.\n    //\n    // **Requires wallet to be unlocked**\n    rpc DeletePrivateKeys(DeletePrivateKeysRequest) returns (DeletePrivateKeysResponse) {}\n\n    // CreateRawTransaction creates a new, unsigned (unproven) transaction using the given parameters\n    rpc CreateRawTransaction(CreateRawTransactionRequest) returns (CreateRawTransactionResponse) {}\n\n    // CreateRawStakeTransaction creates a new, unsigned (unproven) stake transaction using the given parameters\n    rpc CreateRawStakeTransaction(CreateRawStakeTransactionRequest) returns (CreateRawStakeTransactionResponse) {}\n\n    // ProveRawTransaction creates the zk-proof for the transaction. Assuming there are no errors, this\n    // transaction should be ready for broadcast.\n    rpc ProveRawTransaction(ProveRawTransactionRequest) returns (ProveRawTransactionResponse) {}\n\n    // Stake stakes the selected wallet UTXOs and turns the node into a validator\n    //\n    // **Requires wallet to be unlocked**\n    rpc Stake(StakeRequest) returns (StakeResponse) {}\n\n    // SetAutoStakeRewards make it such that any validator rewards that are earned are automatically staked\n    //\n    // **Requires wallet to be unlocked**\n    rpc SetAutoStakeRewards(SetAutoStakeRewardsRequest) returns (SetAutoStakeRewardsResponse) {}\n\n    // Spend sends coins from the wallet according to the provided parameters\n    //\n    // **Requires wallet to be unlocked**\n    rpc Spend(SpendRequest) returns (SpendResponse) {}\n\n    // TimelockCoins moves coins into a timelocked address using the requested timelock.\n    // The internal wallet will be able to spend the coins after the timelock expires and\n    // the transaction will be recoverable if the wallet is restored from seed.\n    //\n    // This RPC primarily exists to lock coins for staking purposes.\n    //\n    // **Requires wallet to be unlocked**\n    rpc TimelockCoins(TimelockCoinsRequest) returns (TimelockCoinsResponse) {}\n\n    // SweepWallet sweeps all the coins from this wallet to the provided address.\n    // This RPC is provided so that you don't have to try to guess the correct fee\n    // to take the wallet's balance down to zero. Here the fee will be subtracted \n    // from the total funds. \n    //\n    // **Requires wallet to be unlocked**\n    rpc SweepWallet(SweepWalletRequest) returns (SweepWalletResponse) {}\n}\n")),(0,a.kt)("h3",{id:"rpc-messages"},"RPC Messages"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"message GetBalanceRequest {}\nmessage GetBalanceResponse {\n    // Balance response\n    uint64 balance = 1;\n}\n\nmessage GetWalletSeedRequest {}\nmessage GetWalletSeedResponse {\n    // The wallet's mnemonic seed\n    string mnemonic_seed = 1;\n}\n\nmessage GetAddressRequest {}\nmessage GetAddressResponse {\n    // The most recent wallet address\n    string address = 1;\n}\n\nmessage GetTimelockedAddressRequest {\n    // The unix timestamp (in seconds) to lock the coins until\n    int64 lock_until = 1;\n}\nmessage GetTimelockedAddressResponse {\n    // The resulting timelocked address\n    string address = 1;\n}\n\nmessage GetAddressesRequest {}\nmessage GetAddressesResponse {\n    // All wallet addresses\n    repeated string addresses = 1;\n}\n\nmessage GetNewAddressRequest {}\nmessage GetNewAddressResponse {\n    // A fresh address generated by the wallet\n    string address = 1;\n}\n\nmessage GetAddressInfoRequest {\n    // The address to get info for\n    string address = 1;\n}\nmessage GetAddressInfoResponse {\n    // The address to import\n    string address          = 1;\n    \n    // This is the serialized unlocking script\n    // <scriptCommitment><scriptParams>\n    bytes unlockingScript   = 2;\n\n    //  The private view key for the address \n    bytes viewPrivateKey    = 3;\n    \n    // Is this address watch only\n    bool watchOnly          = 4;\n}\n\nmessage GetTransactionsRequest {}\nmessage GetTransactionsResponse {\n    // All transactions in the wallet\n    repeated WalletTransaction txs = 1;\n}\n\nmessage GetUtxosRequest {}\nmessage GetUtxosResponse {\n    // The full list of utxos in the wallet\n    repeated Utxo utxos = 1;\n}\n\nmessage GetPrivateKeyRequest {\n    // The address to fetch private keys for\n    string address = 1;\n}\nmessage GetPrivateKeyResponse {\n    bytes serialized_keys = 2;\n}\n\nmessage ImportAddressRequest {\n    // The address to import\n    string address          = 1;\n\n    // The address contains a scriptHash. We also\n    // need what's behind the hash in order to\n    // import an address and detect spends.\n    //\n    // This is the serialized unlocking script\n    // <scriptCommitment><scriptParams>\n    bytes unlockingScript   = 2;\n\n    // The view private key needed to decrypt and\n    // detect transactions.\n    bytes viewPrivateKey    = 3;\n\n    // Should the wallet rescan the blockchain looking for\n    // transactions for this address.\n    bool rescan             = 4;\n    // If so what height should it start the rescan.\n    uint32 rescanFromHeight = 5;\n}\nmessage ImportAddressResponse {}\n\nmessage CreateMultisigSpendKeypairRequest{}\nmessage CreateMultisigSpendKeypairResponse{\n    // A private key response\n    bytes privkey = 1;\n    // The corresponding public key\n    bytes pubkey = 2;\n}\n\nmessage CreateMultisigViewKeypairRequest{}\nmessage CreateMultisigViewKeypairResponse{\n    // A private key response\n    bytes privkey = 1;\n    // The corresponding public key\n    bytes pubkey = 2;\n}\n\nmessage CreateMultisigAddressRequest {\n    // A list of public keys to use for the multisig address\n    repeated bytes pubkeys = 1;\n    // The number of keys required to sign the tranaction to\n    // release the funds.\n    uint32 threshold       = 2;\n\n    // A view key to use with the address\n    bytes view_pubkey      = 3;\n}\nmessage CreateMultisigAddressResponse {\n    // Multisig address response\n    string address = 1;\n}\n\nmessage CreateMultiSignatureRequest {\n    oneof tx_or_sighash {\n        // Either provide the transaction so the sighash can be computed\n        Transaction tx = 1;\n        // Or just provide the sighash itself\n        bytes sighash  = 2;\n    }\n\n    // A private key to sign with\n    bytes private_key = 3;\n}\nmessage CreateMultiSignatureResponse {\n    // A signature covering the sighash\n    bytes signature = 1;\n}\n\nmessage ProveMultisigRequest {\n    // A transaction to prove. This RPC requires there to be only one\n    // input and that the input be a multisig script.\n    RawTransaction tx   = 1;\n\n    // A list of signatures. Each one must cover the transaction's sighash.\n    repeated bytes sigs = 2;\n}\nmessage ProveMultisigResponse {\n    // A full transaction with the proof attached\n    Transaction proved_tx = 1;\n}\n\nmessage WalletLockRequest {}\nmessage WalletLockResponse {}\n\nmessage WalletUnlockRequest {\n    // The wallet passphrase used to decrypt\n    string passphrase = 1;\n    // The duration (in seconds) to leave the wallet decrypted for.\n    // It will automatically be re-encrypted after the duration passes.\n    uint32 duration = 2;\n}\nmessage WalletUnlockResponse {}\n\nmessage SetWalletPassphraseRequest {\n    // Wallet passphrase\n    string passphrase = 1;\n}\nmessage SetWalletPassphraseResponse{}\n\nmessage ChangeWalletPassphraseRequest {\n    // Current passphrase\n    string current_passphrase = 1;\n    // Passphrase to change it to\n    string new_passphrase     = 2;\n}\nmessage ChangeWalletPassphraseResponse {}\n\nmessage DeletePrivateKeysRequest {}\nmessage DeletePrivateKeysResponse {}\n\nmessage CreateRawTransactionRequest {\n    // A list of either utxo commitments or private inputs\n    repeated Input inputs     = 1;\n    // A list of outputs to send coins to\n    repeated Output outputs   = 2;\n    // A bool to control whether the wallet will automatically append a\n    // change output and send the remainder of the coins (minus a fee)\n    // to the change output.\n    bool append_change_output = 3;\n    // If append_change_output is true you can specify the fee amount to use.\n    // If zero the wallet will use its internal fee policy.\n    uint64 fee_per_kilobyte   = 4;\n\n    message Input {\n        oneof commitment_or_private_input {\n            // This is a utxo commitment known to the wallet\n            bytes commitment = 1;\n            // If trying to create a transaction spending a utxo that the\n            // wallet does not know about you must provide the full private\n            // input data.\n            PrivateInput input = 2;\n        }\n    }\n\n    message Output {\n        // Address to send coins to\n        string address = 1;\n        // The amount to send\n        uint64 amount  = 2;\n        // An optional state field\n        bytes state    = 3;\n    }\n}\nmessage CreateRawTransactionResponse {\n    // Raw transaction response\n    RawTransaction tx = 1;\n}\n\nmessage CreateRawStakeTransactionRequest {\n    // A list of either utxo commitments or private inputs\n    Input input = 1;\n    \n    message Input {\n        oneof commitment_or_private_input {\n            // This is a utxo commitment known to the wallet\n            bytes commitment = 1;\n            // If trying to create a transaction spending a utxo that the\n            // wallet does not know about you must provide the full private\n            // input data.\n            PrivateInput input = 2;\n        }\n    }\n}\nmessage CreateRawStakeTransactionResponse {\n    // Raw transaction response\n    RawTransaction tx = 1;\n}\n\nmessage ProveRawTransactionRequest {\n    // The raw transaction to prove\n    RawTransaction tx = 1;\n}\nmessage ProveRawTransactionResponse {\n    // A full transaction with the proof attached\n    Transaction proved_tx = 1;\n}\n\nmessage StakeRequest {\n    // The utxos to stake identified by their commitment hashes\n    repeated bytes commitments = 1;\n}\nmessage StakeResponse {}\n\nmessage SetAutoStakeRewardsRequest {\n    // Whether to turn on or off autostaking\n    bool autostake = 1;\n}\nmessage SetAutoStakeRewardsResponse {}\n\nmessage SpendRequest {\n    // Address to send funds to\n    string to_address                = 1;\n    // Amount to send\n    uint64 amount                    = 2;\n    // The fee to use for the transaction.\n    // If zero the wallet will use its internal fee policy.\n    uint64 fee_per_kilobyte          = 3;\n    // An optional list of input commitments to spend. If this\n    // is empty the wallet will select its own inputs.\n    //\n    // Note that staked commitments will not be selected by\n    // the wallet. You will need to list staked commitments\n    // here if you wish to spend them.\n    repeated bytes input_commitments = 4;\n}\nmessage SpendResponse {\n    // The transaction ID of the transaction.\n    //\n    // If submission was unsuccessful and error will be returned.\n    bytes transaction_ID = 1;\n}\n\nmessage TimelockCoinsRequest {\n    // Amount of coins to lock\n    uint64 amount                    = 1;\n    // The unix time (in seconds) to lock the coins until\n    int64 lock_until                 = 2;\n    // The fee to use for the transaction.\n    // If zero the wallet will use its internal fee policy.\n    uint64 fee_per_kilobyte          = 3;\n    // An optional list of input commitments to spend. If this\n    // is empty the wallet will select its own inputs.\n    //\n    // Note that staked commitments will not be selected by\n    // the wallet. You will need to list staked commitments\n    // here if you wish to spend them.\n    repeated bytes input_commitments = 4;\n}\nmessage TimelockCoinsResponse {\n    // The transaction ID of the transaction.\n    //\n    // If submission was unsuccessful and error will be returned.\n    bytes transaction_ID = 1;\n}\n\nmessage SweepWalletRequest {\n    // Address to send funds to\n    string to_address       = 1;\n    \n    // The fee to use for the transaction.\n    // If zero the wallet will use its internal fee policy.\n    uint64 fee_per_kilobyte = 2;\n}\nmessage SweepWalletResponse {\n    // The transaction ID of the transaction.\n    //\n    // If submission was unsuccessful and error will be returned.\n    bytes transaction_ID = 1;\n}\n")))}c.isMDXComponent=!0}}]);