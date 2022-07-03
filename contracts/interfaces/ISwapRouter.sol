pragma solidity 0.7.6;
pragma abicoder v2;

interface ISwapRouter {
  function addLiquidityKLAY(
    address token,
    uint256 amountTokenDesired,
    uint256 amountTokenMin,
    uint256 amountKLAYMin,
    address to,
    uint256 deadline
  )
    external
    payable
    returns (
      uint256 amountToken,
      uint256 amountKLAY,
      uint256 liquidity
    );
}
