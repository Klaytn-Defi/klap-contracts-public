/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IBandStdReference } from "./IBandStdReference";

export class IBandStdReferenceFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBandStdReference {
    return new Contract(address, _abi, signerOrProvider) as IBandStdReference;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_base",
        type: "string",
      },
      {
        internalType: "string",
        name: "_quote",
        type: "string",
      },
    ],
    name: "getReferenceData",
    outputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastUpdatedBase",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastUpdatedRate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
