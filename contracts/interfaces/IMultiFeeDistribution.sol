pragma solidity 0.7.6;
pragma abicoder v2;
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

interface IMintableToken is IERC20 {
  function mint(address _receiver, uint256 _amount) external returns (bool);

  function setMinter(address _minter) external returns (bool);

  function maxTotalSupply() external view returns (uint256);

  function burnSpecial(address _account, uint256 _amount) external;
}

interface IMultiFeeDistribution {
  function lockedSupply() external view returns (uint256);

  function mint(address user, uint256 amount) external;

  function mintDirect(address user, uint256 amount) external;

  function stakingToken() external view returns (IMintableToken);

  function totalVeRewards() external view returns (uint256);

  function rewardThreshold() external view returns (uint256);

  function wrapped_native_token() external view returns (address);

  function decreaseVeRewardsTotal(uint256 amount) external;
}
