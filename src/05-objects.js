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
 * // john will be { name: 'John Doe', age: 30 }
 */
function findPersonByName(persons, name) {

}


/**
 * This function adds a property 'country' to the person object.
 *
 * @param {Object} person - The person object.
 * @param {string} country - The country where the person resides.
 * @returns {Object} - The updated person object with a 'country' property.
 *
 * Usage:
 * const updatedPerson = addCountryToPerson({ name: 'John Doe', age: 30, city: 'New York' }, 'USA');
 * // updatedPerson will be { name: 'John Doe', age: 30, city: 'New York', country: 'USA' }
 */
function addCountryToPerson(person, country) {

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

}
