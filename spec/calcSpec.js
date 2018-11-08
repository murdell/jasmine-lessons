describe("Calculator", function() {
    var calc = new Calculator; // we need to create a new instance of the Calculator object
    beforeEach(function(){
        calc =  new Calculator; // this sets the running total back to zero for each calc done
    });

    describe("Addition function", function() {
        it("should return 42", function() {
//because the Calculator in calc.js only uses one number, to add 2 numbers we need to run the calc.add function twice
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42); // we expect the running value to be 42
        });

        it("should return 26", function() {
            calc.add(6.5);
            calc.add(19.5);
            expect(calc.value).toBe(26); // we expect the running value to be 26
        });

        it("2 numbers were not supplied", function() {
            spyOn(window, "alert");
            calc.add ("Hitchhikers", "Guide");
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number")
            
        });
    });
});

