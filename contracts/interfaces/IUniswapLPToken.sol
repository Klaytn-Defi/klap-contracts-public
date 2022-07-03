pragma solidity 0.7.6;

interface IUniswapLPToken {
    function getReserves()
        external
        view
        returns (
            uint112 reserve0,
            uint112 reserve1,
            uint32 blockTimestampLast
        );
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transferFrom(
        address from,
        address to,
        uint256 value
    ) external returns (bool);
    function token0() external view returns (address);
    function token1() external view returns (address);
}