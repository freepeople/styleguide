'use strict';
// use tape with zombie 
var test = require('tape');
var Browser = require('zombie');

var browser = new Browser({
    debug: true
});

var dropDownExists = function() {
    test('dropdowns exists', function(t) {
        t.ok(browser.queryAll('.dropdowns').length > 0, 'one or more dropdowns on the page');
        t.end();
    });
};

var dropDownWorks = function() {
    test('dropdown menu', function(t) {
        t.plan(4);
        t.false(browser.query('.dropdown.is-opened'), 'hidden');
        browser
            .clickLink('.dropdown-trigger')
            .then(function() {
                t.true(browser.query('.dropdown.is-opened'), 'opened');
                return browser.clickLink('.dropdown-menu a:first-child');
            })
            .then(function() {
                t.equal(browser.query('.dropdown-trigger').textContent, 'Hello There', 'first dropdown item selected');
                t.false(browser.query('.dropdown.is-opened'), 'closed');
            });
    });
};


// Anything we cannot resolve such as the request
// or a DOM issue catch it all here
browser
    .on("error", function(error) {
        console.error(error);
    })
    .visit("https://rawgit.com/freepeople/styleguide/master/index.html")
    .then(dropDownExists)
    .then(dropDownWorks);