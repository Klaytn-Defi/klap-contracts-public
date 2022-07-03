pragma solidity 0.7.6;

interface IMasterChef {
  function depositFromVe(
    address _token,
    uint256 _amount,
    address _user
  ) external;

  function withdrawFromVe(
    address _token,
    uint256 _amount,
    address _user
  ) external;
  function updateFactor(address _user) external;
}
