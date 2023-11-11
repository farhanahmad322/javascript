 //const tinderUser = new Object()
 //console.log(tinderUser); //o/p={}

const tinderUser={}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);  //o/p= { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

//console.log(regularUser.email);
//console.log(regularUser.fullname); //o/p={ userfullname: { firstname: 'hitesh', lastname: 'choudhary' } }

//console.log(regularUser.fullname.userfullname);// o/p={ firstname: 'hitesh', lastname: 'choudhary' }

//console.log(regularUser.fullname.userfullname.firstname); //o/p=hitesh


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

 //const obj3 = { obj1, obj2 }  //obje ke andar object ajyega
  //console.log(obj3)  //o/p={ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

 //const obj3 = Object.assign(obj1, obj2, obj4)  //magging
// console.log(obj3);  //op={ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj3 = {...obj1, ...obj2,...obj4} //also we can use
 console.log(obj3);


 // console.log(tinderUser);

//console.log(Object.keys(tinderUser)); //give key =[ 'id', 'name', 'isLoggedIn' ]

//console.log(Object.values(tinderUser)); //give value=[ '123abc', 'Sammy', false ]

//console.log(Object.entries(tinderUser)); //  give key and vale=[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

 const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

//users[1].email

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
//course.courseInstructor //valid
 //console.log(course.courseInstructor);  //O/P=hitesh

  //OR
  //const {courseInstructor} = course
  //console.log(courseInstructor); //o/p=hitesh

  const {courseInstructor:instructor} = course  //whe chenge or short the name
  console.log(instructor);  //o/p=hitesh

  //Json in object form

  // {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//json in array form

[
    {},
    {},
    {}
]







