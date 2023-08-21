
const temp=41;
if (temp===41) {
    console.log("yeah its true");
} else {
    console.log(("not "));
}

// <,>,==,<=,>=,===,!=,!==

const bal =1000;
if (bal<500) {
    console.log("less than 500");
}else if(bal<750){
    console.log("less than 750");
}else{
    console.log("less than 1200");
}



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (userLoggedIn && debitCard) {
    console.log("allow to buy");
}

if (loggedInFromEmail||loggedInFromGoogle) {
    console.log("user logged in");
}