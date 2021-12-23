
function login(name, num){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("visited");
            resolve();
            },3000);
    })
    
}


function ticket(message){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("ticket");
           resolve();
           },2000)
    })
  
}

function interval(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("refresh");
            resolve();
           },5000)
    })
   
}


// login("nitya", "1234321123", ()=>{
//     ticket("hello", ()=>{
//         interval();
//     })
// }) 

async function movie(){
    try{
    await login("nitya@gmail.com","1231231234");
   await ticket("booked");
   await interval();
    anotherfun()
    // await callback();
    }catch(error){
        console.log("error",error)
    }
    
}

movie()

function anotherfun(){
    setTimeout(()=>{
        console.log("completed")
    },1000)
}

// movie(()=>{
//    anotherfun()
// })
// anotherfun()