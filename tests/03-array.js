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

    describe("03-array - removeValue", function () {
        it("should remove all instances of the value from the array", function () {
            const numbers = [1, 2, 3, 2, 4, 2, 5];
            const filtered = removeValue(numbers, 2);
            expect(filtered).toEqual([1, 3, 4, 5]);
        });

        it("should return an empty array when all elements are removed", function () {
            const numbers = [2, 2, 2];
            const filtered = removeValue(numbers, 2);
            expect(filtered).toEqual([]);
        });

        it("should return the original array when the value is not found", function () {
            const numbers = [1, 3, 4, 5];
            const filtered = removeValue(numbers, 2);
            expect(filtered).toEqual([1, 3, 4, 5]);
        });

        it("should handle an empty array", function () {
            const numbers = [];
            const filtered = removeValue(numbers, 2);
            expect(filtered).toEqual([]);
        });

        it("should remove values correctly when there are negative numbers", function () {
            const numbers = [-1, -2, -3, -2, -4];
            const filtered = removeValue(numbers, -2);
            expect(filtered).toEqual([-1, -3, -4]);
        });

        it("should remove values correctly when the value is zero", function () {
            const numbers = [0, 1, 0, 2, 0];
            const filtered = removeValue(numbers, 0);
            expect(filtered).toEqual([1, 2]);
        });

        it("should handle arrays with one element", function () {
            const numbers = [2];
            const filtered = removeValue(numbers, 2);
            expect(filtered).toEqual([]);
        });

        it("should not modify the original array", function () {
            const numbers = [1, 2, 3];
            const originalNumbers = numbers.slice();
            const filtered = removeValue(numbers, 2);
            expect(numbers).toEqual(originalNumbers);
        });

        it("should handle arrays with multiple data types", function () {
            const array = [1, '2', 2, '2', 3];
            const filtered = removeValue(array, 2);
            expect(filtered).toEqual([1, '2', '2', 3]);
        });

        it("should remove values strictly equal to the valueToRemove", function () {
            const array = [1, '1', 1];
            const filtered = removeValue(array, 1);
            expect(filtered).toEqual(['1']);
        });

        it("should handle removal of undefined values", function () {
            const array = [undefined, 1, undefined, 2];
            const filtered = removeValue(array, undefined);
            expect(filtered).toEqual([1, 2]);
        });

        it("should handle arrays with objects and remove specified object", function () {
            const obj = {a: 1};
            const array = [obj, {a: 1}, obj];
            const filtered = removeValue(array, obj);
            expect(filtered).toEqual([{a: 1}]);
        });

        it("should handle empty strings as values to remove", function () {
            const array = [1, '', 2, '', 3];
            const filtered = removeValue(array, '');
            expect(filtered).toEqual([1, 2, 3]);
        });

        it("should handle arrays with boolean values", function () {
            const array = [true, false, true, false];
            const filtered = removeValue(array, false);
            expect(filtered).toEqual([true, true]);
        });

        it("should handle arrays with duplicate values not to be removed", function () {
            const array = [1, 2, 2, 3, 2, 4];
            const filtered = removeValue(array, 5);
            expect(filtered).toEqual([1, 2, 2, 3, 2, 4]);
        });

        it("should handle arrays with functions", function () {
            const func = function () {
            };
            const array = [func, function () {
            }, func];
            const filtered = removeValue(array, func);
            expect(filtered.length).toBe(1);
            expect(typeof filtered[0]).toBe('function');
        });
    });

}