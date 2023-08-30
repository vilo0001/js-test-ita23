function testLoopsConditionals() {
    describe("02-loops-conditional - isEven", function() {
        it("should return true when number is even", function() {
            expect(isEven(4)).toBe(true);
            expect(isEven(2)).toBe(true);
            expect(isEven(0)).toBe(true);
        });

        it("should return false when number is odd", function() {
            expect(isEven(7)).toBe(false);
            expect(isEven(1)).toBe(false);
        });

        it("should handle negative numbers", function() {
            expect(isEven(-2)).toBe(true);
            expect(isEven(-3)).toBe(false);
        });
    });

    describe("02-loops-conditional isWithinRange", function() {
        it("should return true when number is within the range", function() {
            expect(isWithinRange(5, 1, 10)).toBe(true);
            expect(isWithinRange(1, 1, 10)).toBe(true);
            expect(isWithinRange(10, 1, 10)).toBe(true);
        });

        it("should return false when number is out of the range", function() {
            expect(isWithinRange(15, 1, 10)).toBe(false);
            expect(isWithinRange(0, 1, 10)).toBe(false);
        });

        it("should handle negative numbers", function() {
            expect(isWithinRange(-5, -10, 0)).toBe(true);
            expect(isWithinRange(-15, -10, 0)).toBe(false);
        });
    });

    describe("02-loops-conditional reverseString", function() {
        it("should return the reversed string", function() {
            expect(reverseString('hello')).toBe('olleh');
            expect(reverseString('world')).toBe('dlrow');
        });

        it("should handle empty strings", function() {
            expect(reverseString('')).toBe('');
        });

        it("should handle strings with spaces", function() {
            expect(reverseString('hello world')).toBe('dlrow olleh');
        });

        it("should handle strings with special characters", function() {
            expect(reverseString('!hello, world!')).toBe('!dlrow ,olleh!');
        });
    });
}