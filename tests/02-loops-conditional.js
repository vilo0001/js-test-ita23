function testLoopsConditionals() {
    describe("02-loops-conditional - isEven", function () {
        it("should return true when number is even", function () {
            expect(isEven(4)).toBe(true);
            expect(isEven(2)).toBe(true);
            expect(isEven(0)).toBe(true);
        });

        it("should return false when number is odd", function () {
            expect(isEven(7)).toBe(false);
            expect(isEven(1)).toBe(false);
        });

        it("should handle negative numbers", function () {
            expect(isEven(-2)).toBe(true);
            expect(isEven(-3)).toBe(false);
        });
    });

    describe("02-loops-conditional isWithinRange", function () {
        it("should return true when number is within the range", function () {
            expect(isWithinRange(5, 1, 10)).toBe(true);
            expect(isWithinRange(1, 1, 10)).toBe(true);
            expect(isWithinRange(10, 1, 10)).toBe(true);
        });

        it("should return false when number is out of the range", function () {
            expect(isWithinRange(15, 1, 10)).toBe(false);
            expect(isWithinRange(0, 1, 10)).toBe(false);
        });

        it("should handle negative numbers", function () {
            expect(isWithinRange(-5, -10, 0)).toBe(true);
            expect(isWithinRange(-15, -10, 0)).toBe(false);
        });
    });

    describe("02-loops-conditional stringContainsBa", function () {
        it("Should return correct boolean", function () {
            expect(stringContainsBa("banana")).toBe(true);
            expect(stringContainsBa("harbor")).toBe(false);
            expect(stringContainsBa("")).toBe(false);
            expect(stringContainsBa("habanana")).toBe(true);
        });
    });

    describe("02-loops-conditional sumOfDigitsWithPosition", function () {
        it("should calculate the correct sum for the example 1234", function () {
            expect(sumOfDigitsWithPosition(1234)).toBe(288); // 1^1 + 2^2 + 3^3 + 4^4 = 288
        });

        it("should calculate the correct sum for the example 52", function () {
            expect(sumOfDigitsWithPosition(52)).toBe(9); // 5^1 + 2^2 = 9
        });

        it("should handle single-digit numbers", function () {
            expect(sumOfDigitsWithPosition(5)).toBe(5); // 5^1 = 5
            expect(sumOfDigitsWithPosition(0)).toBe(0); // 0^1 = 0
        });

        it("should handle numbers with zeros", function () {
            expect(sumOfDigitsWithPosition(1023)).toBe(1 + 0 + 8 + 81); // 1^1 + 0^2 + 2^3 + 3^4 = 90
        });

        it("should handle numbers with leading zeros when input is a string", function () {
            expect(sumOfDigitsWithPosition('0123')).toBe(0 + 1 + 8 + 81); // '0'^1 + '1'^2 + '2'^3 + '3'^4 = 90
        });

        it("should handle very large numbers", function () {
            expect(sumOfDigitsWithPosition(9999)).toBe(9 + 81 + 729 + 6561); // Sum = 7380
        });
        it("should handle numbers as strings", function () {
            expect(sumOfDigitsWithPosition('1234')).toBe(288); // '1'^1 + '2'^2 + '3'^3 + '4'^4 = 288
        });

        it("should handle zero correctly", function () {
            expect(sumOfDigitsWithPosition(0)).toBe(0); // 0^1 = 0
        });


        it("should handle numbers with zeros in the middle", function () {
            expect(sumOfDigitsWithPosition(1002)).toBe(1 + 0 + 0 + 16); // 1^1 + 0^2 + 0^3 + 2^4 = 17
        });


        it("should handle inputs with exponent notation", function () {
            expect(sumOfDigitsWithPosition(1e3)).toBe(1 + 0 + 0 + 0); // Equivalent to 1000
        });
    });


}