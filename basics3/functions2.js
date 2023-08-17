
// function in objects

const obj = {
    name:"Dk",
    rno : 18
}

function print(objects) {

    console.log(objects.name);
    console.log(objects.rno);
    console.log(`username is ${objects.name} and rollno  is ${objects.rno}`);
}

// print(obj)
// print({
//     name:"Dnyanesh",
//     rno:14
// })


function Obj1(num1,num2,...num) {    // rest operator
    return   num;
}


// console.log( Obj1(12,123,4,3,4,54,4,6))


//array in function
const arr = [1,2,3,4,5,67,7878]

function Arrays(newArr) {
    return newArr[2];
}

console.log(arr[2]);
console.log([2,4,6,7,8]);