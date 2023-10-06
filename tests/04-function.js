function testFunction() {
    describe("04-functions - generateMessage", function () {

        it("should return a personalized message based on the user's name and age", function () {
            const message = generateMessage("Jack", 25);
            expect(message).toBe("Hey Jack, at 25, you are in the prime of your life!");
        });

        it("should handle non-standard names and ages", function () {
            const message = generateMessage("Chandler Bing", 30);
            expect(message).toBe("Hey Chandler Bing, at 30, you are in the prime of your life!");
        });

        it("should return a message even for low ages", function () {
            const message = generateMessage("Timmy", 5);
            expect(message).toBe("Hey Timmy, at 5, you are in the prime of your life!");
        });
    });

    describe("04-functions - titleCase", function () {
        it('should capitalize the first letter of each word in a sentence', function () {
            expect(titleCase('hello world')).toEqual('Hello World');
            expect(titleCase('test the title case function')).toEqual('Test The Title Case Function');
        });

        it('should handle a single word string', function () {
            expect(titleCase('hello')).toEqual('Hello');
        });

        it('should not change words that are already capitalized', function () {
            expect(titleCase('Hello World')).toEqual('Hello World');
        });

        it('should handle strings with special characters', function () {
            expect(titleCase('hello-world')).toEqual('Hello-World');
            expect(titleCase('test/title case')).toEqual('Test/Title Case');
        });

        it('should handle uppercase strings', function () {
            expect(titleCase('HELLO WORLD')).toEqual('HELLO WORLD');
        });
    });

    describe("04-functions sumOfRange", function () {
        it("should correctly calculate the sum of a range of positive numbers", function () {
            const result = sumOfRange(1, 4);
            expect(result).toEqual(10);
        });

        it("should correctly calculate the sum of a range of negative numbers", function () {
            const result = sumOfRange(-4, -1);
            expect(result).toEqual(-10);
        });
    });
}