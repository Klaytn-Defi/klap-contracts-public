// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.7.6;
pragma experimental ABIEncoderV2;

struct LockedBalance {
  uint256 amount;
  uint256 end;
}

enum TokenType {
  None,
  ERC20,
  LP
}

interface IVe {
  function lp_token() external view returns (address);
  function balanceOfNFT(uint256 _tokenId) external view returns (uint256);
  function balanceOfNFTAt(uint256 _tokenId, uint256 _t) external view returns (uint256);

  function withdraw(address sender, uint256 _tokenId) external;

  function locked(uint256 _tokenId) external returns (LockedBalance memory);

  function locked_duration(uint256 _tokenId) external returns (uint256);

  function rewardPerTokenId(uint256 _tokenId) external returns (uint256);

  function create_lock_for(
    uint256 _value,
    uint256 _lock_duration,
    address _to
  ) external returns (uint256);

  function create_lp_lock(
    uint256 _lp_value,
    uint256 _lock_duration,
    address _to
  ) external returns (uint256);

  function start_time(uint256 _token_id) external view returns (uint256);

  function idToOwner(uint256) external view returns (address);

  function abstain(uint256 _tokenId) external;

  function voting(uint256 _tokenId) external;

  function tokenType(uint256 _tokenId) external view returns (TokenType);

  function getUserFactor(address _user) external view returns (uint256);
}
