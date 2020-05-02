describe("My whatCanIDrink function", function() {
    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.

    beforeEach(function() {
        drink = new whatCanIDrink;
    });

    describe("Checks age", function() {
       // Specs are defined by calling the global Jasmine function it
       it("Should exist", function() {
           //Expectations are built with the function expect which takes a value and the expected value.
           // Each matcher implements a boolean comparison between the actual value and the expected value.
           // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
           expect(whatCanIDrink).toBeDefined();
       });
       
       it("should return drink toddy when called as whatCanIDrink(13)", function() {
           var result = whatCanIDrink(13)
           expect(result).toBe("Drink Toddy");
       });

       it("should return drink coke when called as whatCanIDrink(17)", function() {
           var result = whatCanIDrink(17)
           expect(result).toBe("Drink Coke");
       });

       it("should retun drink beer when called as whatCanIDrink(20)", function() {
           var result = whatCanIDrink(20)
           expect(result).toBe("Drink Beer");
       });

       it("should return drink whiskey when called as whatCanIDrink(129)", function() {
           var result = whatCanIDrink(129)
           expect(result).toBe("Drink Whiskey");
       });

       it("should not be able to return a drink when called as whatCanIDrink(140)", function() {
           var result = whatCanIDrink(140)
           expect(result).toBe("Sorry. I can't tell what drink because that age is incorrect!");
       });

       it("should contain Drink when called as whatCanIDrink(17)", function() {
           var result = whatCanIDrink(10).indexOf("Drink");
           expect(result).not.toEqual(-1);
       });
    });
});