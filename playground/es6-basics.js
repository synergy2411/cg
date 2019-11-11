// Arrow Functions

// var numbers = [1,2,3,4,5];
// // ES5
// var doubleValue = numbers.map(function(value, index, arr){ 
//     console.log(index);
//     return value * 2;
// })
// console.log(doubleValue);

// ES6 : Arrow
// var quardValue = numbers.map(value => value * 4);

// var tripleValue = numbers.map((value, index) => {
//     console.log(index);
//     return value * 3;
// });
// console.log(tripleValue);






// var person = {
//     firstName : "Foo",
//     lastName : "Bar",
//     getFullName : function(){
//         // var self = this;
//         // function nestedFunc(){
//         //     return self.firstName + " " + self.lastName
//         // }
//         var nestedFunc = () => this.firstName + " " + this.lastName;

//         return nestedFunc();        
//     }
// }

// console.log(person.getFullName());



// PROMISES

// var promise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject(new Error("Something Bad Happened!"));
//     }, 2000);
//     // setTimeout(() => {
//     //     resolve("Promise resolved Successfully")
//     // }, 3000)
// })


// promise.then(response => {
//     console.log("[RESPONSE] ", response)
// }, err => {
//     console.log("[ERROR]", err);
// })


function delay(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}
delay(3000).then(response => {console.log("runs after 3 seconds")})
















