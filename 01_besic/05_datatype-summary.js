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