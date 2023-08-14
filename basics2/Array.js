
// const arr = [1,2,3,4,5];
// const arr1 = new Array(1,2,3,4,5,6);
// const arr2 = ["Shaktiman","Dk"]
// console.log(arr1);

//shallow copy  it is a copy of array who share same reference variables
//deep copy   it does not share same reference variables


//Aarray methods

const arr = [1,2,3,4,5]

// arr.push(0);
// console.log(arr);
// arr.pop()
// console.log(arr);

// console.log(arr.indexOf(3));

// arr.unshift(0);
// console.log(arr);

// arr.shift();
// console.log(arr);
// const newArr =arr.join()
// console.log(arr);
// console.log(typeof newArr);

// Slice Splice
 

console.log("a ",arr);
const myn1 = arr.slice(1,3);
console.log(myn1);
console.log("b",arr);
const myn2 = arr.splice(1,3);
console.log(myn2);
console.log("c" ,arr);




