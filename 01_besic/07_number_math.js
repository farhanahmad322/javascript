const score = 400
 //console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(1));  // point ke badh 1 digit dega

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));  // round of krega or exponesial me krega 

const hundreds = 1000000
//console.log(hundreds.toLocaleString());  // O/P=1,000,000
//console.log(hundreds.toLocaleString('en-IN'))   //O/P=10,00,000


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));    o.p=4   //conver in +ve
// console.log(Math.round(4.6));   o/p=5
// console.log(Math.ceil(4.2));     O/p=5 ( pont ke badh thora sa increase krega to upar wala lega)
// console.log(Math.floor(4.9));    O/p=4(point se pahle wala print hoga)
// console.log(Math.min(4, 3, 6, 8));  
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
