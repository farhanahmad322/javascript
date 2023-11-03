// Date

let myDate=new Date();

console.log(myDate);    //o/p= 2023-11-03T11:47:13.376Z

console.log(myDate.toString());  // o/p=Fri Nov 03 2023 11:50:28 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toLocaleDateString()); //O/p= 11/3/2023

// console.log(typeof myDate);  //o/p=object

// let myCreatedDate=new Date(2023,0,23)

// console.log(myCreatedDate);  //2023-01-23T00:00:00.000Z

// console.log(myCreatedDate.toDateString());  //Mon Jan 23 2023

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})



