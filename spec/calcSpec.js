describe("FizzBuzz function", function() {
    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.
    beforeEach(function() {
        newnum = new fizzBuzz();
    });
    
    describe("Checks number", function() {
        // Specs are defined by calling the global Jasmine function it
        it("should exist", function() {
            // Expectations are built with the function expect which takes a value, called the actual.
            // Each matcher implements a boolean comparison between the actual value and the expected value.
            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
            expect(fizzBuzz).toBeDefined();
        });
        
        it("should return FIZZ (9)", function() {
            var result = fizzBuzz(9)
            expect(result).toBe("Fizz");
        });
        
        
        it("should return BUZZ (25)", function() {
            var result = fizzBuzz(25)
            expect(result).toBe("Buzz");
        });
        
        it("should return FIZZ-BUZZ (15)", function() {
            var result = fizzBuzz(15)
            expect(result).toBe("FizzBuzz");
        });
        
        it("should return number (16)", function() {
            var result = fizzBuzz(16)
            expect(result).toBe(16);
        }); 
    });
});