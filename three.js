//for of

const arr =[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greeting = "Dnyanesh kalbhut"

for (const greet of greeting) {
    // console.log(greet);
}

//Map - Objects hold key value pair

const map = new Map();
map.set("en" , "india")
map.set("us" , "United states")
map.set("pk" , "pakistan")
map.set("rr" , "russia")

// console.log(map
for (const [key,value] of map) {
    console.log(key, value);
}

// for of cant iterate objects

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
