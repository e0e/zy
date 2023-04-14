// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract StandardImpl {
    //uint256 public constant Max_value = 233;
    uint256 public constant Max_value = 233 * 2;
    uint256 public value;
    bool public initialized;

    modifier initializer() {
        require(!initialized, "Only initialize once");
        _;
        initialized = true;
    }

    function initialize(uint256 _initValue) public initializer {
        value = _initValue;
    }


    function getValue() external view returns (uint256) {
        return value;
    }


    /*function setValue(uint256 _newValue) external {
        value = _newValue;
    }
    */
   
    error ValueExceedsTheMaximumLimit();

    function setValue(uint256 _newValue) external {
        if(_newValue <= Max_value){
            revert ValueExceedsTheMaximumLimit();
        }
        value = _newValue;
    }
        
}

