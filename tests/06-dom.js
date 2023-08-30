function testDOM() {
    describe("changeTextOnElement", function () {

        it('should change the text of the p tag with class change-me to "new text"', () => {
            const element = document.querySelector("p.change-me");
            // Before calling the function, ensure that the text is not "new text"
            expect(element.textContent).not.toBe('new text');

            // Call the function
            changeTextOnElement();

            // After calling the function, the text should be "new text"
            expect(element.textContent).toBe('new text');
        });
    });

    describe('addButtonClickListener', () => {
        it('should change button text when clicked', () => {
            const button = document.querySelector(".click")
            const testMessage = "Hello, World!";
            addButtonClickListener(testMessage);

            // Simulate button click
            button.click();

            // Check if console.log was called with the right message
            expect(button.textContent).toBe(testMessage);
        });
    });

    describe("changeBackgroundColor", function () {
        it("should change the background color of the given element", function () {
            changeBackgroundColor(testDiv, "red");
            expect(testDiv.style.backgroundColor).toBe("red");
        });
    });
}