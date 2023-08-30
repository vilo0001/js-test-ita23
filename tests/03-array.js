function testArray() {
    describe('03-array - printNumbers function', () => {
        it('should return numbers from 1 to 10', () => {
            let expectedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            let result = returnNumbers();
            expect(result).toEqual(expectedNumbers);
        });
    });
}