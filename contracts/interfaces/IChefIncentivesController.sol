// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.7.6;
pragma experimental ABIEncoderV2;

import './IMultiFeeDistribution.sol';
import './IOnwardIncentivesController.sol';

struct PoolInfo {
  uint256 totalSupply;
  uint256 lastRewardTime; // Last second that reward distribution occurs.
  uint256 accKlapPerShare; // Accumulated rewards per share, times 1e12. See below.
  uint256 accKlapPerFactorShare; // accumulated klap per factor share
  uint256 sumOfFactors; // the sum of all non dialuting factors by all of the users in the pool
  IOnwardIncentivesController onwardIncentives;
}

interface IChefIncentivesController {
  /**
   * @dev Called by the corresponding asset on any update that affects the rewards distribution
   * @param user The address of the user
   * @param userBalance The balance of the user of the asset in the lending pool
   * @param totalSupply The total supply of the asset in the lending pool
   **/
  function handleAction(
    address user,
    uint256 userBalance,
    uint256 totalSupply
  ) external;

  function vote(uint tokenId, address[] calldata pools, int256[] calldata weights) external;
  function addPool(address _token, uint256 i) external;

  function claim(address _user, address[] calldata _tokens) external;

  function setClaimReceiver(address _user, address _receiver) external;
  function rewardMinter() external view returns (IMultiFeeDistribution);
  function rewardsPerSecond() external view returns (uint256);

  function poolInfo(address user) external view returns (PoolInfo memory);
  function claimableKlap(address user, address token_pool) external view returns (uint256);
  function updateFactor(address _user) external;
  function remove_vote(uint256 _tokenId) external;
}