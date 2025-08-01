export const twapABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_iweth",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint64",
        "name": "id",
        "type": "uint64"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "maker",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "exchange",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "slippagePercent",
        "type": "uint32"
      },
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "time",
            "type": "uint32"
          },
          {
            "internalType": "address",
            "name": "taker",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "exchange",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "dstAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "dstFee",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "indexed": false,
        "internalType": "struct OrderLib.Bid",
        "name": "bid",
        "type": "tuple"
      }
    ],
    "name": "OrderBid",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint64",
        "name": "id",
        "type": "uint64"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "maker",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "OrderCanceled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint64",
        "name": "id",
        "type": "uint64"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "maker",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "exchange",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "taker",
        "type": "address"
      }
    ],
    "name": "OrderCompleted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint64",
        "name": "id",
        "type": "uint64"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "maker",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "exchange",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "exchange",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "srcToken",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "dstToken",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "srcAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "srcBidAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "dstMinAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint32",
            "name": "deadline",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "bidDelay",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "fillDelay",
            "type": "uint32"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "indexed": false,
        "internalType": "struct OrderLib.Ask",
        "name": "ask",
        "type": "tuple"
      }
    ],
    "name": "OrderCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint64",
        "name": "id",
        "type": "uint64"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "maker",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "exchange",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "taker",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "srcAmountIn",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "dstAmountOut",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "dstFee",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "srcFilledAmount",
        "type": "uint256"
      }
    ],
    "name": "OrderFilled",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "MIN_BID_DELAY_SECONDS",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MIN_OUTBID_PERCENT",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "PERCENT_BASE",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "STALE_BID_SECONDS",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "STATUS_CANCELED",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "STATUS_COMPLETED",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "VERSION",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "exchange",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "srcToken",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "dstToken",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "srcAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "srcBidAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "dstMinAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint32",
            "name": "deadline",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "bidDelay",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "fillDelay",
            "type": "uint32"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "internalType": "struct OrderLib.Ask",
        "name": "_ask",
        "type": "tuple"
      }
    ],
    "name": "ask",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "id",
        "type": "uint64"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "id",
        "type": "uint64"
      },
      {
        "internalType": "address",
        "name": "exchange",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "dstFee",
        "type": "uint256"
      },
      {
        "internalType": "uint32",
        "name": "slippagePercent",
        "type": "uint32"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "bid",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "book",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "id",
        "type": "uint64"
      },
      {
        "internalType": "uint32",
        "name": "status",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "time",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "filledTime",
        "type": "uint32"
      },
      {
        "internalType": "uint256",
        "name": "srcFilledAmount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "maker",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "exchange",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "srcToken",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "dstToken",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "srcAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "srcBidAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "dstMinAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint32",
            "name": "deadline",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "bidDelay",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "fillDelay",
            "type": "uint32"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "internalType": "struct OrderLib.Ask",
        "name": "ask",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "time",
            "type": "uint32"
          },
          {
            "internalType": "address",
            "name": "taker",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "exchange",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "dstAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "dstFee",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "internalType": "struct OrderLib.Bid",
        "name": "bid",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "id",
        "type": "uint64"
      }
    ],
    "name": "cancel",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "id",
        "type": "uint64"
      }
    ],
    "name": "fill",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "iweth",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "length",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "makerOrders",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "id",
        "type": "uint64"
      }
    ],
    "name": "order",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint64",
            "name": "id",
            "type": "uint64"
          },
          {
            "internalType": "uint32",
            "name": "status",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "time",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "filledTime",
            "type": "uint32"
          },
          {
            "internalType": "uint256",
            "name": "srcFilledAmount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "maker",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "exchange",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "srcToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "dstToken",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "srcAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "srcBidAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "dstMinAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint32",
                "name": "deadline",
                "type": "uint32"
              },
              {
                "internalType": "uint32",
                "name": "bidDelay",
                "type": "uint32"
              },
              {
                "internalType": "uint32",
                "name": "fillDelay",
                "type": "uint32"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "internalType": "struct OrderLib.Ask",
            "name": "ask",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint32",
                "name": "time",
                "type": "uint32"
              },
              {
                "internalType": "address",
                "name": "taker",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "exchange",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "dstAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "dstFee",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "internalType": "struct OrderLib.Bid",
            "name": "bid",
            "type": "tuple"
          }
        ],
        "internalType": "struct OrderLib.Order",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "maker",
        "type": "address"
      }
    ],
    "name": "orderIdsByMaker",
    "outputs": [
      {
        "internalType": "uint64[]",
        "name": "",
        "type": "uint64[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "id",
        "type": "uint64"
      }
    ],
    "name": "prune",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "status",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]