// SPDX-License-Identifier: MIT

pragma solidity 0.7.6;

interface IRewarder {
  function onReward(
    address pool,
    address user,
    uint256 newLpAmount
  ) external;

  function poolExists(address pool) external view returns (bool);
}
