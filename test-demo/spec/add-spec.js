const app = require("../app");

// Test Suits
describe("Test Suits 1 :", () => {
    // It() : define test

    beforeEach(()=>{
        // executes before each it()
    })

    afterEach(()=>{
        // executes after each it()
    })

    it("Should add two numbers : ", ()=>{
        let result = app.addNumber(2,3);
        expect(result).toBe(5);
    })

    it("True is truthy", ()=>{
        let value = false;
        expect(value).not.toBeTruthy();
    })

    it("Async Test",  async ()=>{
        let result =  await app.doubleNumber(5);
        expect(result).toBe(10);
    })


})