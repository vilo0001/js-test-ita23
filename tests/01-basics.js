function testBasics() {
    describe('01-basics - getCoolestTeacher', () => {

        it('should return the coolest teacher', () => {
            expect(getCoolestTeacher()).toBe("Benjamin");
        });
    });

    describe('01-basics - multiplyAndAdd', () => {
        it("should multiply the first two arguments and add the third", function () {
            const result = multiplyAndAdd(2, 3, 1);
            expect(result).toEqual(7);
        });

        it("should handle negative numbers", function () {
            const result = multiplyAndAdd(-1, 1, 2);
            expect(result).toEqual(1);
        });

        it("should handle zero values", function () {
            const result = multiplyAndAdd(0, 5, 2);
            expect(result).toEqual(2);
        });

        it("should return the third argument if first or second argument is 0", function () {
            const result = multiplyAndAdd(0, 0, 5);
            expect(result).toEqual(5);
        });
    });

    describe('01-basics - determineType', () => {
        it('should return "string" for a string input', () => {
            expect(determineType("Hello")).toBe("string");
        });

        it('should return "number" for a numeric input', () => {
            expect(determineType(42)).toBe("number");
        });

        it('should return "object" for an object input', () => {
            expect(determineType({})).toBe("object");
        });
    });

    describe('01-basics - concatenateStringsWithSpace', () => {
        it('should return "Hello World" when provided with "Hello" and "World"', () => {
            expect(concatenateStringsWithSpace("Hello", "World")).toBe("Hello World");
        });

        it('should return a single space when provided with two empty strings', () => {
            expect(concatenateStringsWithSpace("", "")).toBe(" ");
        });

        it('should handle strings with spaces correctly', () => {
            expect(concatenateStringsWithSpace("Hello ", " World")).toBe("Hello   World");
        });
    });

    describe('01-basics - toUpperCaseWithSmiley', () => {
        it('Should work on hello', () => {
            expect(toUpperCaseWithSmiley("hello")).toBe("HELLO:)");
        });

        it('Should work with empty string', () => {
            expect(toUpperCaseWithSmiley("")).toBe(":)");
        });

        it('Should work with world', () => {
            expect(toUpperCaseWithSmiley("World")).toBe("WORLD:)");
        });
    });

    describe("01-basics - repeatString", function () {
        it("should repeat the string the specified number of times with spaces", function () {
            expect(repeatString("Hello", 3)).toBe("Hello Hello Hello");
            expect(repeatString("Goodbye", 2)).toBe("Goodbye Goodbye");
        });

        it("should handle repeating the string once", function () {
            expect(repeatString("Test", 1)).toBe("Test");
        });

        it("should return an empty string when times is zero or negative", function () {
            expect(repeatString("Hello", 0)).toBe("");
            expect(repeatString("Hello", -1)).toBe("");
        });

        it("should handle empty string input", function () {
            expect(repeatString("", 3)).toBe("  "); // Returns spaces between empty strings
        });

        it("should not add extra spaces at the end", function () {
            const result = repeatString("Hello", 3);
            expect(result.endsWith(" ")).toBe(false);
        });
    });

}
