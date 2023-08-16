// const obj=new Object();

const tinderUser={}
tinderUser.id="asd232";
tinderUser.name="Dk"
tinderUser.isLoggedIn=false;

// console.log(tinderUser);

const regularUser={
    email:"kalbhut@gmail.com",
    fullname:{
        userFullname:{
            firstname:"Dnyanesh",
            lastname:"Kalbhut"
        }
    }
}
// console.log(regularUser.fullname.userFullname.lastname);

const obj1 ={1:"a",2:"s",3:"r"};
const  obj2 ={4:"a",5:"s",6:"r"};

const obj3 =Object.assign({},obj1,obj2);
// console.log(obj3);

const obj5=[
    {

    },
    {
    name:"Dk",
    rno:19
}
] ;

console.log(obj5[1].name);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))


console.log(tinderUser.hasOwnProperty("isLoggedIn"));

///Destructure Object

const course = {
    coursename:"js in hindi",
    coursePrice:"free",
    courseInstructor:"Dk"
}

const {courseInstructor : teacher }=course;

console.log(teacher);


//JSON is a Object notation

// {
//     name:"dk",
//     rno:18
// // }
// [

// ]