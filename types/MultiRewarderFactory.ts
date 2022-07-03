/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MultiRewarder } from "./MultiRewarder";

export class MultiRewarderFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MultiRewarder> {
    return super.deploy(overrides || {}) as Promise<MultiRewarder>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MultiRewarder {
    return super.attach(address) as MultiRewarder;
  }
  connect(signer: Signer): MultiRewarderFactory {
    return super.connect(signer) as MultiRewarderFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MultiRewarder {
    return new Contract(address, _abi, signerOrProvider) as MultiRewarder;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "OnReward",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "RewardRateUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
      {
        internalType: "contract IERC20[]",
        name: "_rewardToken",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "_chefContract",
        type: "address",
      },
      {
        internalType: "enum MultiRewarder.ContractType",
        name: "_contractType",
        type: "uint8",
      },
      {
        internalType: "uint256[]",
        name: "_tokenPerBlock",
        type: "uint256[]",
      },
    ],
    name: "addPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenPerBlock",
        type: "uint256",
      },
    ],
    name: "addRewardTokenToPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
    ],
    name: "getLPSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "lpSupply",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_lpAmount",
        type: "uint256",
      },
    ],
    name: "onReward",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingTokens",
    outputs: [
      {
        internalType: "contract IERC20[]",
        name: "rewardTokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "rewardAmounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
    ],
    name: "poolExists",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "numRewardTokens",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "chefContract",
        type: "address",
      },
      {
        internalType: "enum MultiRewarder.ContractType",
        name: "contractType",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "lastRewardBlock",
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
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
    ],
    name: "reclaimTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
    ],
    name: "removePool",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "retrieveTokenPerBlock",
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
        name: "_pool",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_tokenPerBlock",
        type: "uint256[]",
      },
    ],
    name: "setRewardRate",
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
        name: "_pool",
        type: "address",
      },
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061256d806100206000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80637ed292f1116100a25780639a7b5f11116100715780639a7b5f1114610213578063c1ea386814610236578063e23e638214610249578063f2fde38b1461025c578063f860bc101461026f5761010b565b80637ed292f1146101d05780638129fc1c146101e35780638da5cb5b146101eb5780639365fbbe146102005761010b565b80633b7d0946116100de5780633b7d09461461018f578063475c0078146101a2578063715018a6146101b55780637b46c54f146101bd5761010b565b8063097cd04f146101105780630f208beb1461013a5780631e1c6a071461015a5780632cadf6311461017a575b600080fd5b61012361011e36600461200c565b610282565b604051610131929190612283565b60405180910390f35b61014d61014836600461200c565b6106cb565b60405161013191906123f4565b61016d610168366004611ff0565b6106e8565b6040516101319190612306565b61018d610188366004612084565b61071d565b005b61018d61019d366004611ff0565b610987565b61018d6101b0366004612183565b610a52565b61018d610b5d565b61018d6101cb366004611ff0565b610c09565b61014d6101de366004612197565b610d0b565b61018d610d70565b6101f3610e1a565b604051610131919061226f565b61018d61020e366004612130565b610e29565b610226610221366004611ff0565b610fdd565b60405161013194939291906123fd565b61018d6102443660046121c2565b611017565b61018d610257366004612044565b6110d7565b61018d61026a366004611ff0565b6113f6565b61014d61027d366004611ff0565b6114f9565b60608061028e846106e8565b6102b057505060408051600080825260208201908152818301909252906106c4565b6001600160a01b0384166000908152606560209081526040808320815181546101009481028201850190935260e0810183815290939192849284919084018282801561032557602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610307575b50505050508152602001600182015481526020016002820180548060200260200160405190810160405280929190818152602001828054801561038757602002820191906000526020600020905b815481526020019060010190808311610373575b505050918352505060038201546001600160a01b0381166020830152604090910190600160a01b900460ff1660018111156103be57fe5b60018111156103c957fe5b8152602001600482015481526020016005820180548060200260200160405190810160405280929190818152602001828054801561042657602002820191906000526020600020905b815481526020019060010190808311610412575b505050919092525050506001600160a01b03808716600090815260666020908152604080832093891683529281528282208351808501855281548152600182018054865181860281018601909752808752969750939590949193858401939091908301828280156104b657602002820191906000526020600020905b8154815260200190600101908083116104a2575b5050509190925250508151919250501580156104d55750602081015151155b1561052d578151602083015167ffffffffffffffff811180156104f757600080fd5b50604051908082528060200260200182016040528015610521578160200160208202803683370190505b509350935050506106c4565b6000826020015167ffffffffffffffff8111801561054a57600080fd5b50604051908082528060200260200182016040528015610574578160200160208202803683370190505b5090506000610582886114f9565b604085015190915081156106b95760006105a98660a00151436117b890919063ffffffff16565b905060005b86602001518110156106b65760006105e68860c0015183815181106105cf57fe5b60200260200101518461181590919063ffffffff16565b905061062a610604866105fe8464e8d4a51000611815565b90611875565b8960400151848151811061061457fe5b60200260200101516118dc90919063ffffffff16565b84838151811061063657fe5b6020026020010181815250506106968760200151838151811061065557fe5b602002602001015161069064e8d4a510006105fe88878151811061067557fe5b60200260200101518c6000015161181590919063ffffffff16565b906117b8565b8683815181106106a257fe5b6020908102919091010152506001016105ae565b50505b505091519350909150505b9250929050565b606660209081526000928352604080842090915290825290205481565b6001600160a01b0381811660009081526065602052604081206003015490911661071457506000610718565b5060015b919050565b610725611936565b6001600160a01b0316610736610e1a565b6001600160a01b03161461077f576040805162461bcd60e51b815260206004820181905260248201526000805160206124ee833981519152604482015290519081900360640190fd5b610788876106e8565b156107ae5760405162461bcd60e51b81526004016107a5906123cf565b60405180910390fd5b8481146107cd5760405162461bcd60e51b81526004016107a590612311565b6040518060e00160405280878780806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250505090825250602081018790526040018667ffffffffffffffff8111801561082f57600080fd5b50604051908082528060200260200182016040528015610859578160200160208202803683370190505b508152602001856001600160a01b0316815260200184600181111561087a57fe5b815260200143815260200183838080602002602001604051908101604052809392919081815260200183836020028082843760009201829052509390945250506001600160a01b038a168152606560209081526040909120835180519193506108e7928492910190611ea0565b5060208281015160018301556040830151805161090a9260028501920190611f05565b5060608201516003820180546001600160a01b0319166001600160a01b03909216919091178082556080840151919060ff60a01b1916600160a01b83600181111561095157fe5b021790555060a0820151600482015560c0820151805161097b916005840191602090910190611f05565b50505050505050505050565b61098f611936565b6001600160a01b03166109a0610e1a565b6001600160a01b0316146109e9576040805162461bcd60e51b815260206004820181905260248201526000805160206124ee833981519152604482015290519081900360640190fd5b6001600160a01b038116600090815260656020526040812090610a0c8282611f40565b6001820160009055600282016000610a249190611f40565b6003820180546001600160a81b0319169055600060048301819055610a4d906005840190611f40565b505050565b610a5a611936565b6001600160a01b0316610a6b610e1a565b6001600160a01b031614610ab4576040805162461bcd60e51b815260206004820181905260248201526000805160206124ee833981519152604482015290519081900360640190fd5b610abd836106e8565b610ad95760405162461bcd60e51b81526004016107a590612377565b610ae283610c09565b6001600160a01b039283166000908152606560209081526040822080546001808201835582855283852090910180546001600160a01b03191696909716959095179095556005850180548086018255908352818320019290925560028401805480850182559082529181209091015590810180549091019055565b610b65611936565b6001600160a01b0316610b76610e1a565b6001600160a01b031614610bbf576040805162461bcd60e51b815260206004820181905260248201526000805160206124ee833981519152604482015290519081900360640190fd5b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b6001600160a01b03811660009081526065602052604090206004810154431115610d07576000610c38836114f9565b90508015610cff576000610c598360040154436117b890919063ffffffff16565b905060005b8360010154811015610cfc576000610c98856005018381548110610c7e57fe5b90600052602060002001548461181590919063ffffffff16565b9050610cd8610cb0856105fe8464e8d4a51000611815565b866002018481548110610cbf57fe5b90600052602060002001546118dc90919063ffffffff16565b856002018381548110610ce757fe5b60009182526020909120015550600101610c5e565b50505b504360048201555b5050565b6001600160a01b0382166000908152606560205260408120600501548210610d3557506000610d6a565b6001600160a01b0383166000908152606560205260409020600501805483908110610d5c57fe5b906000526020600020015490505b92915050565b600054610100900460ff1680610d895750610d8961193a565b80610d97575060005460ff16155b610dd25760405162461bcd60e51b815260040180806020018281038252602e81526020018061249f602e913960400191505060405180910390fd5b600054610100900460ff16158015610dfd576000805460ff1961ff0019909116610100171660011790555b610e0561194b565b8015610e17576000805461ff00191690555b50565b6033546001600160a01b031690565b610e31611936565b6001600160a01b0316610e42610e1a565b6001600160a01b031614610e8b576040805162461bcd60e51b815260206004820181905260248201526000805160206124ee833981519152604482015290519081900360640190fd5b610e9483610c09565b6001600160a01b0383166000908152606560209081526040808320600581018054835181860281018601909452808452919493909190830182828015610ef957602002820191906000526020600020905b815481526020019060010190808311610ee5575b505050600185015492935050508314610f245760405162461bcd60e51b81526004016107a590612340565b610f32600583018585611f5e565b5060005b8260010154811015610fd557826000018181548110610f5157fe5b60009182526020909120015482516001600160a01b03918216918816907f8278852cd9f9621b1a0c55b736835498846a132099a497f93ed11175fdb360dd90859085908110610f9c57fe5b6020026020010151888886818110610fb057fe5b90506020020135604051610fc592919061242f565b60405180910390a3600101610f36565b505050505050565b60656020526000908152604090206001810154600382015460049092015490916001600160a01b03811691600160a01b90910460ff169084565b61101f611936565b6001600160a01b0316611030610e1a565b6001600160a01b031614611079576040805162461bcd60e51b815260206004820181905260248201526000805160206124ee833981519152604482015290519081900360640190fd5b6001600160a01b0383166110c3576040516001600160a01b0382169083156108fc029084906000818181858888f193505050501580156110bd573d6000803e3d6000fd5b50610a4d565b610a4d6001600160a01b03841682846119e8565b6001600160a01b038381166000908152606560205260409020600381015490911633146111165760405162461bcd60e51b81526004016107a5906123a4565b61111f84610c09565b6001600160a01b03808516600090815260666020908152604080832093871683529290529081208054909190819015801561115c57506001830154155b156111c357836001015467ffffffffffffffff8111801561117c57600080fd5b506040519080825280602002602001820160405280156111a6578160200160208202803683370190505b5080516111bd916001860191602090910190611f05565b50611388565b8254156113885760005b8460010154811015611386576112258460010182815481106111eb57fe5b906000526020600020015461069064e8d4a510006105fe89600201868154811061121157fe5b600091825260209091200154895490611815565b925084600001818154811061123657fe5b6000918252602090912001546040516370a0823160e01b81526001600160a01b03909116906370a082319061126f90309060040161226f565b60206040518083038186803b15801561128757600080fd5b505afa15801561129b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112bf9190612203565b9150818311156112fe576112f987838760000184815481106112dd57fe5b6000918252602090912001546001600160a01b031691906119e8565b611312565b61131287848760000184815481106112dd57fe5b866001600160a01b031685600001828154811061132b57fe5b6000918252602090912001546040516001600160a01b03918216918b16907f1d5c129a51d581dd64793db838ec27f6da9c4c28cb47a20382eebadb80545a18906113769088906123f4565b60405180910390a46001016111cd565b505b84835560005b84600101548110156113ec576113c964e8d4a510006105fe8760020184815481106113b557fe5b600091825260209091200154875490611815565b8460010182815481106113d857fe5b60009182526020909120015560010161138e565b5050505050505050565b6113fe611936565b6001600160a01b031661140f610e1a565b6001600160a01b031614611458576040805162461bcd60e51b815260206004820181905260248201526000805160206124ee833981519152604482015290519081900360640190fd5b6001600160a01b03811661149d5760405162461bcd60e51b81526004018080602001828103825260268152602001806124536026913960400191505060405180910390fd5b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0381166000908152606560209081526040808320815181546101009481028201850190935260e0810183815285949193849284919084018282801561156e57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611550575b5050505050815260200160018201548152602001600282018054806020026020016040519081016040528092919081815260200182805480156115d057602002820191906000526020600020905b8154815260200190600101908083116115bc575b505050918352505060038201546001600160a01b0381166020830152604090910190600160a01b900460ff16600181111561160757fe5b600181111561161257fe5b8152602001600482015481526020016005820180548060200260200160405190810160405280929190818152602001828054801561166f57602002820191906000526020600020905b81548152602001906001019080831161165b575b50505050508152505090506000600181111561168757fe5b8160800151600181111561169757fe5b1415611730576060810151604051639a7b5f1160e01b81526000916001600160a01b031690639a7b5f11906116d090879060040161226f565b60c06040518083038186803b1580156116e857600080fd5b505afa1580156116fc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611720919061221b565b5093965061071895505050505050565b60608101516040516370a0823160e01b81526001600160a01b038516916370a0823191611760919060040161226f565b60206040518083038186803b15801561177857600080fd5b505afa15801561178c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117b09190612203565b915050610718565b60008282111561180f576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b60008261182457506000610d6a565b8282028284828161183157fe5b041461186e5760405162461bcd60e51b81526004018080602001828103825260218152602001806124cd6021913960400191505060405180910390fd5b9392505050565b60008082116118cb576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b8183816118d457fe5b049392505050565b60008282018381101561186e576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b3390565b600061194530611a3a565b15905090565b600054610100900460ff1680611964575061196461193a565b80611972575060005460ff16155b6119ad5760405162461bcd60e51b815260040180806020018281038252602e81526020018061249f602e913960400191505060405180910390fd5b600054610100900460ff161580156119d8576000805460ff1961ff0019909116610100171660011790555b6119e0611a40565b610e05611ae0565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610a4d908490611bd9565b3b151590565b600054610100900460ff1680611a595750611a5961193a565b80611a67575060005460ff16155b611aa25760405162461bcd60e51b815260040180806020018281038252602e81526020018061249f602e913960400191505060405180910390fd5b600054610100900460ff16158015610e05576000805460ff1961ff0019909116610100171660011790558015610e17576000805461ff001916905550565b600054610100900460ff1680611af95750611af961193a565b80611b07575060005460ff16155b611b425760405162461bcd60e51b815260040180806020018281038252602e81526020018061249f602e913960400191505060405180910390fd5b600054610100900460ff16158015611b6d576000805460ff1961ff0019909116610100171660011790555b6000611b77611936565b603380546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015610e17576000805461ff001916905550565b6000611c2e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611c8a9092919063ffffffff16565b805190915015610a4d57808060200190516020811015611c4d57600080fd5b5051610a4d5760405162461bcd60e51b815260040180806020018281038252602a81526020018061250e602a913960400191505060405180910390fd5b6060611c998484600085611ca1565b949350505050565b606082471015611ce25760405162461bcd60e51b81526004018080602001828103825260268152602001806124796026913960400191505060405180910390fd5b611ceb85611a3a565b611d3c576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b60208310611d7a5780518252601f199092019160209182019101611d5b565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611ddc576040519150601f19603f3d011682016040523d82523d6000602084013e611de1565b606091505b5091509150611df1828286611dfc565b979650505050505050565b60608315611e0b57508161186e565b825115611e1b5782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611e65578181015183820152602001611e4d565b50505050905090810190601f168015611e925780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b828054828255906000526020600020908101928215611ef5579160200282015b82811115611ef557825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190611ec0565b50611f01929150611f99565b5090565b828054828255906000526020600020908101928215611ef5579160200282015b82811115611ef5578251825591602001919060010190611f25565b5080546000825590600052602060002090810190610e179190611f99565b828054828255906000526020600020908101928215611ef5579160200282015b82811115611ef5578235825591602001919060010190611f7e565b5b80821115611f015760008155600101611f9a565b60008083601f840112611fbf578182fd5b50813567ffffffffffffffff811115611fd6578182fd5b60208301915083602080830285010111156106c457600080fd5b600060208284031215612001578081fd5b813561186e8161243d565b6000806040838503121561201e578081fd5b82356120298161243d565b915060208301356120398161243d565b809150509250929050565b600080600060608486031215612058578081fd5b83356120638161243d565b925060208401356120738161243d565b929592945050506040919091013590565b600080600080600080600060a0888a03121561209e578283fd5b87356120a98161243d565b9650602088013567ffffffffffffffff808211156120c5578485fd5b6120d18b838c01611fae565b909850965060408a013591506120e68261243d565b909450606089013590600282106120fb578485fd5b90935060808901359080821115612110578384fd5b5061211d8a828b01611fae565b989b979a50959850939692959293505050565b600080600060408486031215612144578283fd5b833561214f8161243d565b9250602084013567ffffffffffffffff81111561216a578283fd5b61217686828701611fae565b9497909650939450505050565b600080600060608486031215612058578283fd5b600080604083850312156121a9578182fd5b82356121b48161243d565b946020939093013593505050565b6000806000606084860312156121d6578283fd5b83356121e18161243d565b92506020840135915060408401356121f88161243d565b809150509250925092565b600060208284031215612214578081fd5b5051919050565b60008060008060008060c08789031215612233578182fd5b865195506020870151945060408701519350606087015192506080870151915060a08701516122618161243d565b809150509295509295509295565b6001600160a01b0391909116815260200190565b604080825283519082018190526000906020906060840190828701845b828110156122c55781516001600160a01b0316845292840192908401906001016122a0565b50505083810382850152845180825285830191830190845b818110156122f9578351835292840192918401916001016122dd565b5090979650505050505050565b901515815260200190565b602080825260159082015274082e4e4c2f240d8cadccee8d040dad2e6dac2e8c6d605b1b604082015260600190565b6020808252601e908201527f746f6b656e706572626c6f636b206c656e67746820696e636f72726563740000604082015260600190565b602080825260139082015272141bdbdb08191bd95cc81b9bdd08195e1a5cdd606a1b604082015260600190565b602080825260119082015270139bdd0818da19598818dbdb9d1c9858dd607a1b604082015260600190565b6020808252600b908201526a506f6f6c2065786973747360a81b604082015260600190565b90815260200190565b8481526001600160a01b0384166020820152608081016002841061241d57fe5b60408201939093526060015292915050565b918252602082015260400190565b6001600160a01b0381168114610e1757600080fdfe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65725361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a26469706673582212205fe8cc7233506e1844b08845cb5e4fa3eebdcefaa8764752c9f8990e0dbe007964736f6c63430007060033";
