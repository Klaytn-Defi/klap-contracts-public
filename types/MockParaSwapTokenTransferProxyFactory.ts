/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockParaSwapTokenTransferProxy } from "./MockParaSwapTokenTransferProxy";

export class MockParaSwapTokenTransferProxyFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MockParaSwapTokenTransferProxy> {
    return super.deploy(
      overrides || {}
    ) as Promise<MockParaSwapTokenTransferProxy>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockParaSwapTokenTransferProxy {
    return super.attach(address) as MockParaSwapTokenTransferProxy;
  }
  connect(signer: Signer): MockParaSwapTokenTransferProxyFactory {
    return super.connect(signer) as MockParaSwapTokenTransferProxyFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockParaSwapTokenTransferProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockParaSwapTokenTransferProxy;
  }
}

const _abi = [
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
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b61049e8061007d6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806315dacbea14610051578063715018a6146100665780638da5cb5b1461006e578063f2fde38b1461008c575b600080fd5b61006461005f3660046103a0565b61009f565b005b610064610192565b610076610246565b604051610083919061040a565b60405180910390f35b61006461009a36600461037f565b610255565b6100a761035f565b6000546001600160a01b03908116911614610109576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6040516323b872dd60e01b81526001600160a01b038516906323b872dd906101399086908690869060040161041e565b602060405180830381600087803b15801561015357600080fd5b505af1158015610167573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061018b91906103ea565b5050505050565b61019a61035f565b6000546001600160a01b039081169116146101fc576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b61025d61035f565b6000546001600160a01b039081169116146102bf576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b0381166103045760405162461bcd60e51b81526004018080602001828103825260268152602001806104436026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b80356001600160a01b038116811461037a57600080fd5b919050565b600060208284031215610390578081fd5b61039982610363565b9392505050565b600080600080608085870312156103b5578283fd5b6103be85610363565b93506103cc60208601610363565b92506103da60408601610363565b9396929550929360600135925050565b6000602082840312156103fb578081fd5b81518015158114610399578182fd5b6001600160a01b0391909116815260200190565b6001600160a01b03938416815291909216602082015260408101919091526060019056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a2646970667358221220c3d321ce8d2615dffbcaace255adcaf8ef8d5075ae1760dedcf9b604814e079d64736f6c63430007060033";
