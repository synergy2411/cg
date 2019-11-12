// module.exports.foo = function(){
//     console.log("Foo Called");
// }
// module.exports.MAGIC_NUMBER = Math.floor(Math.random() * 10);


const MAGIC_NUMBER = Math.floor(Math.random() * 10);

function privateFunc() {
    console.log("Private function called");
}

function foo() {
    console.log("Foo Called")
}

function bar() {
    console.log("Bar Called!")
    privateFunc();
}

module.exports = {
    bar, foo
}