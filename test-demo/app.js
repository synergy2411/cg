// npm install jasmine -g
//  jasmine init

module.exports.addNumber = (num1, num2) => num1 + num2;


// Async JS Code
module.exports.doubleNumber = (num1) => {
    return Promise.resolve(num1 + num1);
}