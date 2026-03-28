//Synchronous
console.log("Hello 1");
console.log("Hello 2");
console.log("Hello 3");
//Asynchronous
console.log("Step 1");
setTimeout(()=>{console.log("Step 2 (Delayed)");},2000);
console.log("Step 3");
