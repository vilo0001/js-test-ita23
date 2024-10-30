/**
 * This function generates a birthday message based on the user's name and age.
 *
 * @param {string} name - Name of the user.
 * @param {number} age - Age of the user.
 * @returns {string} - Message for the user in this format: Hey NAME, happy YEAR birthday!
 *
 * Usage:
 * const message = generateMessage("Jack", 25); // "Hey Jack, happy 25 birthday!"
 */
function generateMessage(name, age) {
    return `Hey ${name}, happy ${age} birthday!`;
}

/**
 * This function capitalizes the first letter of every word in a sentence.
 *
 * @param {string} sentence - The sentence to be title cased.
 * @returns {string} - The title cased sentence.
 *
 * Usage:
 * const title = titleCase("hello world"); // title will be "Hello World"
 */
function titleCase(sentence) {
    const words = sentence.split(" ");
    let title = "";
    for (let i=0; i<words.length; i++) {
        const capitalFirstLetterWord = words[i][0].toUpperCase()+words[i].slice(1,words[i].length); // pls don't kill me Benjamin
        title += capitalFirstLetterWord;
        if(i !== words.length-1) title += " ";
    }
    return title;
}

/**
 * This function returns the sum of a range of numbers in an array.
 *
 * @param {number} start - The starting number.
 * @param {number} end - The ending number.
 * @returns {number} - The sum of the range.
 *
 * Usage:
 * const sum = sumOfRange(1, 4); // sum will be 10
 */
function sumOfRange(start, end) {
    let sum = 0;
    for(let i=start; i<=end; i++) {
        sum += i;
    }
    return sum;
}


/**
 * This function generates an acronym from the first letter of each word in a sentence, ignoring words with numbers.
 *
 * @param {string} sentence - The sentence to create an acronym from.
 * @returns {string} - The generated acronym.
 *
 * Usage:
 * const acronym = generateAcronym("Open 24 Hours a Day"); // acronym will be "OHAD"
 * const anotherAcronym = generateAcronym("Federal Bureau Investigation"); // anotherAcronym will be "FBI"
 */
function generateAcronym(sentence) {
    const words = sentence.split(" ");
    let acronym = "";
    for(let i=0; i<words.length; i++) {
        const hasNumber = /\d/.test(words[i]);
        if(!hasNumber) acronym += words[i][0].toUpperCase();
    }
    return acronym;
}


/**
 * This function counts consonants in a string, with lowercase counting as 1 and uppercase as 2.
 *
 * @param {string} str - The input string.
 * @returns {number} - The calculated "weighted" consonant count.
 *
 * Usage:
 * const consonantCount = countConsonantsWeighted("Hello World!"); // consonantCount will be 9
 * const anotherCount = countConsonantsWeighted("JavaScript"); // anotherCount will be 9
 */
function countConsonantsWeighted(str) {
    const vowels = ["A", "E", "I", "O", "U"];
    const trimmedString = str.trim();
    let count = 0;
    for (let i=0; i<trimmedString.length; i++) {
        const isChar = /[a-zA-Z]/.test(trimmedString[i]);
        const isVowel = vowels.includes(trimmedString[i].toUpperCase());
        if(!isVowel && isChar) {
            const isUppercase = trimmedString[i].toUpperCase() === trimmedString[i];
            if(isUppercase) count += 2;
            else count++;
        }
    }
    return count;
}
