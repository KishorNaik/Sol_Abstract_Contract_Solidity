import { expect } from "chai";
import { ethers } from "hardhat";

// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });


describe("Interface-Example", function () {
  it("#Test1 - Interface-Success", async function () {
    
    try
    {
      const [owner,add1,add2]=await ethers.getSigners();

      const Contract= await ethers.getContractFactory("Child");
      const contract= await Contract.deploy();
      await contract.deployed();

      // Assert
      await contract.connect(owner).setValue(2,2);
      let value:number=await contract.connect(owner).addValue();

      await contract.connect(owner).fromParent();

      // Test
      expect(value).to.equal(4);
    }
    catch(ex)
    {
      console.log((<Error>ex).message);
      expect(false).to.equal(true);
    }
  });
});