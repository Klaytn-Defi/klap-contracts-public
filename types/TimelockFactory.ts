/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Timelock } from "./Timelock";

export class TimelockFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    admin_: string,
    delay_: BigNumberish,
    overrides?: Overrides
  ): Promise<Timelock> {
    return super.deploy(admin_, delay_, overrides || {}) as Promise<Timelock>;
  }
  getDeployTransaction(
    admin_: string,
    delay_: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(admin_, delay_, overrides || {});
  }
  attach(address: string): Timelock {
    return super.attach(address) as Timelock;
  }
  connect(signer: Signer): TimelockFactory {
    return super.connect(signer) as TimelockFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Timelock {
    return new Contract(address, _abi, signerOrProvider) as Timelock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "delay_",
        type: "uint256",
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
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "CancelTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "ExecuteTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "NewDelay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "NewPendingAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "QueueTransaction",
    type: "event",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD",
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
    name: "MAXIMUM_DELAY",
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
    name: "MINIMUM_DELAY",
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
    name: "acceptAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
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
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "cancelTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
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
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "executeTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingAdmin",
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
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "queueTransaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "queuedTransactions",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "delay_",
        type: "uint256",
      },
    ],
    name: "setDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pendingAdmin_",
        type: "address",
      },
    ],
    name: "setPendingAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516118853803806118858339818101604052604081101561003357600080fd5b5080516020909101516202a30081101561007e5760405162461bcd60e51b81526004018080602001828103825260378152602001806118166037913960400191505060405180910390fd5b62278d008111156100c05760405162461bcd60e51b815260040180806020018281038252603881526020018061184d6038913960400191505060405180910390fd5b600080546001600160a01b039093166001600160a01b031990931692909217909155600255611722806100f46000396000f3fe6080604052600436106100c65760003560e01c80636a42b8f81161007f578063c1a287e211610059578063c1a287e2146105ed578063e177246e14610602578063f2b065371461062c578063f851a4401461066a576100cd565b80636a42b8f8146105ae5780637d645fab146105c3578063b1b43ae5146105d8576100cd565b80630825f38f146100d25780630e18b68114610287578063267822471461029e5780633a66f901146102cf5780634dd18bf51461042e578063591fcdfe14610461576100cd565b366100cd57005b600080fd5b610212600480360360a08110156100e857600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561011757600080fd5b82018360208201111561012957600080fd5b803590602001918460018302840111600160201b8311171561014a57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561019c57600080fd5b8201836020820111156101ae57600080fd5b803590602001918460018302840111600160201b831117156101cf57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550509135925061067f915050565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561024c578181015183820152602001610234565b50505050905090810190601f1680156102795780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561029357600080fd5b5061029c610b7e565b005b3480156102aa57600080fd5b506102b3610c1a565b604080516001600160a01b039092168252519081900360200190f35b3480156102db57600080fd5b5061041c600480360360a08110156102f257600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561032157600080fd5b82018360208201111561033357600080fd5b803590602001918460018302840111600160201b8311171561035457600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b8111156103a657600080fd5b8201836020820111156103b857600080fd5b803590602001918460018302840111600160201b831117156103d957600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505091359250610c29915050565b60408051918252519081900360200190f35b34801561043a57600080fd5b5061029c6004803603602081101561045157600080fd5b50356001600160a01b0316610f2b565b34801561046d57600080fd5b5061029c600480360360a081101561048457600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b8111156104b357600080fd5b8201836020820111156104c557600080fd5b803590602001918460018302840111600160201b831117156104e657600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561053857600080fd5b82018360208201111561054a57600080fd5b803590602001918460018302840111600160201b8311171561056b57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505091359250610fb9915050565b3480156105ba57600080fd5b5061041c611266565b3480156105cf57600080fd5b5061041c61126c565b3480156105e457600080fd5b5061041c611273565b3480156105f957600080fd5b5061041c61127a565b34801561060e57600080fd5b5061029c6004803603602081101561062557600080fd5b5035611281565b34801561063857600080fd5b506106566004803603602081101561064f57600080fd5b5035611376565b604080519115158252519081900360200190f35b34801561067657600080fd5b506102b361138b565b6000546060906001600160a01b031633146106cb5760405162461bcd60e51b81526004018080602001828103825260388152602001806114006038913960400191505060405180910390fd5b6000868686868660405160200180866001600160a01b031681526020018581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b83811015610731578181015183820152602001610719565b50505050905090810190601f16801561075e5780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b83811015610791578181015183820152602001610779565b50505050905090810190601f1680156107be5780820380516001836020036101000a031916815260200191505b5060408051601f1981840301815291815281516020928301206000818152600390935291205490995060ff16975061082f96505050505050505760405162461bcd60e51b815260040180806020018281038252603d815260200180611553603d913960400191505060405180910390fd5b8261083861139a565b10156108755760405162461bcd60e51b81526004018080602001828103825260458152602001806114a26045913960600191505060405180910390fd5b610882836212750061139e565b61088a61139a565b11156108c75760405162461bcd60e51b815260040180806020018281038252603381526020018061146f6033913960400191505060405180910390fd5b6000818152600360205260409020805460ff1916905584516060906108ed575083610970565b85805190602001208560405160200180836001600160e01b031916815260040182805190602001908083835b602083106109385780518252601f199092019160209182019101610919565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405290505b600080896001600160a01b031689846040518082805190602001908083835b602083106109ae5780518252601f19909201916020918201910161098f565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610a10576040519150601f19603f3d011682016040523d82523d6000602084013e610a15565b606091505b509150915081610a565760405162461bcd60e51b815260040180806020018281038252603d815260200180611636603d913960400191505060405180910390fd5b896001600160a01b0316847fa560e3198060a2f10670c1ec5b403077ea6ae93ca8de1c32b451dc1a943cd6e78b8b8b8b604051808581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b83811015610ad3578181015183820152602001610abb565b50505050905090810190601f168015610b005780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b83811015610b33578181015183820152602001610b1b565b50505050905090810190601f168015610b605780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a39998505050505050505050565b6001546001600160a01b03163314610bc75760405162461bcd60e51b81526004018080602001828103825260388152602001806115906038913960400191505060405180910390fd5b60008054336001600160a01b031991821617808355600180549092169091556040516001600160a01b03909116917f71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c91a2565b6001546001600160a01b031681565b600080546001600160a01b03163314610c735760405162461bcd60e51b81526004018080602001828103825260368152602001806116006036913960400191505060405180910390fd5b610c87600254610c8161139a565b9061139e565b821015610cc55760405162461bcd60e51b81526004018080602001828103825260498152602001806116736049913960600191505060405180910390fd5b6000868686868660405160200180866001600160a01b031681526020018581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b83811015610d2b578181015183820152602001610d13565b50505050905090810190601f168015610d585780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b83811015610d8b578181015183820152602001610d73565b50505050905090810190601f168015610db85780820380516001836020036101000a031916815260200191505b5097505050505050505060405160208183030381529060405280519060200120905060016003600083815260200190815260200160002060006101000a81548160ff021916908315150217905550866001600160a01b0316817f76e2796dc3a81d57b0e8504b647febcbeeb5f4af818e164f11eef8131a6a763f88888888604051808581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b83811015610e83578181015183820152602001610e6b565b50505050905090810190601f168015610eb05780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b83811015610ee3578181015183820152602001610ecb565b50505050905090810190601f168015610f105780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a39695505050505050565b333014610f695760405162461bcd60e51b81526004018080602001828103825260388152602001806115c86038913960400191505060405180910390fd5b600180546001600160a01b0319166001600160a01b0383811691909117918290556040519116907f69d78e38a01985fbb1462961809b4b2d65531bc93b2b94037f3334b82ca4a75690600090a250565b6000546001600160a01b031633146110025760405162461bcd60e51b81526004018080602001828103825260378152602001806114386037913960400191505060405180910390fd5b6000858585858560405160200180866001600160a01b031681526020018581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b83811015611068578181015183820152602001611050565b50505050905090810190601f1680156110955780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b838110156110c85781810151838201526020016110b0565b50505050905090810190601f1680156110f55780820380516001836020036101000a031916815260200191505b5097505050505050505060405160208183030381529060405280519060200120905060006003600083815260200190815260200160002060006101000a81548160ff021916908315150217905550856001600160a01b0316817f2fffc091a501fd91bfbff27141450d3acb40fb8e6d8382b243ec7a812a3aaf8787878787604051808581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b838110156111c05781810151838201526020016111a8565b50505050905090810190601f1680156111ed5780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b83811015611220578181015183820152602001611208565b50505050905090810190601f16801561124d5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a3505050505050565b60025481565b62278d0081565b6202a30081565b6212750081565b3330146112bf5760405162461bcd60e51b81526004018080602001828103825260318152602001806116bc6031913960400191505060405180910390fd5b6202a3008110156113015760405162461bcd60e51b81526004018080602001828103825260348152602001806114e76034913960400191505060405180910390fd5b62278d008111156113435760405162461bcd60e51b815260040180806020018281038252603881526020018061151b6038913960400191505060405180910390fd5b600281905560405181907f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c90600090a250565b60036020526000908152604090205460ff1681565b6000546001600160a01b031681565b4290565b6000828201838110156113f8576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b939250505056fe54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a2043616c6c206d75737420636f6d652066726f6d2061646d696e2e54696d656c6f636b3a3a63616e63656c5472616e73616374696f6e3a2043616c6c206d75737420636f6d652066726f6d2061646d696e2e54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472616e73616374696f6e206973207374616c652e54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472616e73616374696f6e206861736e2774207375727061737365642074696d65206c6f636b2e54696d656c6f636b3a3a73657444656c61793a2044656c6179206d75737420657863656564206d696e696d756d2064656c61792e54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206e6f7420657863656564206d6178696d756d2064656c61792e54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472616e73616374696f6e206861736e2774206265656e207175657565642e54696d656c6f636b3a3a61636365707441646d696e3a2043616c6c206d75737420636f6d652066726f6d2070656e64696e6741646d696e2e54696d656c6f636b3a3a73657450656e64696e6741646d696e3a2043616c6c206d75737420636f6d652066726f6d2054696d656c6f636b2e54696d656c6f636b3a3a71756575655472616e73616374696f6e3a2043616c6c206d75737420636f6d652066726f6d2061646d696e2e54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472616e73616374696f6e20657865637574696f6e2072657665727465642e54696d656c6f636b3a3a71756575655472616e73616374696f6e3a20457374696d6174656420657865637574696f6e20626c6f636b206d75737420736174697366792064656c61792e54696d656c6f636b3a3a73657444656c61793a2043616c6c206d75737420636f6d652066726f6d2054696d656c6f636b2ea2646970667358221220041a12302cd3e74d78ec807a56bfbad236149b0be77dca9d2bfa2414966164ee64736f6c6343000706003354696d656c6f636b3a3a636f6e7374727563746f723a2044656c6179206d75737420657863656564206d696e696d756d2064656c61792e54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206e6f7420657863656564206d6178696d756d2064656c61792e";
