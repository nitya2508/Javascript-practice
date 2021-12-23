function ingredients(veg, spices){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("fetched all ingredients",veg, spices);
             resolve();
        },3000);
    });

}

function preparation(){
    return  new Promise((res, reject)=>{
        setTimeout(()=>{
            console.log("preparation completed");
            res();
        },3000);
    });

}

function serve(){
    setTimeout(()=>{
        console.log("food is served")
    });

}

ingredients("vegetables","spices").then(()=>{
    preparation().then(()=>{
        serve()
        console.log("completed")
    }).catch((err)=>{
        console.log("err",err)
    })
}).catch((error)=>{
    console.log("error",error)
})


