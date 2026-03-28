let p= new Promise((resolve,reject)=>{
    //any function
    let success=true;
    setTimeout(()=>{
        if(success)
            resolve("Operation is successful.");
        else
            reject("Operation is unsuccessful.");
    },2000);
});

Promise
p.then(result=>console.log(result))