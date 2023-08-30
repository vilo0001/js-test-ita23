describe('printNumbers function', () => {
    it('should return numbers from 1 to 10', () => {
        let expectedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let result = returnNumbers();
        expect(result).toEqual(expectedNumbers);
    });
});

describe("Addition function", function() {
    it("should add two numbers correctly", function() {
        expect(add(1, 2)).toBe(3);
        expect(add(0, 0)).toBe(0);
        expect(add(-1, 1)).toBe(0);
    });
});