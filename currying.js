var multiply = function(a){
    return function(b){
        return function(c){
            return a*b*c;
        }
    }
}


var product = multiply(3)(2)
result1=product(5);
result2=product(6);
result3=product(8)

console.log(result1, result2, result3);
