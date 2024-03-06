---
sidebar_position: 7
---

# Block Format

```go
message BlockHeader {
    uint32 version    = 1;
    uint32 height     = 2;
    bytes parent      = 3;
    int64 timestamp   = 4;
    bytes tx_root     = 5;
    bytes producer_ID = 6;
    bytes signature   = 7;
}

message Block {
    BlockHeader header                = 1;
    repeated Transaction transactions = 2;
}

message BlockTxs {
    repeated Transaction transactions = 1;
	repeated bytes wids               = 2;
}

message XThinnerBlock {
    BlockHeader header                          = 1;
    uint32 tx_count                             = 2;
    bytes pops                                  = 3;
    bytes pushes                                = 4;
    bytes push_bytes                            = 5;
    repeated PrefilledTransaction prefilled_txs = 6;

    message PrefilledTransaction {
        Transaction transaction = 1;
        uint32 index            = 2;
    }
}

message CompressedBlock {
    uint32 height             = 1;
    repeated CompressedTx txs = 2;
    
    message CompressedTx {
        bytes txid                = 1;
        repeated bytes nullifiers = 2;
        repeated Output outputs   = 3;
    }
}
```