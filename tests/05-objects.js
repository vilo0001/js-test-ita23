function testObjects() {
    describe("05-objects - createPersonObject", function () {

        // Before each test, call the function to get a fresh object
        let person;
        beforeEach(function () {
            person = createPersonObject();
        });

        it("should return an object", function () {
            expect(typeof person).toBe('object');
        });

        it("should have a 'name' property", function () {
            expect(person.name).toBeDefined();
            expect(typeof person.name).toBe('string');
        });

        it("should have an 'age' property", function () {
            expect(person.age).toBeDefined();
            expect(typeof person.age).toBe('number');
        });

        it("should have a 'city' property", function () {
            expect(person.city).toBeDefined();
            expect(typeof person.city).toBe('string');
        });
    });

    describe("05-objects - getPersonName", function () {
        it("should return the name of the person", function () {
            const person = {name: 'John Doe', age: 30, city: 'New York'};
            const result = getPersonName(person);
            expect(result).toEqual('John Doe');
        });

    });

    describe("05-objects - findPersonByName", function () {
        let persons;

        beforeEach(() => {
            persons = [
                {name: 'John Doe', age: 30},
                {name: 'Jane Doe', age: 25},
                {name: 'Sam Smith', age: 20}
            ];
        });

        it("should return the correct person object when the name matches", () => {
            const result = findPersonByName(persons, 'John Doe');
            expect(result).toEqual({name: 'John Doe', age: 30});
        });
    });

    describe("05-objects - getTotalAge", function () {
        it("should return 0 when the array is empty", () => {
            const result = getTotalAge([]);
            expect(result).toEqual(0);
        });

        it("should return the correct total age for an array of one person", () => {
            const result = getTotalAge([{name: 'John Doe', age: 30}]);
            expect(result).toEqual(30);
        });

        it("should return the correct total age for an array of multiple persons", () => {
            const result = getTotalAge([{name: 'John Doe', age: 30}, {name: 'Jane Doe', age: 25}]);
            expect(result).toEqual(55);
        });
    });

    describe("05-objects - checkForDuplicateEmails", function () {
        it("should return true when duplicate emails are present", function () {
            const users = [
                {email: 'alice@example.com'},
                {email: 'bob@example.com'},
                {email: 'alice@example.com'}
            ];
            expect(checkForDuplicateEmails(users)).toBe(true);
        });

        it("should return false when all emails are unique", function () {
            const users = [
                {email: 'alice@example.com'},
                {email: 'bob@example.com'},
                {email: 'charlie@example.com'}
            ];
            expect(checkForDuplicateEmails(users)).toBe(false);
        });

        it("should handle an empty array and return false", function () {
            const users = [];
            expect(checkForDuplicateEmails(users)).toBe(false);
        });

        it("should handle an array with a single user and return false", function () {
            const users = [
                {email: 'alice@example.com'}
            ];
            expect(checkForDuplicateEmails(users)).toBe(false);
        });

        it("should consider emails different if they are actually different", function () {
            const users = [
                {email: 'user@example.com'},
                {email: 'user@example.co.uk'}
            ];
            expect(checkForDuplicateEmails(users)).toBe(false);
        });

        it("should handle emails with sub-addressing (plus addressing)", function () {
            const users = [
                {email: 'user+label@example.com'},
                {email: 'user@example.com'}
            ];
            expect(checkForDuplicateEmails(users)).toBe(false);
        });

        it("should handle emails with dots in the local part", function () {
            const users = [
                {email: 'user.name@example.com'},
                {email: 'username@example.com'}
            ];
            expect(checkForDuplicateEmails(users)).toBe(false);
        });

        it("should handle multiple duplicates", function () {
            const users = [
                {email: 'alice@example.com'},
                {email: 'bob@example.com'},
                {email: 'charlie@example.com'},
                {email: 'alice@example.com'},
                {email: 'bob@example.com'}
            ];
            expect(checkForDuplicateEmails(users)).toBe(true);
        });

        it("should handle emails with special characters", function () {
            const users = [
                {email: 'user.name+label@example.com'},
                {email: 'user_name@example.com'},
                {email: 'user-name@example.com'},
                {email: 'user.name+label@example.com'} // Duplicate
            ];
            expect(checkForDuplicateEmails(users)).toBe(true);
        });

        it("should treat emails with different subdomains as different", function () {
            const users = [
                {email: 'user@example.com'},
                {email: 'user@sub.example.com'}
            ];
            expect(checkForDuplicateEmails(users)).toBe(false);
        });
    });

}