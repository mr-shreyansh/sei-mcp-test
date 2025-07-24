import {
  type Address,
  Client,
  type Hash,
  getContract,
  parseEther,
  parseUnits,
} from "viem";
import { DEFAULT_NETWORK } from "../chains.js";
import { getPublicClient, getWalletClientFromProvider } from "./clients.js";
import * as services from "./index.js";
import { constructSDK } from "@orbs-network/twap-sdk";


const twap_abi = [
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
];


const config = {
    chainName: "sei",
    chainId: 1329,
    twapVersion: 4,
    twapAddress: "0xde737dB24548F8d41A4a3Ca2Bac8aaaDc4DBA099",
    lensAddress: "0xa1376f2Bb80D3cF6c2D8ebEf34b3d122e9af4020",
    takers: [
        "0xA05405b6340A7F43dC5835351BFC4f5b1F028359",
        "0xE3Efef1563a5960ACc731F9e4d6f4cBf5bd87dcA"
    ],
    bidDelaySeconds: 60,
    minChunkSizeUsd: 50,
    name: "DragonSwap",
    partner: "Orbs:TWAP:DragonSwap",
    exchangeAddress: "0xf2F933FafbDB97062CfA3c447ff373e76A90Efd6",
    exchangeType: "ExchangeV2",
    pathfinderKey: ""
};


export async function buildask(
    srcTokenAddress: string,
    destTokenAddress: string,
    srcAmount: string,
    fillDelay: boolean,
    chunks: number,
    deadline: number,
    network = config.chainName
) {
    const twapSDK = constructSDK({ config });

    // Get decimals from source and destination token contracts
    const publicClient = getPublicClient(network);

    const srcTokenContract = getContract({
        address: srcTokenAddress as Address,
        abi: [
            {
                inputs: [],
                name: "decimals",
                outputs: [{ type: "uint8" }],
                stateMutability: "view",
                type: "function",
            },
        ],
        client: publicClient,
    });
    const srcDecimals = await srcTokenContract.read.decimals();

    const destTokenContract = getContract({
        address: destTokenAddress as Address,
        abi: [
            {
                inputs: [],
                name: "decimals",
                outputs: [{ type: "uint8" }],
                stateMutability: "view",
                type: "function",
            },
        ],
        client: publicClient,
    });
    const destDecimals = await destTokenContract.read.decimals();

    // Convert srcAmount to proper decimals
    const parsedSrcAmount = parseUnits(srcAmount, srcDecimals);

    // Calculate chunk amount and min amount
    const srcTokenChunkAmount = twapSDK.getSrcTokenChunkAmount(parsedSrcAmount.toString(), chunks);
    const destTokenMinAmount = twapSDK.getDestTokenMinAmount(srcTokenChunkAmount, '', false, destDecimals);
    const fillDelayValue = twapSDK.getFillDelay(fillDelay);

    // Build ask params
    const askParams = twapSDK.getAskParams({
        destTokenMinAmount,
        destTokenAddress,
        srcTokenAddress,
        srcAmount: parsedSrcAmount.toString(),
        fillDelay: fillDelayValue,
        srcChunkAmount: srcTokenChunkAmount,
        deadline
    });
    console.log('askParams', askParams);

    // Return unsigned transaction for TWAP ask
    return {
        address: config.twapAddress,
        abi: twap_abi,
        functionName: "ask",
        args: [askParams]
    };
}