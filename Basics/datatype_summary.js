
//primitive

// Number,boolean,String,null,BigInt,undefined,Symbol

const num = 100;
const val = true;
const String = "Dk";
const nullVal = null;
const BigNum= 324239482974n;
const symbols=Symbol("123")
const symbolstic=Symbol("123")

console.log(symbols===symbolstic);

//non primitive
//arrays . object , function

const arr= ["dk","sk"];

const myId= {
    name:"Dnyanesh",
    rollNo:18
}


function dk() {
    console.log("heelo world");
}

console.log(typeof BigNum);
console.log(typeof arr);
console.log(typeof myId);
console.log(typeof symbols);
console.log(typeof nullVal);
console.log(typeof String);
console.log(typeof dk);





