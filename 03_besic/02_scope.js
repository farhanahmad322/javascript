
if (true) {
    let a = 10
    const b = 20
    var c=10;
    
}

//console.log(a); give error
//console.log(b); // give eroor
//console.log(c); //op=10 ,so it problem we access scope value

////////////////////////////////////////////

let a = 300
if (true) {
    let a = 10
    const b = 20
     console.log("INNER: ", a);  //NNER:  10
    
}

console.log(a);  //300
//console.log(b); //error(not access scope value)


