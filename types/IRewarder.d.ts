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

interface IRewarderInterface extends ethers.utils.Interface {
  functions: {
    "onReward(address,address,uint256)": FunctionFragment;
    "poolExists(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "onReward",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "poolExists", values: [string]): string;

  decodeFunctionResult(functionFragment: "onReward", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolExists", data: BytesLike): Result;

  events: {};
}

export class IRewarder extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IRewarderInterface;

  functions: {
    onReward(
      pool: string,
      user: string,
      newLpAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "onReward(address,address,uint256)"(
      pool: string,
      user: string,
      newLpAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    poolExists(
      pool: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "poolExists(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;
  };

  onReward(
    pool: string,
    user: string,
    newLpAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "onReward(address,address,uint256)"(
    pool: string,
    user: string,
    newLpAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  poolExists(pool: string, overrides?: CallOverrides): Promise<boolean>;

  "poolExists(address)"(
    pool: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    onReward(
      pool: string,
      user: string,
      newLpAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "onReward(address,address,uint256)"(
      pool: string,
      user: string,
      newLpAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    poolExists(pool: string, overrides?: CallOverrides): Promise<boolean>;

    "poolExists(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    onReward(
      pool: string,
      user: string,
      newLpAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "onReward(address,address,uint256)"(
      pool: string,
      user: string,
      newLpAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    poolExists(pool: string, overrides?: CallOverrides): Promise<BigNumber>;

    "poolExists(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    onReward(
      pool: string,
      user: string,
      newLpAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "onReward(address,address,uint256)"(
      pool: string,
      user: string,
      newLpAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    poolExists(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "poolExists(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}