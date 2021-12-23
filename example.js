// var a = 5 

// function adder(){
//     let b = 7
//     console.log(a + b)
//  }
//  adder()
// console.log(adder())
// console.log(b)
//=================================================
// function x() {
//     var a = 7
//     function y() {
//       console.log(a)
//     }
//     return y
//   }
  
//   var z = x()
//   console.log(z)

//======================================================

function consoleNum() {
    console.log(num)
    var num = 10
  }
  
  consoleNum()

  //====================================================

  console.log('Hello')
  setTimeout(() => {
    console.log('lovely')
  }, 0)
  console.log('reader')

  //===================================================

  var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; 
  var anotherArrayList = arrayList;
arrayList = []; 
console.log(anotherArrayList);

//=====================================================

// let arr = [1, 2, 3, 4, 5, 6, 7]

// function consoleEven(arr) {
//   let data = arr.map((num) => (num))
  
//   console.log(data)  
// }
// consoleEven(arr)

//======================================================

let arr = [1, 2, 3, 4, 5, 6, 7]

function consoleEven(arr) {
  let data = arr.forEach((num) => (num))
  
  console.log(data)  
}
consoleEven(arr)