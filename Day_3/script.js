function greet(name, callback){
    console.log("Hello"+name);
    callback();
}

function sayBye(){
    console.log("Goodbye!");
}



//setTimeout(sayBye,10000); and setInterval(sayBye,5000)
setInterval(()=>{greet("Varun",sayBye);},10000);//Smth smtg