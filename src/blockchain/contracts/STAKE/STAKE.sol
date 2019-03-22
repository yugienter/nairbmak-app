pragma solidity >=0.4.22 <0.6.0;

import "./StandardSTAKE.sol";

contract STAKE is StandardSTAKE {
  string name_;
  string symbol_;
  uint256 decimals_;

  constructor () public {
    name_ = "STAKE";
    symbol_ = "STAKE";
    decimals_ = 18;
  }

  function name() public view returns (string memory) {
    return name_;
  }

  function symbol() public view returns (string memory) {
    return symbol_;
  }

  function decimals() public view returns (uint256) {
    return decimals_;
  }

}