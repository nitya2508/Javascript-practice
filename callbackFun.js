// Synchronous

function f1(){
    console.log("f1")
}
function f2(){
    console.log("f2");
}
function f3(){
    console.log("f3");
}

f1();
f3();
f2();

//Async

function main(){
    console.log("main");

    setTimeout(()=>{
        f3()
    },0);

    f2();{
        f1();
    };
}
main();

function login(name, num, callback, x){
    setTimeout(()=>{
    console.log("visited");
     callback(x);
    },3000);
}

function ticket(message, callback, y){
   setTimeout(()=>{
    console.log("ticket",message);
    callback(y);
   })
}

function interval(msg){
   setTimeout(()=>{
    console.log("refresh", msg);
   })
}


login("nitya", "1234321123", ()=>{
    ticket("hello", ()=>{
        interval("done");
    })
}) 