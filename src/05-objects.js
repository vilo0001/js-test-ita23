/**
 * This function returns an object that has the properties: 'name', 'age', and 'city'.
 *
 * @returns {Object} - An object with properties 'name', 'age', and 'city'.
 *
 * Usage:
 * const person = createPersonObject();
 * // person might be { name: 'John Doe', age: 30, city: 'New York' }
 */
function createPersonObject() {
    const person = {
        name: "Victor Lotz",
        age: 25,
        city: "Frederiksberg"
    };
    return person;
}


/**
 * This function returns the name of the given person object.
 *
 * @param {Object} person - The person object.
 * @returns {string} - The name of the person.
 *
 * Usage:
 * const personName = getPersonName({ name: 'John Doe', age: 30, city: 'New York' });
 * // personName will be 'John Doe'
 */
function getPersonName(person) {
    return person.name;
}


/**
 * This function finds a person from an array of persons based on their name.
 *
 * @param {Object[]} persons - Array of person objects.
 * @param {string} name - Name of the person to be found.
 * @returns {Object} - The person object with the given name, or null if not found.
 *
 * Usage:
 * const john = findPersonByName([{ name: 'John Doe', age: 30 }, { name: 'Jane Doe', age: 25 }], 'John Doe');
 * console.log(john); // Outputs { name: 'John Doe', age: 30 }
 *
 */
function findPersonByName(persons, name) {
    for (let i=0; i<persons.length; i++) {
        if(persons[i].name === name) return persons[i];
    }
    return null;
}


/**
 * This function calculates the total age of all persons in an array.
 *
 * @param {Object[]} persons - Array of person objects.
 * @returns {number} - The total age of all persons.
 *
 * Usage:
 * const totalAge = getTotalAge([{ name: 'John Doe', age: 30 }, { name: 'Jane Doe', age: 25 }]);
 * // totalAge will be 55
 */
function getTotalAge(persons) {
    let ageSum = 0;
    for (let i=0; i<persons.length; i++) {
        ageSum += persons[i].age;
    }
    return ageSum;
}


/**
 * This function checks for duplicate email addresses in an array of users.
 *
 * @param {Object[]} users - An array of user objects with an email property.
 * @returns {boolean} - True if duplicate emails are found, otherwise false.
 *
 * Usage:
 * const users = [
 *   { email: 'alice@example.com' },
 *   { email: 'bob@example.com' },
 *   { email: 'alice@example.com' }
 * ];
 * const hasDuplicates = checkForDuplicateEmails(users); // true
 */
function checkForDuplicateEmails(users) {
    let emails = [];
    for (let i=0; i<users.length; i++) {
        if(emails.includes(users[i].email)) return true;
        else emails.push(users[i].email);
    }
    return false;
}
