// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.7.6;
pragma experimental ABIEncoderV2;

import {ILendingPoolAddressesProvider} from '../interfaces/ILendingPoolAddressesProvider.sol';
import {IChefIncentivesController, PoolInfo} from '../interfaces/IChefIncentivesController.sol';
import {IUiIncentiveDataProviderV2} from './interfaces/IUiIncentiveDataProviderV2.sol';
import {ILendingPool} from '../interfaces/ILendingPool.sol';
import {IAToken} from '../interfaces/IAToken.sol';
import {IVariableDebtToken} from '../interfaces/IVariableDebtToken.sol';
import {IStableDebtToken} from '../interfaces/IStableDebtToken.sol';
import {IMultiFeeDistribution} from '../interfaces/IMultiFeeDistribution.sol';
import {UserConfiguration} from '../protocol/libraries/configuration/UserConfiguration.sol';
import {DataTypes} from '../protocol/libraries/types/DataTypes.sol';
import {IERC20Detailed} from '../dependencies/openzeppelin/contracts/IERC20Detailed.sol';
import '../interfaces/IOnwardIncentivesController.sol';

contract UiIncentiveDataProviderV2 is IUiIncentiveDataProviderV2 {
  using UserConfiguration for DataTypes.UserConfigurationMap;

  constructor() {}

  function getFullReservesIncentiveData(ILendingPoolAddressesProvider provider, address user)
    external
    view
    override
    returns (AggregatedReserveIncentiveData[] memory, UserReserveIncentiveData[] memory)
  {
    return (_getReservesIncentivesData(provider), _getUserReservesIncentivesData(provider, user));
  }

  function getReservesIncentivesData(ILendingPoolAddressesProvider provider)
    external
    view
    override
    returns (AggregatedReserveIncentiveData[] memory)
  {
    return _getReservesIncentivesData(provider);
  }

  function getReserveIncentiveData(ILendingPoolAddressesProvider provider, uint256 i)
    external
    view
    returns (AggregatedReserveIncentiveData memory)
  {
    ILendingPool lendingPool = ILendingPool(provider.getLendingPool());
    address[] memory reserves = lendingPool.getReservesList();
    AggregatedReserveIncentiveData[]
      memory reservesIncentiveData = new AggregatedReserveIncentiveData[](reserves.length);
    AggregatedReserveIncentiveData memory reserveIncentiveData = reservesIncentiveData[i];
    reserveIncentiveData.underlyingAsset = reserves[i];

    DataTypes.ReserveData memory baseData = lendingPool.getReserveData(reserves[i]);

    try IStableDebtToken(baseData.aTokenAddress).getIncentivesController() returns (
      IChefIncentivesController aTokenIncentiveController
    ) {
      if (address(aTokenIncentiveController) != address(0)) {
        IMultiFeeDistribution multiFee = aTokenIncentiveController.rewardMinter();
        address aRewardToken = address(multiFee.stakingToken());

        uint256 aEmissionPerSecond = aTokenIncentiveController.rewardsPerSecond();
        PoolInfo memory poolInfoA = aTokenIncentiveController.poolInfo(baseData.aTokenAddress);
        reserveIncentiveData.aIncentiveData = IncentiveData(
          aEmissionPerSecond,
          poolInfoA.lastRewardTime,
          poolInfoA.accKlapPerShare,
          11111,
          baseData.aTokenAddress,
          aRewardToken,
          address(aTokenIncentiveController),
          IERC20Detailed(aRewardToken).decimals(),
          18
        );
      }
    } catch (
      bytes memory /*lowLevelData*/
    ) {
      // Will not get here
    }

    try IStableDebtToken(baseData.stableDebtTokenAddress).getIncentivesController() returns (
      IChefIncentivesController sTokenIncentiveController
    ) {
      if (address(sTokenIncentiveController) != address(0)) {
        IMultiFeeDistribution multiFee = sTokenIncentiveController.rewardMinter();
        address sRewardToken = address(multiFee.stakingToken());

        uint256 sEmissionPerSecond = sTokenIncentiveController.rewardsPerSecond();
        PoolInfo memory poolInfoS = sTokenIncentiveController.poolInfo(baseData.aTokenAddress);
        reserveIncentiveData.sIncentiveData = IncentiveData(
          sEmissionPerSecond,
          poolInfoS.lastRewardTime,
          poolInfoS.accKlapPerShare,
          11111,
          baseData.stableDebtTokenAddress,
          sRewardToken,
          address(sTokenIncentiveController),
          IERC20Detailed(sRewardToken).decimals(),
          18
        );
      }
    } catch (
      bytes memory /*lowLevelData*/
    ) {
      // Will not get here
    }
    try IVariableDebtToken(baseData.variableDebtTokenAddress).getIncentivesController() returns (
      IChefIncentivesController vTokenIncentiveController
    ) {
      if (address(vTokenIncentiveController) != address(0)) {
        IMultiFeeDistribution multiFee = vTokenIncentiveController.rewardMinter();
        address vRewardToken = address(multiFee.stakingToken());

        uint256 vEmissionPerSecond = vTokenIncentiveController.rewardsPerSecond();
        PoolInfo memory poolInfoV = vTokenIncentiveController.poolInfo(
          baseData.variableDebtTokenAddress
        );
        reserveIncentiveData.vIncentiveData = IncentiveData(
          vEmissionPerSecond,
          poolInfoV.lastRewardTime,
          poolInfoV.accKlapPerShare,
          11111,
          baseData.stableDebtTokenAddress,
          vRewardToken,
          address(vTokenIncentiveController),
          IERC20Detailed(vRewardToken).decimals(),
          18
        );
      }
    } catch (
      bytes memory /*lowLevelData*/
    ) {
      // Will not get here
    }
    return (reserveIncentiveData);
  }

  function _getReservesIncentivesData(ILendingPoolAddressesProvider provider)
    private
    view
    returns (AggregatedReserveIncentiveData[] memory)
  {
    ILendingPool lendingPool = ILendingPool(provider.getLendingPool());
    address[] memory reserves = lendingPool.getReservesList();
    AggregatedReserveIncentiveData[]
      memory reservesIncentiveData = new AggregatedReserveIncentiveData[](reserves.length);

    for (uint256 i = 0; i < reserves.length; i++) {
      AggregatedReserveIncentiveData memory reserveIncentiveData = reservesIncentiveData[i];
      reserveIncentiveData.underlyingAsset = reserves[i];

      DataTypes.ReserveData memory baseData = lendingPool.getReserveData(reserves[i]);

      try IStableDebtToken(baseData.aTokenAddress).getIncentivesController() returns (
        IChefIncentivesController aTokenIncentiveController
      ) {
        if (address(aTokenIncentiveController) != address(0)) {
          IMultiFeeDistribution multiFee = aTokenIncentiveController.rewardMinter();
          address aRewardToken = address(multiFee.stakingToken());

          uint256 aEmissionPerSecond = aTokenIncentiveController.rewardsPerSecond();
          PoolInfo memory poolInfoA = aTokenIncentiveController.poolInfo(baseData.aTokenAddress);
          reserveIncentiveData.aIncentiveData = IncentiveData(
            aEmissionPerSecond,
            poolInfoA.lastRewardTime,
            poolInfoA.accKlapPerShare,
            11111,
            baseData.aTokenAddress,
            aRewardToken,
            address(aTokenIncentiveController),
            IERC20Detailed(aRewardToken).decimals(),
            18
          );
        }
      } catch (
        bytes memory /*lowLevelData*/
      ) {
        // Will not get here
      }

      try IStableDebtToken(baseData.stableDebtTokenAddress).getIncentivesController() returns (
        IChefIncentivesController sTokenIncentiveController
      ) {
        if (address(sTokenIncentiveController) != address(0)) {
          IMultiFeeDistribution multiFee = sTokenIncentiveController.rewardMinter();
          address sRewardToken = address(multiFee.stakingToken());

          uint256 sEmissionPerSecond = sTokenIncentiveController.rewardsPerSecond();
          PoolInfo memory poolInfoS = sTokenIncentiveController.poolInfo(baseData.aTokenAddress);
          reserveIncentiveData.sIncentiveData = IncentiveData(
            sEmissionPerSecond,
            poolInfoS.lastRewardTime,
            poolInfoS.accKlapPerShare,
            11111,
            baseData.stableDebtTokenAddress,
            sRewardToken,
            address(sTokenIncentiveController),
            IERC20Detailed(sRewardToken).decimals(),
            18
          );
        }
      } catch (bytes memory lowLevelData) {
        // Will not get here
      }

      try IVariableDebtToken(baseData.variableDebtTokenAddress).getIncentivesController() returns (
        IChefIncentivesController vTokenIncentiveController
      ) {
        if (address(vTokenIncentiveController) != address(0)) {
          IMultiFeeDistribution multiFee = vTokenIncentiveController.rewardMinter();
          address vRewardToken = address(multiFee.stakingToken());

          uint256 vEmissionPerSecond = vTokenIncentiveController.rewardsPerSecond();
          PoolInfo memory poolInfoV = vTokenIncentiveController.poolInfo(
            baseData.variableDebtTokenAddress
          );
          reserveIncentiveData.vIncentiveData = IncentiveData(
            vEmissionPerSecond,
            poolInfoV.lastRewardTime,
            poolInfoV.accKlapPerShare,
            11111,
            baseData.stableDebtTokenAddress,
            vRewardToken,
            address(vTokenIncentiveController),
            IERC20Detailed(vRewardToken).decimals(),
            18
          );
        }
      } catch (
        bytes memory /*lowLevelData*/
      ) {
        // Will not get here
      }
    }
    return (reservesIncentiveData);
  }

  function getUserReservesIncentivesData(ILendingPoolAddressesProvider provider, address user)
    external
    view
    override
    returns (UserReserveIncentiveData[] memory)
  {
    return _getUserReservesIncentivesData(provider, user);
  }

  function getUserReservesIncentivesDataSingle(
    ILendingPoolAddressesProvider provider,
    address user,
    uint256 i
  ) external view returns (UserReserveIncentiveData[] memory) {
    ILendingPool lendingPool = ILendingPool(provider.getLendingPool());
    address[] memory reserves = lendingPool.getReservesList();

    UserReserveIncentiveData[] memory userReservesIncentivesData = new UserReserveIncentiveData[](
      user != address(0) ? reserves.length : 0
    );

    DataTypes.ReserveData memory baseData = lendingPool.getReserveData(reserves[i]);

    // user reserve data
    userReservesIncentivesData[i].underlyingAsset = reserves[i];

    IUiIncentiveDataProviderV2.UserIncentiveData memory aUserIncentiveData;

    try IAToken(baseData.aTokenAddress).getIncentivesController() returns (
      IChefIncentivesController aTokenIncentiveController
    ) {
      if (address(aTokenIncentiveController) != address(0)) {
        IMultiFeeDistribution multiFee = aTokenIncentiveController.rewardMinter();
        address aRewardToken = address(multiFee.stakingToken());
        /*aUserIncentiveData.tokenincentivesUserIndex = aTokenIncentiveController.getUserAssetData(
            user,
            baseData.aTokenAddress
          );*/
        aUserIncentiveData.userUnclaimedRewards = aTokenIncentiveController.claimableKlap(
          user,
          baseData.aTokenAddress
        );
        aUserIncentiveData.tokenAddress = baseData.aTokenAddress;
        aUserIncentiveData.rewardTokenAddress = aRewardToken;
        aUserIncentiveData.incentiveControllerAddress = address(aTokenIncentiveController);
        aUserIncentiveData.rewardTokenDecimals = IERC20Detailed(aRewardToken).decimals();
      }
    } catch (
      bytes memory /*lowLevelData*/
    ) {}

    userReservesIncentivesData[i].aTokenIncentivesUserData = aUserIncentiveData;

    UserIncentiveData memory vUserIncentiveData;

    try IVariableDebtToken(baseData.variableDebtTokenAddress).getIncentivesController() returns (
      IChefIncentivesController vTokenIncentiveController
    ) {
      if (address(vTokenIncentiveController) != address(0)) {
        IMultiFeeDistribution multiFee = vTokenIncentiveController.rewardMinter();
        address vRewardToken = address(multiFee.stakingToken());
        /*vUserIncentiveData.tokenincentivesUserIndex = vTokenIncentiveController.getUserAssetData(
            user,
            baseData.variableDebtTokenAddress
          );*/
        vUserIncentiveData.userUnclaimedRewards = vTokenIncentiveController.claimableKlap(
          user,
          baseData.variableDebtTokenAddress
        );
        vUserIncentiveData.tokenAddress = baseData.variableDebtTokenAddress;
        vUserIncentiveData.rewardTokenAddress = vRewardToken;
        vUserIncentiveData.incentiveControllerAddress = address(vTokenIncentiveController);
        vUserIncentiveData.rewardTokenDecimals = IERC20Detailed(vRewardToken).decimals();
      }
    } catch (
      bytes memory /*lowLevelData*/
    ) {}

    userReservesIncentivesData[i].vTokenIncentivesUserData = vUserIncentiveData;

    UserIncentiveData memory sUserIncentiveData;

    try IStableDebtToken(baseData.stableDebtTokenAddress).getIncentivesController() returns (
      IChefIncentivesController sTokenIncentiveController
    ) {
      if (address(sTokenIncentiveController) != address(0)) {
        IMultiFeeDistribution multiFee = sTokenIncentiveController.rewardMinter();
        address sRewardToken = address(multiFee.stakingToken());
        /*sUserIncentiveData.tokenincentivesUserIndex = sTokenIncentiveController.getUserAssetData(
            user,
            baseData.stableDebtTokenAddress
          );*/
        sUserIncentiveData.userUnclaimedRewards = sTokenIncentiveController.claimableKlap(
          user,
          baseData.stableDebtTokenAddress
        );
        sUserIncentiveData.tokenAddress = baseData.stableDebtTokenAddress;
        sUserIncentiveData.rewardTokenAddress = sRewardToken;
        sUserIncentiveData.incentiveControllerAddress = address(sTokenIncentiveController);
        sUserIncentiveData.rewardTokenDecimals = IERC20Detailed(sRewardToken).decimals();
      }
    } catch (
      bytes memory /*lowLevelData*/
    ) {}

    userReservesIncentivesData[i].sTokenIncentivesUserData = sUserIncentiveData;

    return (userReservesIncentivesData);
  }

  function _getUserReservesIncentivesData(ILendingPoolAddressesProvider provider, address user)
    private
    view
    returns (UserReserveIncentiveData[] memory)
  {
    ILendingPool lendingPool = ILendingPool(provider.getLendingPool());
    address[] memory reserves = lendingPool.getReservesList();

    UserReserveIncentiveData[] memory userReservesIncentivesData = new UserReserveIncentiveData[](
      user != address(0) ? reserves.length : 0
    );

    for (uint256 i = 0; i < reserves.length; i++) {
      DataTypes.ReserveData memory baseData = lendingPool.getReserveData(reserves[i]);

      // user reserve data
      userReservesIncentivesData[i].underlyingAsset = reserves[i];

      IUiIncentiveDataProviderV2.UserIncentiveData memory aUserIncentiveData;

      try IAToken(baseData.aTokenAddress).getIncentivesController() returns (
        IChefIncentivesController aTokenIncentiveController
      ) {
        if (address(aTokenIncentiveController) != address(0)) {
          IMultiFeeDistribution multiFee = aTokenIncentiveController.rewardMinter();
          address aRewardToken = address(multiFee.stakingToken());
          /*aUserIncentiveData.tokenincentivesUserIndex = aTokenIncentiveController.getUserAssetData(
            user,
            baseData.aTokenAddress
          );*/
          aUserIncentiveData.userUnclaimedRewards = aTokenIncentiveController.claimableKlap(
            user,
            baseData.aTokenAddress
          );
          aUserIncentiveData.tokenAddress = baseData.aTokenAddress;
          aUserIncentiveData.rewardTokenAddress = aRewardToken;
          aUserIncentiveData.incentiveControllerAddress = address(aTokenIncentiveController);
          aUserIncentiveData.rewardTokenDecimals = IERC20Detailed(aRewardToken).decimals();
        }
      } catch (
        bytes memory /*lowLevelData*/
      ) {}

      userReservesIncentivesData[i].aTokenIncentivesUserData = aUserIncentiveData;

      UserIncentiveData memory vUserIncentiveData;

      try IVariableDebtToken(baseData.variableDebtTokenAddress).getIncentivesController() returns (
        IChefIncentivesController vTokenIncentiveController
      ) {
        if (address(vTokenIncentiveController) != address(0)) {
          IMultiFeeDistribution multiFee = vTokenIncentiveController.rewardMinter();
          address vRewardToken = address(multiFee.stakingToken());
          /*vUserIncentiveData.tokenincentivesUserIndex = vTokenIncentiveController.getUserAssetData(
            user,
            baseData.variableDebtTokenAddress
          );*/
          vUserIncentiveData.userUnclaimedRewards = vTokenIncentiveController.claimableKlap(
            user,
            baseData.variableDebtTokenAddress
          );
          vUserIncentiveData.tokenAddress = baseData.variableDebtTokenAddress;
          vUserIncentiveData.rewardTokenAddress = vRewardToken;
          vUserIncentiveData.incentiveControllerAddress = address(vTokenIncentiveController);
          vUserIncentiveData.rewardTokenDecimals = IERC20Detailed(vRewardToken).decimals();
        }
      } catch (
        bytes memory /*lowLevelData*/
      ) {}

      userReservesIncentivesData[i].vTokenIncentivesUserData = vUserIncentiveData;

      UserIncentiveData memory sUserIncentiveData;

      try IStableDebtToken(baseData.stableDebtTokenAddress).getIncentivesController() returns (
        IChefIncentivesController sTokenIncentiveController
      ) {
        if (address(sTokenIncentiveController) != address(0)) {
          IMultiFeeDistribution multiFee = sTokenIncentiveController.rewardMinter();
          address sRewardToken = address(multiFee.stakingToken());
          /*sUserIncentiveData.tokenincentivesUserIndex = sTokenIncentiveController.getUserAssetData(
            user,
            baseData.stableDebtTokenAddress
          );*/
          sUserIncentiveData.userUnclaimedRewards = sTokenIncentiveController.claimableKlap(
            user,
            baseData.stableDebtTokenAddress
          );
          sUserIncentiveData.tokenAddress = baseData.stableDebtTokenAddress;
          sUserIncentiveData.rewardTokenAddress = sRewardToken;
          sUserIncentiveData.incentiveControllerAddress = address(sTokenIncentiveController);
          sUserIncentiveData.rewardTokenDecimals = IERC20Detailed(sRewardToken).decimals();
        }
      } catch (
        bytes memory /*lowLevelData*/
      ) {}

      userReservesIncentivesData[i].sTokenIncentivesUserData = sUserIncentiveData;
    }

    return (userReservesIncentivesData);
  }
}
