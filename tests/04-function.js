function testFunction() {
    describe("04-functions - generateMessage", function () {

        it("should return a personalized message based on the user's name and age", function () {
            const message = generateMessage("Jack", 25);
            expect(message).toBe("Hey Jack, happy 25 birthday!");
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

        it('should handle uppercase strings', function () {
            expect(titleCase('HELLO WORLD')).toEqual('HELLO WORLD');
        });
    });

    describe("04-functions - sumOfRange", function () {
        it("should correctly calculate the sum of a range of positive numbers", function () {
            const result = sumOfRange(1, 4);
            expect(result).toEqual(10);
        });

        it("should correctly calculate the sum of a range of negative numbers", function () {
            const result = sumOfRange(-4, -1);
            expect(result).toEqual(-10);
        });
    });


    describe("04-functions - generateAcronym", function () {
        it("should generate the correct acronym for 'Open 24 Hours a Day'", function () {
            expect(generateAcronym("Open 24 Hours a Day")).toBe("OHAD");
        });

        it("should generate the correct acronym for 'Federal Bureau of Investigation'", function () {
            expect(generateAcronym("Federal Bureau Investigation")).toBe("FBI");
        });

        it("should ignore words that contain numbers", function () {
            expect(generateAcronym("The 3 Little Pigs")).toBe("TLP");
            expect(generateAcronym("I love B2B marketing")).toBe("ILM");
            expect(generateAcronym("H2O is water")).toBe("IW");
        });

        it("should return an empty string when all words contain numbers", function () {
            expect(generateAcronym("123 456 789")).toBe("");
        });

        it("should handle sentences with punctuation correctly", function () {
            expect(generateAcronym("To be, or not to be: that is the question")).toBe("TBONTBTITQ");
        });

        it("should handle sentences with mixed case", function () {
            expect(generateAcronym("Don't Repeat Yourself")).toBe("DRY");
        });

        it("should handle words with special characters", function () {
            expect(generateAcronym("Node.js Is Awesome")).toBe("NIA");
        });

        it("should handle words that are numbers", function () {
            expect(generateAcronym("He won 1st place")).toBe("HWP");
        });

        it("should handle sentences with non-ASCII characters", function () {
            expect(generateAcronym("América del Sur")).toBe("ADS");
        });

        it("should handle words with apostrophes", function () {
            expect(generateAcronym("Don't Stop Believing")).toBe("DSB");
        });

        it("should handle words with special characters at the end", function () {
            expect(generateAcronym("Hello world!")).toBe("HW");
        });

        it("should handle sentences with mixed alphanumeric words", function () {
            expect(generateAcronym("Version 2.0 Update")).toBe("VU");
        });

        it("should handle words with symbols inside them", function () {
            expect(generateAcronym("E-mail is old-school")).toBe("EIO");
        });

        it("should generate an acronym in uppercase letters", function () {
            expect(generateAcronym("random access memory")).toBe("RAM");
        });

        it("should ignore words that are purely numbers", function () {
            expect(generateAcronym("In 2021 we achieved success")).toBe("IWAS");
        });
    });


    describe("04-functions - countConsonantsWeighted", function () {
        it("should correctly calculate the weighted consonant count for 'Hello World!'", function () {
            expect(countConsonantsWeighted("Hello World!")).toBe(9);
        });

        it("should correctly calculate the weighted consonant count for 'JavaScript'", function () {
            expect(countConsonantsWeighted("JavaScript")).toBe(9);
        });

        it("should return 0 for an empty string", function () {
            expect(countConsonantsWeighted("")).toBe(0);
        });

        it("should handle strings with only vowels", function () {
            expect(countConsonantsWeighted("AEIOUaeiou")).toBe(0);
        });

        it("should handle strings with no letters", function () {
            expect(countConsonantsWeighted("12345!@#$%")).toBe(0);
        });

        it("should correctly count consonants in mixed-case strings", function () {
            expect(countConsonantsWeighted("Consonants")).toBe(8);
        });

        it("should correctly calculate for a string with all consonants", function () {
            expect(countConsonantsWeighted("BCDFGHJKLMNPQRSTVWXYZ")).toBe(42); // All uppercase consonants
            expect(countConsonantsWeighted("bcdfghjklmnpqrstvwxyz")).toBe(21); // All lowercase consonants
        });

        it("should ignore non-alphabetic characters", function () {
            expect(countConsonantsWeighted("Hello, World! 123")).toBe(9);
        });

        it("should handle strings with only consonants", function () {
            expect(countConsonantsWeighted("BCDFG")).toBe(10); // All uppercase consonants
        });

        it("should handle strings with special characters and numbers interleaved", function () {
            expect(countConsonantsWeighted("H3ll0 W0rld!")).toBe(9);
        });

        it("should correctly handle strings with surrogate pairs", function () {
            expect(countConsonantsWeighted("𝔾𝕠𝕠𝕕 𝕁𝕠𝕓")).toBe(0); // Mathematical bold letters, not standard consonants
        });

        it("should not count vowel letters as consonants", function () {
            expect(countConsonantsWeighted("AEIOUaeiou")).toBe(0);
        });

        it("should handle strings with only whitespace", function () {
            expect(countConsonantsWeighted("     ")).toBe(0);
        });

    });

}
