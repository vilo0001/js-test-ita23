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


}