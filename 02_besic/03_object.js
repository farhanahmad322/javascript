// singleton= constructer ke throught banta hai
// Object.create


// object literals
const mySym = Symbol("key1")  //taling sybol

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",    //act as key 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

 //console.log(JsUser.name)  // accecc this why
 //console.log(JsUser.email)
//console.log(JsUser["email"])  // or we can access this why
//console.log(JsUser["full name"]) //
//console.log(JsUser[mySym])
//console.log(typeof JsUser[mySym])

JsUser.email = "farhan@chatgpt.com" //udateting email
//console.log(JsUser.email)  //o/p=farhan@chatgpt.com

//Object.freeze(JsUser)  //can not upadate now
JsUser.name="Udate name";  //no chenges
//console.log(JsUser.name);  // o/p=  Hitesh

//console.log(JsUser);    //only  uopdate email but not update in name


JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting); // o/p= [Function (anonymous)]
console.log(JsUser.greeting()); //give erorr becouse jsUser not a funcn

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.email}`);
}
console.log(JsUser.greetingTwo());





  

