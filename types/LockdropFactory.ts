/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Lockdrop } from "./Lockdrop";

export class LockdropFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _aTokens: string[],
    _prices: BigNumberish[],
    _decimals: BigNumberish[],
    _unlockTime: BigNumberish,
    _cap: BigNumberish,
    overrides?: Overrides
  ): Promise<Lockdrop> {
    return super.deploy(
      _aTokens,
      _prices,
      _decimals,
      _unlockTime,
      _cap,
      overrides || {}
    ) as Promise<Lockdrop>;
  }
  getDeployTransaction(
    _aTokens: string[],
    _prices: BigNumberish[],
    _decimals: BigNumberish[],
    _unlockTime: BigNumberish,
    _cap: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _aTokens,
      _prices,
      _decimals,
      _unlockTime,
      _cap,
      overrides || {}
    );
  }
  attach(address: string): Lockdrop {
    return super.attach(address) as Lockdrop;
  }
  connect(signer: Signer): LockdropFactory {
    return super.connect(signer) as LockdropFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Lockdrop {
    return new Contract(address, _abi, signerOrProvider) as Lockdrop;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_aTokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_prices",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_decimals",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_unlockTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cap",
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
        internalType: "address",
        name: "_claimer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_aToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Claim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_depositor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_aToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "aTokens",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "accountBalances",
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
    name: "cap",
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
        name: "_aToken",
        type: "address",
      },
    ],
    name: "claim",
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
    ],
    name: "decimals",
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
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_aToken",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositReady",
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
        name: "",
        type: "address",
      },
    ],
    name: "prices",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_aToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "rescue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cap",
        type: "uint256",
      },
    ],
    name: "setCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_aToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "setPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_isReady",
        type: "bool",
      },
    ],
    name: "setStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_unlockTime",
        type: "uint256",
      },
    ],
    name: "setUnlockTime",
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
    ],
    name: "totalDeposits",
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
    inputs: [],
    name: "unlockTime",
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
    name: "usdDeposited",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200165138038062001651833981810160405260a08110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82518660208202830111640100000000821117156200008c57600080fd5b82525081516020918201928201910280838360005b83811015620000bb578181015183820152602001620000a1565b5050505090500160405260200180516040519392919084640100000000821115620000e557600080fd5b908301906020820185811115620000fb57600080fd5b82518660208202830111640100000000821117156200011957600080fd5b82525081516020918201928201910280838360005b83811015620001485781810151838201526020016200012e565b50505050905001604052602001805160405193929190846401000000008211156200017257600080fd5b9083019060208201858111156200018857600080fd5b8251866020820283011164010000000082111715620001a657600080fd5b82525081516020918201928201910280838360005b83811015620001d5578181015183820152602001620001bb565b505050509190910160409081526020830151920151600160009081559294509250620002029050620003ca565b600180546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508351855114801562000263575082518551145b620002b5576040805162461bcd60e51b815260206004820152601560248201527f4172726179206c656e677468206d69736d617463680000000000000000000000604482015290519081900360640190fd5b60005b8551811015620003b957600160086000888481518110620002d557fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a81548160ff0219169083151502179055508481815181106200032157fe5b6020026020010151600460008884815181106200033a57fe5b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020819055508381815181106200037357fe5b6020026020010151600560008884815181106200038c57fe5b6020908102919091018101516001600160a01b0316825281019190915260400160002055600101620002b8565b5060095560075550620003ce915050565b3390565b61127380620003de6000396000f3fe608060405234801561001057600080fd5b50600436106101205760003560e01c8063715018a6116100ad578063d449a83211610071578063d449a832146102f1578063dace455714610317578063e940325614610334578063f2fde38b1461035a578063ffe207df1461038057610120565b8063715018a61461026b5780637a4e4ecf146102735780638da5cb5b1461029f57806396b2a5e6146102c3578063cfed246b146102cb57610120565b8063355274ea116100f4578063355274ea146101c15780633e108ad9146101c957806347786d37146102035780635c40f6f4146102205780636e553f651461023f57610120565b8062e4768b146101255780631242e5fd146101535780631e83409a14610193578063251c1aa3146101b9575b600080fd5b6101516004803603604081101561013b57600080fd5b506001600160a01b038135169060200135610388565b005b6101816004803603604081101561016957600080fd5b506001600160a01b0381358116916020013516610468565b60408051918252519081900360200190f35b610151600480360360208110156101a957600080fd5b50356001600160a01b0316610485565b61018161060a565b610181610610565b6101ef600480360360208110156101df57600080fd5b50356001600160a01b0316610616565b604080519115158252519081900360200190f35b6101516004803603602081101561021957600080fd5b503561062b565b6101516004803603602081101561023657600080fd5b50351515610692565b6101516004803603604081101561025557600080fd5b50803590602001356001600160a01b0316610707565b610151610998565b6101516004803603604081101561028957600080fd5b506001600160a01b038135169060200135610a44565b6102a7610b25565b604080516001600160a01b039092168252519081900360200190f35b610181610b34565b610181600480360360208110156102e157600080fd5b50356001600160a01b0316610b3a565b6101816004803603602081101561030757600080fd5b50356001600160a01b0316610b4c565b6101516004803603602081101561032d57600080fd5b5035610b5e565b6101816004803603602081101561034a57600080fd5b50356001600160a01b0316610bc5565b6101516004803603602081101561037057600080fd5b50356001600160a01b0316610bd7565b6101ef610cda565b610390610ce3565b6001600160a01b03166103a1610b25565b6001600160a01b0316146103ea576040805162461bcd60e51b815260206004820181905260248201526000805160206111f4833981519152604482015290519081900360640190fd5b6001600160a01b03821660009081526008602052604090205460ff1661044c576040805162461bcd60e51b815260206004820152601260248201527118551bdad95b881b9bdd081bdb881b1a5cdd60721b604482015290519081900360640190fd5b6001600160a01b03909116600090815260046020526040902055565b600260209081526000928352604080842090915290825290205481565b600260005414156104dd576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026000556007544211610527576040805162461bcd60e51b815260206004820152600c60248201526b14dd1a5b1b081b1bd8dad95960a21b604482015290519081900360640190fd5b3360009081526002602090815260408083206001600160a01b038516845290915290205480610590576040805162461bcd60e51b815260206004820152601060248201526f4e6f7468696e6720746f20636c61696d60801b604482015290519081900360640190fd5b3360008181526002602090815260408083206001600160a01b03871680855292528220919091556105c19183610ce7565b6040805182815290516001600160a01b0384169133917f70eb43c4a8ae8c40502dcf22436c509c28d6ff421cf07c491be56984bd9870689181900360200190a350506001600055565b60075481565b60095481565b60086020526000908152604090205460ff1681565b610633610ce3565b6001600160a01b0316610644610b25565b6001600160a01b03161461068d576040805162461bcd60e51b815260206004820181905260248201526000805160206111f4833981519152604482015290519081900360640190fd5b600955565b61069a610ce3565b6001600160a01b03166106ab610b25565b6001600160a01b0316146106f4576040805162461bcd60e51b815260206004820181905260248201526000805160206111f4833981519152604482015290519081900360640190fd5b6006805460ff1916911515919091179055565b6002600054141561075f576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260005560065460ff166107a7576040805162461bcd60e51b81526020600482015260096024820152684e6f7420726561647960b81b604482015290519081900360640190fd5b6001600160a01b03811660009081526008602052604090205460ff16610808576040805162461bcd60e51b8152602060048201526011602482015270151bdad95b881b9bdd081bdb881b1a5cdd607a1b604482015290519081900360640190fd5b6001600160a01b03811660009081526005602090815260408083205460049092529091205461086a9161086191600a9190910a9061085b90670de0b6b3a764000090610855908890610d3e565b90610d3e565b90610da0565b600a5490610e07565b600a5560095415806108805750600954600a5411155b6108c0576040805162461bcd60e51b815260206004820152600c60248201526b04578636565646564206361760a41b604482015290519081900360640190fd5b6108d56001600160a01b038216333085610e61565b3360009081526002602090815260408083206001600160a01b03851684529091529020546109039083610e07565b3360009081526002602090815260408083206001600160a01b038616845282528083209390935560039052205461093a9083610e07565b6001600160a01b0382166000818152600360209081526040918290209390935580518581529051919233927f5548c837ab068cf56a2c2479df0882a4922fd203edb7517321831d95078c5f629281900390910190a350506001600055565b6109a0610ce3565b6001600160a01b03166109b1610b25565b6001600160a01b0316146109fa576040805162461bcd60e51b815260206004820181905260248201526000805160206111f4833981519152604482015290519081900360640190fd5b6001546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600180546001600160a01b0319169055565b610a4c610ce3565b6001600160a01b0316610a5d610b25565b6001600160a01b031614610aa6576040805162461bcd60e51b815260206004820181905260248201526000805160206111f4833981519152604482015290519081900360640190fd5b6040805163a9059cbb60e01b81523360048201526024810183905290516001600160a01b0384169163a9059cbb9160448083019260209291908290030181600087803b158015610af557600080fd5b505af1158015610b09573d6000803e3d6000fd5b505050506040513d6020811015610b1f57600080fd5b50505050565b6001546001600160a01b031690565b600a5481565b60046020526000908152604090205481565b60056020526000908152604090205481565b610b66610ce3565b6001600160a01b0316610b77610b25565b6001600160a01b031614610bc0576040805162461bcd60e51b815260206004820181905260248201526000805160206111f4833981519152604482015290519081900360640190fd5b600755565b60036020526000908152604090205481565b610bdf610ce3565b6001600160a01b0316610bf0610b25565b6001600160a01b031614610c39576040805162461bcd60e51b815260206004820181905260248201526000805160206111f4833981519152604482015290519081900360640190fd5b6001600160a01b038116610c7e5760405162461bcd60e51b81526004018080602001828103825260268152602001806111876026913960400191505060405180910390fd5b6001546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b60065460ff1681565b3390565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610d39908490610eb7565b505050565b600082610d4d57506000610d9a565b82820282848281610d5a57fe5b0414610d975760405162461bcd60e51b81526004018080602001828103825260218152602001806111d36021913960400191505060405180910390fd5b90505b92915050565b6000808211610df6576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381610dff57fe5b049392505050565b600082820183811015610d97576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052610b1f9085905b6000610f0c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610f689092919063ffffffff16565b805190915015610d3957808060200190516020811015610f2b57600080fd5b5051610d395760405162461bcd60e51b815260040180806020018281038252602a815260200180611214602a913960400191505060405180910390fd5b6060610f778484600085610f81565b90505b9392505050565b606082471015610fc25760405162461bcd60e51b81526004018080602001828103825260268152602001806111ad6026913960400191505060405180910390fd5b610fcb856110dc565b61101c576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b6020831061105a5780518252601f19909201916020918201910161103b565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146110bc576040519150601f19603f3d011682016040523d82523d6000602084013e6110c1565b606091505b50915091506110d18282866110e2565b979650505050505050565b3b151590565b606083156110f1575081610f7a565b8251156111015782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561114b578181015183820152602001611133565b50505050905090810190601f1680156111785780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65725361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a264697066735822122004261542a708287ca7e7944fb9697de968b43ec0c5d141a9597a16607815e59564736f6c63430007060033";
