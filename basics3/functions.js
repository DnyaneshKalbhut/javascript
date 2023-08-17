function greet() {
    console.log("hello wprld");
}


greet()    // greet--> reference  ()==>execution


function add(num1 , num2) {         //num1==> it is a parameter because it is fincttion ki deg=fination 

    return num1+num2
    console.log("dk")  // not gonna print because we return it above  
}


add(2,3)  // arguments ==> whem we call function



function User(name="sam") {
    return `${name} is logged in ` ///string interpulation
}

console.log(User("Dk"));