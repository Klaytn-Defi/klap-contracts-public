/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface VariableDebtTokenInterface extends ethers.utils.Interface {
  functions: {
    "DEBT_TOKEN_REVISION()": FunctionFragment;
    "POOL()": FunctionFragment;
    "UNDERLYING_ASSET_ADDRESS()": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "approveDelegation(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "borrowAllowance(address,address)": FunctionFragment;
    "burn(address,uint256,uint256)": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "getAssetPrice()": FunctionFragment;
    "getIncentivesController()": FunctionFragment;
    "getScaledUserBalanceAndSupply(address)": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "initialize(address,address,address,uint8,string,string,bytes)": FunctionFragment;
    "mint(address,address,uint256,uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "scaledBalanceOf(address)": FunctionFragment;
    "scaledTotalSupply()": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEBT_TOKEN_REVISION",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "POOL", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "UNDERLYING_ASSET_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approveDelegation",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "borrowAllowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAssetPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getIncentivesController",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getScaledUserBalanceAndSupply",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, BigNumberish, string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "scaledBalanceOf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "scaledTotalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEBT_TOKEN_REVISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "POOL", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "UNDERLYING_ASSET_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approveDelegation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "borrowAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssetPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIncentivesController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getScaledUserBalanceAndSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "scaledBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "scaledTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "BorrowAllowanceDelegated(address,address,address,uint256)": EventFragment;
    "Burn(address,uint256,uint256)": EventFragment;
    "Initialized(address,address,address,uint8,string,string,bytes)": EventFragment;
    "Mint(address,address,uint256,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BorrowAllowanceDelegated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export class VariableDebtToken extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: VariableDebtTokenInterface;

  functions: {
    DEBT_TOKEN_REVISION(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "DEBT_TOKEN_REVISION()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    POOL(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "POOL()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "UNDERLYING_ASSET_ADDRESS()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    approveDelegation(
      delegatee: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "approveDelegation(address,uint256)"(
      delegatee: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    balanceOf(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "balanceOf(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    borrowAllowance(
      fromUser: string,
      toUser: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "borrowAllowance(address,address)"(
      fromUser: string,
      toUser: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    burn(
      user: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "burn(address,uint256,uint256)"(
      user: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    "decimals()"(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "decreaseAllowance(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getAssetPrice(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getAssetPrice()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    getIncentivesController(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "getIncentivesController()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    getScaledUserBalanceAndSupply(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "getScaledUserBalanceAndSupply(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "increaseAllowance(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    initialize(
      pool: string,
      underlyingAsset: string,
      incentivesController: string,
      debtTokenDecimals: BigNumberish,
      debtTokenName: string,
      debtTokenSymbol: string,
      params: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address,address,address,uint8,string,string,bytes)"(
      pool: string,
      underlyingAsset: string,
      incentivesController: string,
      debtTokenDecimals: BigNumberish,
      debtTokenName: string,
      debtTokenSymbol: string,
      params: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    mint(
      user: string,
      onBehalfOf: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mint(address,address,uint256,uint256)"(
      user: string,
      onBehalfOf: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "name()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    scaledBalanceOf(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "scaledBalanceOf(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    scaledTotalSupply(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "scaledTotalSupply()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    symbol(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "symbol()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    totalSupply(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "totalSupply()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  DEBT_TOKEN_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

  "DEBT_TOKEN_REVISION()"(overrides?: CallOverrides): Promise<BigNumber>;

  POOL(overrides?: CallOverrides): Promise<string>;

  "POOL()"(overrides?: CallOverrides): Promise<string>;

  UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<string>;

  "UNDERLYING_ASSET_ADDRESS()"(overrides?: CallOverrides): Promise<string>;

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "allowance(address,address)"(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "approve(address,uint256)"(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  approveDelegation(
    delegatee: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "approveDelegation(address,uint256)"(
    delegatee: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  balanceOf(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  borrowAllowance(
    fromUser: string,
    toUser: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "borrowAllowance(address,address)"(
    fromUser: string,
    toUser: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  burn(
    user: string,
    amount: BigNumberish,
    index: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "burn(address,uint256,uint256)"(
    user: string,
    amount: BigNumberish,
    index: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  "decimals()"(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "decreaseAllowance(address,uint256)"(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getAssetPrice(overrides?: CallOverrides): Promise<BigNumber>;

  "getAssetPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

  getIncentivesController(overrides?: CallOverrides): Promise<string>;

  "getIncentivesController()"(overrides?: CallOverrides): Promise<string>;

  getScaledUserBalanceAndSupply(
    user: string,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  "getScaledUserBalanceAndSupply(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "increaseAllowance(address,uint256)"(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  initialize(
    pool: string,
    underlyingAsset: string,
    incentivesController: string,
    debtTokenDecimals: BigNumberish,
    debtTokenName: string,
    debtTokenSymbol: string,
    params: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address,address,address,uint8,string,string,bytes)"(
    pool: string,
    underlyingAsset: string,
    incentivesController: string,
    debtTokenDecimals: BigNumberish,
    debtTokenName: string,
    debtTokenSymbol: string,
    params: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  mint(
    user: string,
    onBehalfOf: string,
    amount: BigNumberish,
    index: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mint(address,address,uint256,uint256)"(
    user: string,
    onBehalfOf: string,
    amount: BigNumberish,
    index: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  scaledBalanceOf(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  "scaledBalanceOf(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  scaledTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "scaledTotalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  symbol(overrides?: CallOverrides): Promise<string>;

  "symbol()"(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transfer(address,uint256)"(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferFrom(address,address,uint256)"(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    DEBT_TOKEN_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    "DEBT_TOKEN_REVISION()"(overrides?: CallOverrides): Promise<BigNumber>;

    POOL(overrides?: CallOverrides): Promise<string>;

    "POOL()"(overrides?: CallOverrides): Promise<string>;

    UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<string>;

    "UNDERLYING_ASSET_ADDRESS()"(overrides?: CallOverrides): Promise<string>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    approveDelegation(
      delegatee: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "approveDelegation(address,uint256)"(
      delegatee: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowAllowance(
      fromUser: string,
      toUser: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "borrowAllowance(address,address)"(
      fromUser: string,
      toUser: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      user: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "burn(address,uint256,uint256)"(
      user: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    decimals(overrides?: CallOverrides): Promise<number>;

    "decimals()"(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "decreaseAllowance(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getAssetPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "getAssetPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    getIncentivesController(overrides?: CallOverrides): Promise<string>;

    "getIncentivesController()"(overrides?: CallOverrides): Promise<string>;

    getScaledUserBalanceAndSupply(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "getScaledUserBalanceAndSupply(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "increaseAllowance(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      pool: string,
      underlyingAsset: string,
      incentivesController: string,
      debtTokenDecimals: BigNumberish,
      debtTokenName: string,
      debtTokenSymbol: string,
      params: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,address,address,uint8,string,string,bytes)"(
      pool: string,
      underlyingAsset: string,
      incentivesController: string,
      debtTokenDecimals: BigNumberish,
      debtTokenName: string,
      debtTokenSymbol: string,
      params: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    mint(
      user: string,
      onBehalfOf: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "mint(address,address,uint256,uint256)"(
      user: string,
      onBehalfOf: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;

    scaledBalanceOf(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "scaledBalanceOf(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    scaledTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "scaledTotalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<string>;

    "symbol()"(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): EventFilter;

    BorrowAllowanceDelegated(
      fromUser: string | null,
      toUser: string | null,
      asset: null,
      amount: null
    ): EventFilter;

    Burn(user: string | null, amount: null, index: null): EventFilter;

    Initialized(
      underlyingAsset: string | null,
      pool: string | null,
      incentivesController: null,
      debtTokenDecimals: null,
      debtTokenName: null,
      debtTokenSymbol: null,
      params: null
    ): EventFilter;

    Mint(
      from: string | null,
      onBehalfOf: string | null,
      value: null,
      index: null
    ): EventFilter;

    Transfer(from: string | null, to: string | null, value: null): EventFilter;
  };

  estimateGas: {
    DEBT_TOKEN_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    "DEBT_TOKEN_REVISION()"(overrides?: CallOverrides): Promise<BigNumber>;

    POOL(overrides?: CallOverrides): Promise<BigNumber>;

    "POOL()"(overrides?: CallOverrides): Promise<BigNumber>;

    UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    "UNDERLYING_ASSET_ADDRESS()"(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    approveDelegation(
      delegatee: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "approveDelegation(address,uint256)"(
      delegatee: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    balanceOf(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowAllowance(
      fromUser: string,
      toUser: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "borrowAllowance(address,address)"(
      fromUser: string,
      toUser: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      user: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "burn(address,uint256,uint256)"(
      user: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    "decimals()"(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "decreaseAllowance(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getAssetPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "getAssetPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    getIncentivesController(overrides?: CallOverrides): Promise<BigNumber>;

    "getIncentivesController()"(overrides?: CallOverrides): Promise<BigNumber>;

    getScaledUserBalanceAndSupply(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getScaledUserBalanceAndSupply(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "increaseAllowance(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    initialize(
      pool: string,
      underlyingAsset: string,
      incentivesController: string,
      debtTokenDecimals: BigNumberish,
      debtTokenName: string,
      debtTokenSymbol: string,
      params: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(address,address,address,uint8,string,string,bytes)"(
      pool: string,
      underlyingAsset: string,
      incentivesController: string,
      debtTokenDecimals: BigNumberish,
      debtTokenName: string,
      debtTokenSymbol: string,
      params: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    mint(
      user: string,
      onBehalfOf: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "mint(address,address,uint256,uint256)"(
      user: string,
      onBehalfOf: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;

    scaledBalanceOf(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "scaledBalanceOf(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    scaledTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "scaledTotalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    "symbol()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEBT_TOKEN_REVISION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "DEBT_TOKEN_REVISION()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "POOL()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UNDERLYING_ASSET_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "UNDERLYING_ASSET_ADDRESS()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    approveDelegation(
      delegatee: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "approveDelegation(address,uint256)"(
      delegatee: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    borrowAllowance(
      fromUser: string,
      toUser: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "borrowAllowance(address,address)"(
      fromUser: string,
      toUser: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      user: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "burn(address,uint256,uint256)"(
      user: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "decimals()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "decreaseAllowance(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getAssetPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getAssetPrice()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getIncentivesController(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getIncentivesController()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getScaledUserBalanceAndSupply(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getScaledUserBalanceAndSupply(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "increaseAllowance(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    initialize(
      pool: string,
      underlyingAsset: string,
      incentivesController: string,
      debtTokenDecimals: BigNumberish,
      debtTokenName: string,
      debtTokenSymbol: string,
      params: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address,address,address,uint8,string,string,bytes)"(
      pool: string,
      underlyingAsset: string,
      incentivesController: string,
      debtTokenDecimals: BigNumberish,
      debtTokenName: string,
      debtTokenSymbol: string,
      params: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    mint(
      user: string,
      onBehalfOf: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mint(address,address,uint256,uint256)"(
      user: string,
      onBehalfOf: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    scaledBalanceOf(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "scaledBalanceOf(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    scaledTotalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "scaledTotalSupply()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "symbol()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalSupply()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
