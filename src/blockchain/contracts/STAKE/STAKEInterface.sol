pragma solidity >=0.4.22 <0.6.0;

interface STAKEInterface {
  function totalSupply() external view returns (uint256);
  function totalSupplyAt(uint256 _blockNumber) external view returns (uint256);
  function stakeOf(address _owner) external view returns (uint256);
  function stakeOfAt(address _owner, uint256 _blockNumber) external view returns (uint256);
}