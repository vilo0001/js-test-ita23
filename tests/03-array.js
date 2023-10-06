function testArray() {
    describe('03-array - returnNumbers', () => {
        it('should return an array of numbers counting up from start to finish', () => {
            expect(returnNumbers(2, 7)).toEqual([2, 3, 4, 5, 6, 7]);
            expect(returnNumbers(10, 11)).toEqual([10, 11]);
        });

        it('should return an array with a single number if start and finish are the same', () => {
            expect(returnNumbers(5, 5)).toEqual([5]);
        });
    });

    describe('03-array - sumArray', () => {
        // 1. Normal list of positive numbers
        it('should return the sum of all numbers in the array', function () {
            expect(sumArray([1, 2, 3, 4, 5])).toEqual(15);
            expect(sumArray([10, 20, 30])).toEqual(60);
        });

        // 2. List that includes negative numbers
        it('should handle arrays that include negative numbers', function () {
            expect(sumArray([-1, -2, 3])).toEqual(0);
            expect(sumArray([-1, -2, -3])).toEqual(-6);
            expect(sumArray([5, -3, 8, -10])).toEqual(0);
        });
    });

    describe('03-array - pushElement', () => {
        it("should add an element to the end of an array", function () {
            const arr = [1, 2, 3];
            const result = pushElement(arr, 4);
            expect(result).toEqual([1, 2, 3, 4]);
        });

        it("should add a string element to the end of an array", function () {
            const arr = ["apple", "banana", "cherry"];
            const result = pushElement(arr, "date");
            expect(result).toEqual(["apple", "banana", "cherry", "date"]);
        });

        it("should add an object to the end of an array", function () {
            const arr = [{name: "John"}, {name: "Jane"}];
            const result = pushElement(arr, {name: "Doe"});
            expect(result).toEqual([{name: "John"}, {name: "Jane"}, {name: "Doe"}]);
        });
    });
}