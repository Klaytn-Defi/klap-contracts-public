// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.7.6;
pragma experimental ABIEncoderV2;

import './IOnwardIncentivesController.sol';

interface IChefIncentivesLite {
  function poolInfo(address user)
    external
    view
    returns (
      uint256 totalSupply,
      uint256 lastRewardTime,
      uint256 accKlapPerShare,
      uint256 accKlapPerFactorShare,
      uint256 sumOfFactors,
      IOnwardIncentivesController onwardIncentives
    );
}
