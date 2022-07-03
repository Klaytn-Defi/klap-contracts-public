pragma solidity 0.7.6;
pragma abicoder v2;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

interface IBurnableToken is IERC20 {
  function burnFrom(address _account, uint256 _amount) external;

  function maxSupplyAfterBurns() external view returns (uint256);
}

interface ITreasury {
  function stakingToken() external view returns (IBurnableToken);

  function initializedBurn() external view returns (bool);

  function devPercent() external view returns (uint256);

  function dev() external view returns (address);

  function setDevPercent(uint256 devPercent) external;

  function initializeBurn() external;

  function burnAndRedeem(uint256 amount) external;

  function addReward(address rewardsToken) external;

  function setLendingPoolConfigurator(address lendingPoolConfigurator) external;
}
