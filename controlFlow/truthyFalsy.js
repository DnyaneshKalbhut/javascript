//falsy values
// 0,"",BigInt 0n , -0, null ,undefined,NaN

//truthy
// 1, " ","faslse","0",[],{},func

const empObj={}
if (Object.keys(empObj).length==0) {
    console.log("obj is empty");
}

// nulish coalseling operator ?? : null udefined
let val1 ;
//val1 = 5??10
// val 1 = null??10;
val1=undefined ?? 15
console.log(val1);

//terniary operator

//condition ? true: false
const price = 100
price>100 ? console.log("yes") : console.log("no"); 