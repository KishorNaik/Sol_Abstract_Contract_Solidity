
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

abstract contract Parent{
   // InComplete Method
   function setValue(uint _value1,uint _value2) virtual public;
   function addValue() virtual public view returns(uint);

   // Complete Method
   function fromParent() virtual public view{
      console.log("Parent");
   }
}

contract Child is Parent{

   uint private value1;
   uint private value2;

   function setValue(uint _value1,uint _value2) override public{
      value1=_value1;
      value2=_value2;
   }

   function addValue() override public view returns(uint){
      return value1 + value2; 
   }

   function fromParent() override public view{
      // Call Parent Method using super keyword or Direct Call
      // Way 1 using Direct Call
      Parent.fromParent();

      // Way 2 using super Keyword
      //super.fromParent();

      console.log("Child");
   }
}

