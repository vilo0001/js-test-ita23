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
}