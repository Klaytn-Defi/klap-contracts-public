/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockFairAssetReserves } from "./MockFairAssetReserves";

export class MockFairAssetReservesFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _base: string,
    _lp_token: string,
    overrides?: Overrides
  ): Promise<MockFairAssetReserves> {
    return super.deploy(
      _base,
      _lp_token,
      overrides || {}
    ) as Promise<MockFairAssetReserves>;
  }
  getDeployTransaction(
    _base: string,
    _lp_token: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_base, _lp_token, overrides || {});
  }
  attach(address: string): MockFairAssetReserves {
    return super.attach(address) as MockFairAssetReserves;
  }
  connect(signer: Signer): MockFairAssetReservesFactory {
    return super.connect(signer) as MockFairAssetReservesFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockFairAssetReserves {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockFairAssetReserves;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_base",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lp_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "base",
    outputs: [
      {
        internalType: "contract IPriceOracle",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getAssetPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "getFairValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lp_token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lp_token",
        type: "address",
      },
    ],
    name: "updateLPToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_base",
        type: "address",
      },
    ],
    name: "updateOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516106763803806106768339818101604052604081101561003357600080fd5b50805160209091015160006100466100c1565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600180546001600160a01b039384166001600160a01b031991821617909155600280549290931691161790556100c5565b3390565b6105a2806100d46000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c806382c630661161006657806382c630661461011b5780638da5cb5b14610123578063b3596f071461012b578063f2fde38b14610151578063f60615261461017757610093565b80631cb44dfc146100985780631e98447b146100c05780635001f3b5146100ef578063715018a614610113575b600080fd5b6100be600480360360208110156100ae57600080fd5b50356001600160a01b031661019d565b005b6100dd600480360360208110156100d657600080fd5b5035610221565b60408051918252519081900360200190f35b6100f7610235565b604080516001600160a01b039092168252519081900360200190f35b6100be610244565b6100f76102f0565b6100f76102ff565b6100dd6004803603602081101561014157600080fd5b50356001600160a01b031661030e565b6100be6004803603602081101561016757600080fd5b50356001600160a01b031661031b565b6100be6004803603602081101561018d57600080fd5b50356001600160a01b031661041d565b6101a56104a1565b6001600160a01b03166101b66102ff565b6001600160a01b0316146101ff576040805162461bcd60e51b8152602060048201819052602482015260008051602061054d833981519152604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b600061022f826115e06104a5565b92915050565b6001546001600160a01b031681565b61024c6104a1565b6001600160a01b031661025d6102ff565b6001600160a01b0316146102a6576040805162461bcd60e51b8152602060048201819052602482015260008051602061054d833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6002546001600160a01b031681565b6000546001600160a01b031690565b50678ac7230489e8000090565b6103236104a1565b6001600160a01b03166103346102ff565b6001600160a01b03161461037d576040805162461bcd60e51b8152602060048201819052602482015260008051602061054d833981519152604482015290519081900360640190fd5b6001600160a01b0381166103c25760405162461bcd60e51b81526004018080602001828103825260268152602001806105066026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6104256104a1565b6001600160a01b03166104366102ff565b6001600160a01b03161461047f576040805162461bcd60e51b8152602060048201819052602482015260008051602061054d833981519152604482015290519081900360640190fd5b600280546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b6000826104b45750600061022f565b828202828482816104c157fe5b04146104fe5760405162461bcd60e51b815260040180806020018281038252602181526020018061052c6021913960400191505060405180910390fd5b939250505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a2646970667358221220109b6cfbde4c7dfb255a06c11bd3d2cd9d436b9144283254a43a4da378aaeb3664736f6c63430007060033";
