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


// function delay(ms){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, ms)
//     })
// }
// delay(3000).then(response => {console.log("runs after 3 seconds")})



// BLOCK SCOPE
// - let
// - const

// const MAX_VALUE;
// const MAX_VALUE = 100;
// MAX_VALUE = 200;

// const USER = Object.freeze({
//     firstName : "Foo"
// })

// USER.firstName = "Bar";

// console.log(USER);          // ?


// function demo(arr){
//     if(arr.length > 2){
//         let load = "LOADING"
//         console.log(flash);                 // undefined
//     }else{
//         let flash = "FLASHING"
//     }
// }

// demo([1,2,3,4])




// REST / SPREAD

// function demo(fname, ...args){
//     console.log(args[0]);           // 
// }

// demo("foo")
// demo("foo", "Bar")
// demo("foo", "Bar", 32)


// let arr = [3,4,5];
// let newArr = [1,2,...arr,6,7];     

// console.log(newArr);         // ?



// DESTRUCTING : Arrays & Objects

// let arr = ["Foo", "Bar", "Bam", "Bas"];

// let [arr1, arr3, arr4] = arr;

// console.log(arr3);          // ?


// let myModule = {
//     drawText: text => console.log("Drawing " + text),
//     drawCircle: r => console.log(Math.PI * r * r),
//     drawRect: (w, l) => console.log(2 * w * l)
// }

// let { drawCircle: dc, drawText: dt } = myModule;

// dc(3);
// dt("Sample Text");


// let user = {
//     firstName: "Foo",
//     lastName: "Bar",
//     address: {
//         street: "201 Main road",
//         city: "Mumbai"
//     },
//     hobbies: ["sports", "surfing", "planting", "Cricket"]
// }

// let {
//     firstName: fn,
//     lastName: ln,
//     address: { street: st, city: ct },
//     hobbies: [h1, h2, h3, h4 = "Football"] } = user;

// console.log(fn, ln, st, ct, h1, h2, h3, h4);

// javascript.info


// TEMPLATE STRING
let fruit =  "Mango";

console.log(`I 

love 

${fruit}!`);

