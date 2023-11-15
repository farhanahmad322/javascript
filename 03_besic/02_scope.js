
if (true) {
    let a = 10
    const b = 20
    var c=10;
    
}

//console.log(a); give error
//console.log(b); // give error
//console.log(c); //op=10 ,so, it problem we access scope value

////////////////////////////////////////////

let a = 300
if (true) {
    let a = 10
    const b = 20
     console.log("INNER: ", a);  //NNER:  10
    
}

//console.log(a);  //300
//console.log(b); //error(not access scope value)

///////////////////////////////////////////////////////

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //error bcz not access out side the func two() scope

     //two()  

}

one()

//bothe two(),one() function call the  run console.log(username)

//////////////////////////////////////////////////////

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  //not access bcz of out of scope
}

// console.log(username);   //not access bcz of out of scope


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //accsess 

function addone(num){
    return num + 1
}



addTwo(5)  //not accsess
const addTwo = function(num){
    return num + 2
}


