testBasics();
testLoopsConditionals();
testArray();
testFunction();
testObjects();

// disabling randomized tests
jasmine.getEnv().configure({
    random: false
});

// Per default show the spec list and not the failures
jasmine.getEnv().addReporter({
    jasmineDone: function () {
        const htmlReporter = document.querySelector('.jasmine_html-reporter ');

        htmlReporter.classList.remove("jasmine-failure-list");
        htmlReporter.classList.add("jasmine-spec-list");
    }
});