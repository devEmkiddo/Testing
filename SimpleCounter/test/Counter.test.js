//SPDX-License-Identifier: MIT

const Counter = artifacts.require('Counter');

//Begin with a new test script for counter

contract('Counter', ()=>{
    //Describe what we would expect from the test
    it('Should add two numbers correctly', async()=>{
        //deploy the contract on the library
        const counterInstance = await Counter.new();
        
        //Calling the add function
        const result = await counterInstance.add(1,2);

        //checking for error
        assert.equal(result.toNumber(), 3, 'Addition is incorrect');
        //the sum of 1, and 2 should be equal to 3
    });
});