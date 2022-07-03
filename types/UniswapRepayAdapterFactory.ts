/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { UniswapRepayAdapter } from "./UniswapRepayAdapter";

export class UniswapRepayAdapterFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    addressesProvider: string,
    uniswapRouter: string,
    wethAddress: string,
    overrides?: Overrides
  ): Promise<UniswapRepayAdapter> {
    return super.deploy(
      addressesProvider,
      uniswapRouter,
      wethAddress,
      overrides || {}
    ) as Promise<UniswapRepayAdapter>;
  }
  getDeployTransaction(
    addressesProvider: string,
    uniswapRouter: string,
    wethAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      addressesProvider,
      uniswapRouter,
      wethAddress,
      overrides || {}
    );
  }
  attach(address: string): UniswapRepayAdapter {
    return super.attach(address) as UniswapRepayAdapter;
  }
  connect(signer: Signer): UniswapRepayAdapterFactory {
    return super.connect(signer) as UniswapRepayAdapterFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapRepayAdapter {
    return new Contract(address, _abi, signerOrProvider) as UniswapRepayAdapter;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "addressesProvider",
        type: "address",
      },
      {
        internalType: "contract IUniswapV2Router02",
        name: "uniswapRouter",
        type: "address",
      },
      {
        internalType: "address",
        name: "wethAddress",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "fromAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "toAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fromAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "receivedAmount",
        type: "uint256",
      },
    ],
    name: "Swapped",
    type: "event",
  },
  {
    inputs: [],
    name: "ADDRESSES_PROVIDER",
    outputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FLASHLOAN_PREMIUM_TOTAL",
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
    name: "LENDING_POOL",
    outputs: [
      {
        internalType: "contract ILendingPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_SLIPPAGE_PERCENT",
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
    name: "ORACLE",
    outputs: [
      {
        internalType: "contract IPriceOracleGetter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UNISWAP_ROUTER",
    outputs: [
      {
        internalType: "contract IUniswapV2Router02",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "USD_ADDRESS",
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
    name: "WETH_ADDRESS",
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
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "premiums",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "executeOperation",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "reserveIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "reserveOut",
        type: "address",
      },
    ],
    name: "getAmountsIn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "reserveIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "reserveOut",
        type: "address",
      },
    ],
    name: "getAmountsOut",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
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
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "rescueTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collateralAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "debtAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "debtRepayAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "debtRateMode",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct IBaseUniswapAdapter.PermitSignature",
        name: "permitSignature",
        type: "tuple",
      },
      {
        internalType: "bool",
        name: "useEthPath",
        type: "bool",
      },
    ],
    name: "swapAndRepay",
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
  "0x6101206040523480156200001257600080fd5b50604051620036e4380380620036e48339810160408190526200003591620001f0565b82828282806001600160a01b03166080816001600160a01b031660601b81525050806001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200009057600080fd5b505afa158015620000a5573d6000803e3d6000fd5b505050506040513d6020811015620000bc57600080fd5b505160601b6001600160601b03191660a052506000620000db620001c6565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350826001600160a01b031663fca513a86040518163ffffffff1660e01b815260040160206040518083038186803b1580156200015f57600080fd5b505afa15801562000174573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200019a9190620001ca565b6001600160601b0319606091821b811660e05292811b8316610100521b1660c052506200025c92505050565b3390565b600060208284031215620001dc578081fd5b8151620001e98162000243565b9392505050565b60008060006060848603121562000205578182fd5b8351620002128162000243565b6020850151909350620002258162000243565b6040850151909250620002388162000243565b809150509250925092565b6001600160a01b03811681146200025957600080fd5b50565b60805160601c60a05160601c60c05160601c60e05160601c6101005160601c6133ad62000337600039806106595280611171528061126552806119035280611b8b5280611bc05280611d5452806122c152806123b25250806103ce52806125f752508061037b528061104b528061108852806110f252806117f05280611c3e528061219b52806121d852806122425250806104c052806105e05280610863528061089852806108d45280610b425280610b775280610c355280610e4b5280610e76528061166f5280611a5152508061039f52506133ad6000f3fe608060405234801561001057600080fd5b50600436106100ff5760003560e01c8063920f5c8411610097578063cdf58cd611610066578063cdf58cd6146101c8578063d8264920146101db578063e6813563146101e3578063f2fde38b146101f6576100ff565b8063920f5c84146101745780639d1211bf14610194578063b4dcfc771461019c578063baf7fa99146101a4576100ff565b806332e4b286116100d357806332e4b2861461015457806338013f021461015c578063715018a6146101645780638da5cb5b1461016c576100ff565b8062ae3bf814610104578063040141e5146101195780630542975c14610137578063074b2e431461013f575b600080fd5b610117610112366004612b51565b610209565b005b610121610379565b60405161012e919061304e565b60405180910390f35b61012161039d565b6101476103c1565b60405161012e91906131e3565b6101476103c6565b6101216103cc565b6101176103f0565b6101216104a4565b610187610182366004612c7b565b6104b3565b60405161012e9190613133565b6101216105c6565b6101216105de565b6101b76101b2366004612fae565b610602565b60405161012e959493929190613241565b6101b76101d6366004612fae565b610642565b610121610657565b6101176101f1366004612bf6565b61067b565b610117610204366004612b51565b610970565b610211610a7a565b6000546001600160a01b03908116911614610273576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b806001600160a01b031663a9059cbb61028a6104a4565b6040516370a0823160e01b81526001600160a01b038516906370a08231906102b690309060040161304e565b60206040518083038186803b1580156102ce57600080fd5b505afa1580156102e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103069190612f96565b6040518363ffffffff1660e01b81526004016103239291906130cc565b602060405180830381600087803b15801561033d57600080fd5b505af1158015610351573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103759190612e19565b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b600981565b610bb881565b7f000000000000000000000000000000000000000000000000000000000000000081565b6103f8610a7a565b6000546001600160a01b0390811691161461045a576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105065760405162461bcd60e51b81526004016104fd9061313e565b60405180910390fd5b600061054784848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610a7e92505050565b90506105b581600001518c8c600081811061055e57fe5b90506020020160208101906105739190612b51565b8b8b600081811061058057fe5b90506020020135846020015185604001518a8d8d600081811061059f57fe5b9050602002013588606001518960800151610b26565b5060019a9950505050505050505050565b7310f7fc1f91ba351f9c629c5947ad69bd03c05b9681565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000806000806060600061061788888b610ebd565b8051602082015160408301516060840151608090940151929d919c509a509198509650945050505050565b6000806000806060600061061788888b611476565b7f000000000000000000000000000000000000000000000000000000000000000081565b600061068688611650565b9050600061069388611650565b9050600060018660028111156106a557fe5b60028111156106b057fe5b146106c0578161012001516106c7565b8161010001515b90506000816001600160a01b03166370a08231336040518263ffffffff1660e01b81526004016106f7919061304e565b60206040518083038186803b15801561070f57600080fd5b505afa158015610723573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107479190612f96565b9050600081891115610759578161075b565b885b90508a6001600160a01b03168c6001600160a01b031614610838578989821015610796576107938a61078d83856116fb565b90611754565b90505b60006107a48e8e858b611796565b905081816000815181106107b457fe5b602002602001015111156107da5760405162461bcd60e51b81526004016104fd906131b8565b61080f8e8860e0015133846000815181106107f157fe5b60200260200101518d80360381019061080a9190612e35565b611998565b6108308e8e8360008151811061082157fe5b6020026020010151868c611ae4565b505050610854565b6108548c8660e0015133848b80360381019061080a9190612e35565b6108896001600160a01b038c167f00000000000000000000000000000000000000000000000000000000000000006000611e78565b6108bd6001600160a01b038c167f000000000000000000000000000000000000000000000000000000000000000083611e78565b60405163573ade8160e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063573ade819061090f908e9085908d903390600401613108565b602060405180830381600087803b15801561092957600080fd5b505af115801561093d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109619190612f96565b50505050505050505050505050565b610978610a7a565b6000546001600160a01b039081169116146109da576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b038116610a1f5760405162461bcd60e51b81526004018080602001828103825260268152602001806132d16026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b610a86612969565b60008060008060008060008060008a806020019051810190610aa89190612b6d565b9850985098509850985098509850985098506040518060a001604052808a6001600160a01b031681526020018981526020018881526020016040518060a001604052808981526020018881526020018760ff16815260200186815260200185815250815260200182151581525099505050505050505050505b919050565b6000610b318a611650565b9050610b686001600160a01b038a167f00000000000000000000000000000000000000000000000000000000000000006000611e78565b610b9c6001600160a01b038a167f00000000000000000000000000000000000000000000000000000000000000008a611e78565b6040516370a0823160e01b81526000906001600160a01b038b16906370a0823190610bcb90309060040161304e565b60206040518083038186803b158015610be357600080fd5b505afa158015610bf7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1b9190612f96565b60405163573ade8160e01b81529091506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063573ade8190610c70908d908d908c908c90600401613108565b602060405180830381600087803b158015610c8a57600080fd5b505af1158015610c9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc29190612f96565b506040516370a0823160e01b8152610d4a906001600160a01b038c16906370a0823190610cf390309060040161304e565b60206040518083038186803b158015610d0b57600080fd5b505afa158015610d1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d439190612f96565b8290611f90565b9050896001600160a01b03168b6001600160a01b031614610e20578789821015610d7f57610d7c8a61078d83856116fb565b90505b6000610d8b8388611fd2565b90506000610d9b8e8e8489611796565b90508281600081518110610dab57fe5b60200260200101511115610dd15760405162461bcd60e51b81526004016104fd906131b8565b610df68e8660e001518b84600081518110610de857fe5b60200260200101518b611998565b610e178e8e83600081518110610e0857fe5b6020026020010151858a611ae4565b50505050610e3c565b60e0820151610e3c908c9088610e36858a611fd2565b88611998565b610e716001600160a01b038b167f00000000000000000000000000000000000000000000000000000000000000006000611e78565b610eb07f0000000000000000000000000000000000000000000000000000000000000000610e9f8b88611fd2565b6001600160a01b038d169190611e78565b5050505050505050505050565b610ec56129a7565b6000610ee2610edb61271061078d8660096116fb565b8490611f90565b9050836001600160a01b0316856001600160a01b03161415610fae576000610f098661202c565b60408051600180825281830190925291925060009190602080830190803683370190505090508681600081518110610f3d57fe5b6001600160a01b039092166020928302919091018201526040805160a08101909152848152908101610f7b8761078d87670de0b6b3a76400006116fb565b8152602001610f8b8988866120a8565b8152602001610f9b8986866120a8565b815260200182815250935050505061146f565b6040805160028082526060820183526000926020830190803683370190505090508581600081518110610fdd57fe5b60200260200101906001600160a01b031690816001600160a01b031681525050848160018151811061100b57fe5b6001600160a01b039290921660209283029190910182015260408051600380825260808201909252606092839260009291820184803683370190505090507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316896001600160a01b0316141580156110bd57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316886001600160a01b031614155b156112295788816000815181106110d057fe5b60200260200101906001600160a01b031690816001600160a01b0316815250507f00000000000000000000000000000000000000000000000000000000000000008160018151811061111e57fe5b60200260200101906001600160a01b031690816001600160a01b031681525050878160028151811061114c57fe5b6001600160a01b03928316602091820292909201015260405163d06ca61f60e01b81527f00000000000000000000000000000000000000000000000000000000000000009091169063d06ca61f906111aa90889085906004016131ec565b60006040518083038186803b1580156111c257600080fd5b505afa9250505080156111f757506040513d6000823e601f3d908101601f191682016040526111f49190810190612d78565b60015b61122157604080516003808252608082019092529060208201606080368337019050509150611224565b91505b61124b565b6040805160038082526080820190925290602082016060803683370190505091505b60405163d06ca61f60e01b81526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063d06ca61f9061129c90899089906004016131ec565b60006040518083038186803b1580156112b457600080fd5b505afa9250505080156112e957506040513d6000823e601f3d908101601f191682016040526112e69190810190612d78565b60015b6113295760408051600280825260608201835290916020830190803683370190505093508260028151811061131a57fe5b6020026020010151905061138f565b8094508460018151811061133957fe5b60200260200101518460028151811061134e57fe5b602002602001015111611375578460018151811061136857fe5b602002602001015161138b565b8360028151811061138257fe5b60200260200101515b9150505b600061139a8b61202c565b905060006113a78b61202c565b905060006113dc6113bc85600a86900a6116fb565b61078d600a85900a6113d68d670de0b6b3a76400006116fb565b906116fb565b90506040518060a001604052808581526020018281526020016114008f8e876120a8565b81526020016114108e87866120a8565b81526020018515611443578860018151811061142857fe5b6020026020010151861461143c578661143e565b895b611461565b60408051600280825260608201835290916020830190803683375050505b905299505050505050505050505b9392505050565b61147e6129a7565b826001600160a01b0316846001600160a01b031614156115545760006114b56114ae61271061078d8660096116fb565b8490611fd2565b905060006114c28661202c565b604080516001808252818301909252919250600091906020808301908036833701905050905086816000815181106114f657fe5b6001600160a01b039092166020928302919091018201526040805160a081019091528481529081016115348561078d89670de0b6b3a76400006116fb565b81526020016115448986866120a8565b8152602001610f9b8988866120a8565b6000806115628686866120f7565b9150915060006115bc61159961271061078d60098760008151811061158357fe5b60200260200101516116fb90919063ffffffff16565b846000815181106115a657fe5b6020026020010151611fd290919063ffffffff16565b905060006115c98861202c565b905060006115d68861202c565b905060006116056115eb85600a85900a6116fb565b61078d600a86900a6113d68c670de0b6b3a76400006116fb565b90506040518060a001604052808581526020018281526020016116298c87876120a8565b81526020016116398b8b866120a8565b815260200195909552509298975050505050505050565b6116586129d6565b6040516335ea6a7560e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906335ea6a75906116a490859060040161304e565b6101806040518083038186803b1580156116bd57600080fd5b505afa1580156116d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116f59190612ea6565b92915050565b60008261170a575060006116f5565b8282028284828161171757fe5b041461146f5760405162461bcd60e51b81526004018080602001828103825260218152602001806132f76021913960400191505060405180910390fd5b600061146f83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506124b6565b606080821561186f5760408051600380825260808201909252906020820160608036833701905050905085816000815181106117ce57fe5b60200260200101906001600160a01b031690816001600160a01b0316815250507f00000000000000000000000000000000000000000000000000000000000000008160018151811061181c57fe5b60200260200101906001600160a01b031690816001600160a01b031681525050848160028151811061184a57fe5b60200260200101906001600160a01b031690816001600160a01b0316815250506118ec565b6040805160028082526060820183529091602083019080368337019050509050858160008151811061189d57fe5b60200260200101906001600160a01b031690816001600160a01b03168152505084816001815181106118cb57fe5b60200260200101906001600160a01b031690816001600160a01b0316815250505b6040516307c0329d60e21b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690631f00ca749061193a90879085906004016131ec565b60006040518083038186803b15801561195257600080fd5b505afa158015611966573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261198e9190810190612d78565b9695505050505050565b6119a181612558565b15611a2557836001600160a01b031663d505accf8430846000015185602001518660400151876060015188608001516040518863ffffffff1660e01b81526004016119f2979695949392919061308b565b600060405180830381600087803b158015611a0c57600080fd5b505af1158015611a20573d6000803e3d6000fd5b505050505b611a3a6001600160a01b03851684308561257d565b604051631a4ca37b60e21b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906369328dec90611a8a908890869030906004016130e5565b602060405180830381600087803b158015611aa457600080fd5b505af1158015611ab8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611adc9190612f96565b505050505050565b600080611af08761202c565b90506000611afd8761202c565b90506000611b0a896125dd565b90506000611b17896125dd565b90506000611b5b611b2c612710610bb8611fd2565b611b55611b3d86600a89900a6116fb565b61078d611b4e87600a8c900a6116fb565b8d906116fb565b9061267c565b9050808910611b7c5760405162461bcd60e51b81526004016104fd90613175565b611bb16001600160a01b038c167f00000000000000000000000000000000000000000000000000000000000000006000611e78565b611be56001600160a01b038c167f00000000000000000000000000000000000000000000000000000000000000008b611e78565b60608715611cbd576040805160038082526080820190925290602082016060803683370190505090508b81600081518110611c1c57fe5b60200260200101906001600160a01b031690816001600160a01b0316815250507f000000000000000000000000000000000000000000000000000000000000000081600181518110611c6a57fe5b60200260200101906001600160a01b031690816001600160a01b0316815250508a81600281518110611c9857fe5b60200260200101906001600160a01b031690816001600160a01b031681525050611d3a565b60408051600280825260608201835290916020830190803683370190505090508b81600081518110611ceb57fe5b60200260200101906001600160a01b031690816001600160a01b0316815250508a81600181518110611d1957fe5b60200260200101906001600160a01b031690816001600160a01b0316815250505b604051634401edf760e11b81526000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690638803dbee90611d91908d908f90879030904290600401613205565b600060405180830381600087803b158015611dab57600080fd5b505af1158015611dbf573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611de79190810190612d78565b90507fa078c4190abe07940190effc1846be0ccf03ad6007bc9e93f9697d0b460befbb8d8d83600081518110611e1957fe5b602002602001015184600186510381518110611e3157fe5b6020026020010151604051611e499493929190613062565b60405180910390a180600081518110611e5e57fe5b602002602001015197505050505050505095945050505050565b801580611efe575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b158015611ed057600080fd5b505afa158015611ee4573d6000803e3d6000fd5b505050506040513d6020811015611efa57600080fd5b5051155b611f395760405162461bcd60e51b81526004018080602001828103825260368152602001806133426036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052611f8b90849061271c565b505050565b600061146f83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506128d3565b60008282018381101561146f576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000816001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561206757600080fd5b505afa15801561207b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061209f9190612fef565b60ff1692915050565b6000806120c87310f7fc1f91ba351f9c629c5947ad69bd03c05b966125dd565b905060006120d5866125dd565b905061198e670de0b6b3a764000061078d846113d6600a89900a838b886116fb565b60408051600280825260608281019093528291600091816020016020820280368337019050509050858160008151811061212d57fe5b60200260200101906001600160a01b031690816001600160a01b031681525050848160018151811061215b57fe5b6001600160a01b039290921660209283029190910182015260408051600380825260808201909252606092839260009291820184803683370190505090507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316896001600160a01b03161415801561220d57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316886001600160a01b031614155b1561237957888160008151811061222057fe5b60200260200101906001600160a01b031690816001600160a01b0316815250507f00000000000000000000000000000000000000000000000000000000000000008160018151811061226e57fe5b60200260200101906001600160a01b031690816001600160a01b031681525050878160028151811061229c57fe5b6001600160a01b0392831660209182029290920101526040516307c0329d60e21b81527f000000000000000000000000000000000000000000000000000000000000000090911690631f00ca74906122fa908a9085906004016131ec565b60006040518083038186803b15801561231257600080fd5b505afa92505050801561234757506040513d6000823e601f3d908101601f191682016040526123449190810190612d78565b60015b61237157604080516003808252608082019092529060208201606080368337019050509150612374565b91505b61239b565b6040805160038082526080820190925290602082016060803683370190505091505b6040516307c0329d60e21b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690631f00ca74906123e9908a9088906004016131ec565b60006040518083038186803b15801561240157600080fd5b505afa92505050801561243657506040513d6000823e601f3d908101601f191682016040526124339190810190612d78565b60015b6124475790945092506124ae915050565b8093508360008151811061245757fe5b60200260200101518360008151811061246c57fe5b602002602001015110801561249657508260008151811061248957fe5b6020026020010151600014155b6124a15783856124a4565b82825b9650965050505050505b935093915050565b600081836125425760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156125075781810151838201526020016124ef565b50505050905090810190601f1680156125345780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161254e57fe5b0495945050505050565b6000816040015160ff16826020015114801561257657506020820151155b1592915050565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526125d790859061271c565b50505050565b60405163b3596f0760e01b81526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063b3596f079061262c90859060040161304e565b60206040518083038186803b15801561264457600080fd5b505afa158015612658573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116f59190612f96565b6000821580612689575081155b15612696575060006116f5565b8161138819816126a257fe5b0483111560405180604001604052806002815260200161068760f31b8152509061270d5760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156125075781810151838201526020016124ef565b50506127109102611388010490565b61272e826001600160a01b031661292d565b61277f576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b600080836001600160a01b0316836040518082805190602001908083835b602083106127bc5780518252601f19909201916020918201910161279d565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461281e576040519150601f19603f3d011682016040523d82523d6000602084013e612823565b606091505b50915091508161287a576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b8051156125d75780806020019051602081101561289657600080fd5b50516125d75760405162461bcd60e51b815260040180806020018281038252602a815260200180613318602a913960400191505060405180910390fd5b600081848411156129255760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156125075781810151838201526020016124ef565b505050900390565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061296157508115155b949350505050565b6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200161299a612a41565b8152600060209091015290565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b6040518061018001604052806129ea612a6f565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c0820181905260e082018190526101008201819052610120820181905261014082018190526101609091015290565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b6040518060200160405280600081525090565b8051610b218161329b565b60008083601f840112612a9e578182fd5b50813567ffffffffffffffff811115612ab5578182fd5b6020830191508360208083028501011115612acf57600080fd5b9250929050565b600060208284031215612ae7578081fd5b6040516020810181811067ffffffffffffffff82111715612b0457fe5b6040529151825250919050565b80516fffffffffffffffffffffffffffffffff81168114610b2157600080fd5b805164ffffffffff81168114610b2157600080fd5b8051610b21816132c1565b600060208284031215612b62578081fd5b813561146f8161329b565b60008060008060008060008060006101208a8c031215612b8b578485fd5b8951612b968161329b565b8099505060208a0151975060408a0151965060608a0151955060808a0151945060a08a0151612bc4816132c1565b8094505060c08a0151925060e08a015191506101008a0151612be5816132b3565b809150509295985092959850929598565b6000806000806000806000878903610160811215612c12578182fd5b8835612c1d8161329b565b97506020890135612c2d8161329b565b965060408901359550606089013594506080890135935060a0609f1982011215612c55578182fd5b5060a088019150610140880135612c6b816132b3565b8091505092959891949750929550565b600080600080600080600080600060a08a8c031215612c98578283fd5b893567ffffffffffffffff80821115612caf578485fd5b612cbb8d838e01612a8d565b909b50995060208c0135915080821115612cd3578485fd5b612cdf8d838e01612a8d565b909950975060408c0135915080821115612cf7578485fd5b612d038d838e01612a8d565b909750955060608c01359150612d188261329b565b90935060808b01359080821115612d2d578384fd5b818c0191508c601f830112612d40578384fd5b813581811115612d4e578485fd5b8d6020828501011115612d5f578485fd5b6020830194508093505050509295985092959850929598565b60006020808385031215612d8a578182fd5b825167ffffffffffffffff80821115612da1578384fd5b818501915085601f830112612db4578384fd5b815181811115612dc057fe5b8381029150612dd0848301613277565b8181528481019084860184860187018a1015612dea578788fd5b8795505b83861015612e0c578051835260019590950194918601918601612dee565b5098975050505050505050565b600060208284031215612e2a578081fd5b815161146f816132b3565b600060a08284031215612e46578081fd5b60405160a0810181811067ffffffffffffffff82111715612e6357fe5b806040525082358152602083013560208201526040830135612e84816132c1565b6040820152606083810135908201526080928301359281019290925250919050565b6000610180808385031215612eb9578182fd5b612ec281613277565b9050612ece8484612ad6565b8152612edc60208401612b11565b6020820152612eed60408401612b11565b6040820152612efe60608401612b11565b6060820152612f0f60808401612b11565b6080820152612f2060a08401612b11565b60a0820152612f3160c08401612b31565b60c0820152612f4260e08401612a82565b60e0820152610100612f55818501612a82565b90820152610120612f67848201612a82565b90820152610140612f79848201612a82565b90820152610160612f8b848201612b46565b908201529392505050565b600060208284031215612fa7578081fd5b5051919050565b600080600060608486031215612fc2578081fd5b833592506020840135612fd48161329b565b91506040840135612fe48161329b565b809150509250925092565b600060208284031215613000578081fd5b815161146f816132c1565b6000815180845260208085019450808401835b838110156130435781516001600160a01b03168752958201959082019060010161301e565b509495945050505050565b6001600160a01b0391909116815260200190565b6001600160a01b0394851681529290931660208301526040820152606081019190915260800190565b6001600160a01b0397881681529590961660208601526040850193909352606084019190915260ff16608083015260a082015260c081019190915260e00190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0393841681526020810192909252909116604082015260600190565b6001600160a01b03948516815260208101939093526040830191909152909116606082015260800190565b901515815260200190565b6020808252601b908201527f43414c4c45525f4d5553545f42455f4c454e44494e475f504f4f4c0000000000604082015260600190565b60208082526023908201527f6d6178416d6f756e74546f5377617020657863656564206d617820736c69707060408201526261676560e81b606082015260800190565b6020808252601190820152700e6d8d2e0e0c2ceca40e8dede40d0d2ced607b1b604082015260600190565b90815260200190565b600083825260406020830152612961604083018461300b565b600086825285602083015260a0604083015261322460a083018661300b565b6001600160a01b0394909416606083015250608001529392505050565b600086825285602083015284604083015283606083015260a0608083015261326c60a083018461300b565b979650505050505050565b60405181810167ffffffffffffffff8111828210171561329357fe5b604052919050565b6001600160a01b03811681146132b057600080fd5b50565b80151581146132b057600080fd5b60ff811681146132b057600080fdfe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365a2646970667358221220fea481d840050aae58c0b056127bbda0abd43dfae5fd2a2cdf10f6781dcfe0aa64736f6c63430007060033";