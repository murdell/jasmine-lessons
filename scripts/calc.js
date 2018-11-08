
function fizzBuzz(num) {
    if((Number.isInteger(num/3)) && (Number.isInteger(num/5))) {
        return "FizzBuzz" ;}
    else if(Number.isInteger(num/5)) {
        return "Buzz" ;}
    else if(Number.isInteger(num/3)) {
        return "Fizz" ;}
    else 
    return num ;} 
