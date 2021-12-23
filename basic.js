console.log("x=========",x)
let num=5;
// let num=6; //cannot redeclare globally
const n=20;
var x=7;
var x=15 //can be redeclared or re assigned grobally or locally
a ();
b ();
console.log(x)

function a(){
     var x= 20;
     let num=500; //can redeclare locally
     console.log(num)
    console.log(x);
}

function b(){
    var x=100;
    // n=3 //const cannot be be reasigned
    console.log(x);
}
const array = [10,20, 30];
array.push(50);
console.log(array)
