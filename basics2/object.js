
const sym = Symbol("Dk")
const obj={
    name : "Dnyanesh",
    rno:18,
    [sym]:"Dk1",
    branch : "CSe",
    intership: ["internpe", "infosys"]
}

// console.log(obj.name);
// console.log(obj["rno"]);
// console.log(typeof obj[sym]);



// obj.branch="it";
// Object.freeze(obj);
// obj.branch="Mech";
// console.log(obj.branch);



obj.greeting = function(){
    console.log(" hello  object");
}
console.log(obj.greeting());

obj.greeting2=function(){
    console.log(`hello use ${this.name}` );
}
console.log(obj.greeting2());

