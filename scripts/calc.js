Calculator = function() {
    this.value = 0; };
//this will keep a running total – we are initialising it to zero


//every time a new add function is called if the number is a number then we are going to increment our running total, otherwise we are going to output an error

Calculator.prototype.add = function(number) {
    if (typeof(number) == "number") {
        this.value += number;
    } else {
        alert("Argument must be a number");
    }
};

