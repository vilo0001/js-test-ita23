function testBasics() {
    describe('01-basics - add function', () => {

        it('should return 5 when provided with 2 and 3', () => {
            expect(add(2, 3)).toBe(5);
        });

        it('should return 0 when provided with -1 and 1', () => {
            expect(add(-1, 1)).toBe(0);
        });

        it('should handle decimal numbers correctly', () => {
            expect(add(0.1, 0.2)).toBeCloseTo(0.3, 5);
        });

    });

    describe('01-basics - determineType function', () => {

        it('should return "string" for a string input', () => {
            expect(determineType("Hello")).toBe("string");
        });

        it('should return "number" for a numeric input', () => {
            expect(determineType(42)).toBe("number");
        });

        it('should return "object" for an object input', () => {
            expect(determineType({})).toBe("object");
        });

        it('should return "undefined" for an undefined input', () => {
            expect(determineType(undefined)).toBe("undefined");
        });

        it('should return "null" for a null input', () => {
            expect(determineType(null)).toBe("object"); // In JavaScript, `typeof null` returns "object".
        });
    });

    describe('01-basics - concatenateStrings function', () => {

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


}
