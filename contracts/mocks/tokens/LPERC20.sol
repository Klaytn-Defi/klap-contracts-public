// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.7.6;

import {ERC20} from '../../dependencies/openzeppelin/contracts/ERC20.sol';
import "hardhat/console.sol";
/**
 * @title ERC20Mintable
 * @dev ERC20 minting logic
 */
contract LPERC20 is ERC20 {

  address public token0;
  address public token1;

  constructor(
    string memory name,
    string memory symbol,
    uint8 decimals,
    address _token0,
    address _token1
  ) ERC20(name, symbol) {
    _setupDecimals(decimals);
    token0 = _token0;
    token1 = _token1;
    _mint(_msgSender(), 1000000000000000000);
  }

  /**
   * @dev Function to mint tokens
   * @param value The amount of tokens to mint.
   * @return A boolean that indicates if the operation was successful.
   */
  function mint(uint256 value) public returns (bool) {
    _mint(_msgSender(), value);
    return true;
  }

  /**
   * @dev Function to mint tokens
   * @param value The amount of tokens to mint.
   * @return A boolean that indicates if the operation was successful.
   */
  function mint_other(address sender, uint256 value) public returns (bool) {
    console.log("sender", sender);
    console.log("value", value);
    _mint(sender, value);
    return true;
  }

  function getReserves() public view returns (
            uint112 reserve0,
            uint112 reserve1,
            uint32 blockTimestampLast
          ) {
    return (uint112(10000000000000000000), uint112(800000000000000000), uint32(block.timestamp));
  }
}
