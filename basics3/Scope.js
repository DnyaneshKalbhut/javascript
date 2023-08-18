// var c=100;
// let b=200
// if (true) {
//     const a= 10;
//     let b = 20;//they will only execute in there intialize code
//     var c= 30;   // var have big issue of scope sp thats why let amd var are introduced
//  console.log(b);
//  console.log(a);

// }

// console.log(b);
// console.log(c);


// function one(params) {
//     const b= 10;
//     function two(params) {
//         const a=20;
//         console.log(b);
//     }
//     // console.log(a); // it will not work child can  acess parents function variable but parent cant
//     two()
// }one()


if (true) {
    const name = "Dnyanesh"
    if (name==="Dnyanesh") {
        const sirname ="Kalbhut"
    console.log(name + " "+sirname);
    }
    // console.log(sirname);//not accesable
}
// console.log(name);//not accesable




///////////////////////////////////////////////////////////////////////


console.log(addone(3));
function addone(num) {
    return num+1;
}


addtwo() // this will show error 
const addtwo = function (num) {  // ==>expression
    return num+2;
}