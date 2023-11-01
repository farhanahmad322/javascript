     // 2type datatype

//   Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100       //number
const scoreValue = 100.3  //number

const isLoggedIn = false    //Boolean
const outsideTemp = null   //kuch vi nhi isme matlb(zero vi nhi)
let userEmail;          //undefined

const id = Symbol('123')
console.log(id);   //o/p =Symbol(123)
const anotherId = Symbol('123')

// console.log(id == anotherId);   //false
console.log(id === anotherId);   //false

// const bigNumber = 3456543576654356754n   //BigInt

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];     //array

let myObj = {
    name: "hitesh",              //object
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");               //function
}

console.log(typeof myObj);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++

// 1] stack=> (primitive hot hai)=(copy milta hai variabale ka)

//2] heap(non-primitive hota hai)=([refrence milega] matlb orignal value me chenge hoga)

// let myname1="farhan";
// let anothername=myname1;

// anothername="saubi"

// console.log(myname1);
// console.log(anothername);

let userOne={
    email:"user@gmail",
    upi:"user@ybl"
  
}

let userTwo=userOne
userTwo.email="farhan@google.com"

console.log(userOne.email);
console.log(userTwo.email);



