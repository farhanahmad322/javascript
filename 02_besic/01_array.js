// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

myArr.push(6)  // array ka last me ja kr add ho jayega 6
myArr.push(7)  // array ka last me ja kr 7 add ho jayega
//console.log(myArr);  //o/p=[0,1,2,3,4,5,6,7]

 myArr.pop()      //remove the last element
//console.log(myArr);  //o/p=[0,1,2,3,4,5,6]

 myArr.unshift(9)   //starting me add ho jayega 9
// console.log(myArr);  //o/p=[9,0,1,2,3,4,5]
myArr.shift()    // starting element remove ho jayega
// console.log(myArr);  //o/p=[1,2,3,4,5]

// console.log(myArr.includes(9));   //kiya 9 parsent hai isme o/p false
// console.log(myArr.indexOf(3));  // give index of element

const newArr = myArr.join()  //conver array in string

//console.log(newArr);       // 0, 1, 2, 3,4, 5, 6 
 //console.log(typeof newArr); //string

 // slice, splice

console.log("A ", myArr);   //o/p=A  [0, 1, 2, 3,4, 5, 6]
const myn1 = myArr.slice(1, 3) 

console.log(myn1);   // [ 1, 2 ]
console.log("B ", myArr); //  B  [0, 1, 2, 3,4, 5, 6]


const myn2 = myArr.splice(1, 3)    //divide two diffrent part of array
console.log("C ", myArr);  //C  [ 0, 4, 5, 6 ]
console.log(myn2);//   [ 1, 2, 3 ]





