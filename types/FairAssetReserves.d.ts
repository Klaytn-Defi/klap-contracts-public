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

interface FairAssetReservesInterface extends ethers.utils.Interface {
  functions: {
    "base()": FunctionFragment;
    "getAssetPrice(address)": FunctionFragment;
    "getFairValue(uint256)": FunctionFragment;
    "lp_token()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateLPToken(address)": FunctionFragment;
    "updateOracle(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "base", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAssetPrice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getFairValue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "lp_token", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateLPToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateOracle",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "base", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAssetPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFairValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lp_token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateLPToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateOracle",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class FairAssetReserves extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: FairAssetReservesInterface;

  functions: {
    base(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "base()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    getAssetPrice(
      token: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getAssetPrice(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getFairValue(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getFairValue(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    lp_token(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "lp_token()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    owner(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "owner()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    updateLPToken(
      _lp_token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateLPToken(address)"(
      _lp_token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    updateOracle(
      _base: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateOracle(address)"(
      _base: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  base(overrides?: CallOverrides): Promise<string>;

  "base()"(overrides?: CallOverrides): Promise<string>;

  getAssetPrice(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getAssetPrice(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getFairValue(
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getFairValue(uint256)"(
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lp_token(overrides?: CallOverrides): Promise<string>;

  "lp_token()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  updateLPToken(
    _lp_token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateLPToken(address)"(
    _lp_token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  updateOracle(
    _base: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateOracle(address)"(
    _base: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    base(overrides?: CallOverrides): Promise<string>;

    "base()"(overrides?: CallOverrides): Promise<string>;

    getAssetPrice(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getAssetPrice(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFairValue(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getFairValue(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lp_token(overrides?: CallOverrides): Promise<string>;

    "lp_token()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateLPToken(_lp_token: string, overrides?: CallOverrides): Promise<void>;

    "updateLPToken(address)"(
      _lp_token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateOracle(_base: string, overrides?: CallOverrides): Promise<void>;

    "updateOracle(address)"(
      _base: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    base(overrides?: CallOverrides): Promise<BigNumber>;

    "base()"(overrides?: CallOverrides): Promise<BigNumber>;

    getAssetPrice(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getAssetPrice(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFairValue(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getFairValue(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lp_token(overrides?: CallOverrides): Promise<BigNumber>;

    "lp_token()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    updateLPToken(_lp_token: string, overrides?: Overrides): Promise<BigNumber>;

    "updateLPToken(address)"(
      _lp_token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    updateOracle(_base: string, overrides?: Overrides): Promise<BigNumber>;

    "updateOracle(address)"(
      _base: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    base(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "base()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAssetPrice(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAssetPrice(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFairValue(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getFairValue(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lp_token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lp_token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    updateLPToken(
      _lp_token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateLPToken(address)"(
      _lp_token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    updateOracle(
      _base: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateOracle(address)"(
      _base: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}