// Imedieately Invoked function Expression ==> to prevent global scope  pollution  & immedieately execute

(function chai(params) {
    console.log("hello");
})();
//always put a semicolon between two IIFe function

((name)=>{
    console.log("hello" , name);
})("Dk")