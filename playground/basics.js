// var x = "20";
// var z = 20;

// console.log(x == z);        // ?


// console.log(typeof x);

// var y = 10;

// console.log(y + x);     // 2010
// console.log(x - y);     // 10


// x = 20;

// console.log(typeof x)

// x = true;
// console.log(typeof x)


// Non blocking 

// function longRunningOperation(){
//     setTimeout(function(){
//         console.log("Running the operation");
//     }, 3000);
// }

// function webRequest(req){
//     console.log("Starting the operation with ID #" + req.id)
//     longRunningOperation(); 
//     console.log("Ending the operation with ID #" + req.id)
// }

// webRequest({id : 1})
// webRequest({id : 2})

// var arr = ["Foo", true, 32, function(){console.log("Hello There")}, {name : "Foo"}];

// arr[3]();



//FUNCTIONS

//  Function Expression
// var addition = function (num1 , num2){
//     return num1 + num2;
// }

// console.log(addition(2,4));
// console.log(addition);      //?

// Nested Function
// function mystery(){
//     var chooseNumber = function (){
//         return 7;
//     }
//     return chooseNumber;
//     var chooseNumber = function (){
//         return 12;
//     }
// }

// // console.log(mystery());
// var nestedFunc = mystery();
// console.log(nestedFunc());          // ?


// IIFE : for startup configuration & creating Scopes

// (
//     function(){
//         console.log("IIFE here!");
//     }
// )();

// Lexical scoping
// var x = 100;

// function a(){
//     var x =200;
//     function b(){
//         var x = 300;
//         console.log(x);         // ?
//     }
    
//     b();
// }

// a();


// HOF / Callback : Higher Order Function

// function greet(err, msg){
//     if(err){
//         console.log("ERROR : ", err);
//     }else{
//         console.log(msg);
//     }
// }

// function sayHello (arr, cb){
//     if(arr.length > 2){
//         cb(null, "Greater than 2")
//     }else{
//         cb(new Error("Lesser than two"));
//     }
// }

// sayHello([1,2,3,4],greet)


// function buildUI(data){
//     console.log("Starting UI building", data);
// }

// function clickHandler(cb){
//     setTimeout(function(){
//         cb("Here the data comes");
//     }, 3000);
// }

// clickHandler(buildUI)


// www.javascript.info

// OBJECTS : 
    // literal Method
        // var myFriends =  ["Bam", "Baz", "Bas"];
        // var user = {
        //     firstName : "Foo",
        //     lastName : "Bar",
        //     age : 34,
        //     sayHello : function(){
        //         return "Hello " + this.firstName + " " + this.lastName; 
        //     },
        //     friends : myFriends
        // }

        // user.friends.push("XYZ");
        // console.log(user.friends.length);           // 4
        // console.log(myFriends.length);           // 

        // user.middleName = "Baz";
        // delete user.middleName;
        // console.log(user);

    
    // Objects/Array/Functions are reference type

    // var a = {
    //     name : "Foo"
    // }
    // var b = a;
    // b.name = "Bar";
    // console.log(a);         //?


    // Constructor Method

    // function Student(fname, lname, age){
    //     // var this = {};
    //     this.fname=  fname;
    //     this.lname = lname;
    //     this.age = age;

    //     this.getFullName = function(){
    //         return this.fname + " " + this.lname;
    //     }
    //     // return this;
    // }

    // console.log(new Student("FNAME", "LNAME", 35));

    // var foo = new Student("Foo", "Bar", 34);
    // console.log(foo.getFullName());


    // Instance Method : implements inheritance

//     var Shoe = {
//         gender : 'Women',
//         size : 5,
//         construction : 'slipper'
//     }

//     var magicShoe = Object.create(Shoe);
//     magicShoe.size = 8;

// console.log(Shoe.hasOwnProperty('gender'));        //?
// console.log(magicShoe.isPrototypeOf(Shoe));
// console.log(Shoe.isPrototypeOf(magicShoe));
// console.log(Object.prototype.isPrototypeOf(Shoe));
// console.log(Object.prototype.isPrototypeOf(magicShoe));








    // var str = "Some string";
    // console.log(str.length);        // 11



// PROTOTYPING : Extending String Constructor

// var str1 = "Welcome to JavaScript";
// var str2 = "I Love NodeJS";

// String.prototype.countLetter = function(letter){
//     var counter = 0;
//     for(var i =0; i< this.length; i++){
//         if(this.charAt(i).toUpperCase() === letter.toUpperCase()){
//             counter++;
//         }
//     }
//     return counter;
// }

// console.log("Occurance : " , str1.countLetter("e"));
// console.log("Occurance : " , str2.countLetter("O"));




//Closures : process of binding outer scope variable deep inside the function factory

// function testClosure(){
//     var x = 4;

//     return function(){
//         return ++x;
//     }
// }

// var nestedFunc = testClosure();
// console.log(nestedFunc());
// console.log(nestedFunc());              
// console.log(nestedFunc());              
// console.log(nestedFunc());              
// console.log(nestedFunc());     


function buildTicket(transport){
    var numOfPass = 0;
    return function(name){
        return "Hello " + name + "!\n" + 
            "You are going via "+ transport + "\n" + 
            "Your Ticket ID #"+ (++numOfPass); 
    }
}

var ship = buildTicket("Ship");
console.log(ship("Foo"));
console.log(ship("Bar"));

var car = buildTicket("Car");
console.log(car("Baz"));
