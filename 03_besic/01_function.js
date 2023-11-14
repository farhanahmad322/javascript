function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
//sayMyName =isko functionn ka refrence bolte hai
// sayMyName() //is ko excution bolte hai
 
function addTwoNumbers(number1, number2){//parameter

    console.log(number1 + number2); 
    
}

// addTwoNumbers()  //o/p=NaN
 //addTwoNumbers(6,8)//taking argument, o/p=14

 //.........................................

 function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
    //console.log("farhan"); //return ke badh koi vi print nhi hota hai
}

const result = addTwoNumbers(3, 5)

 //console.log("Result: ", result);

 //............................///////////..............

 function loginUserMessage(username){

   return `${username} just logged in`
}

 //console.log(loginUserMessage("farhan"))//o/p=farhan just logged in
 //console.log(loginUserMessage()) //o/p= undefined just logged in

 //.............///////..................

 function loginUserMessage(username){ 
    if(!username){
        console.log("PLease enter a username");
        return    //ager ye block chal gatya to niche ka koi chalega hi nhi.
    }
    return `${username} just logged in`
}

 //console.log(loginUserMessage("hitesh"))
  //console.log(loginUserMessage())


////..................../////////////...............................

function calculateCartPrice(num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500, 2000)) //o/p=200
//give only fisrt elment islye humlog rest oprater chahiye

////////////////////////Restoprater/////////////////////

function calculateCartPrice(...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500, 2000))  //o/p=[ 200, 400, 500, 2000 ]

//////////////////////////////////////////////////////////

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500, 2000))   //o/p=[ 500, 2000 ]

////////////////...function Object... //////////////////

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)

//......... OR ..............

handleObject({
    username: "sam",
    price: 399
})

///handleObject(user)


/////////.......... function with array.../////////////

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));   // o/p=400
//console.log(returnSecondValue([200, 400, 500, 1000]));





