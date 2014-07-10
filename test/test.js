'use strict';
// use tape with zombie 
var test = require('tape');
var Browser = require('zombie');

var browser = new Browser({
    debug: true
});

// Anything we cannot resolve such as the request
// or a DOM issue catch it all here
browser.on("error", function(error) {
    console.error(error);
});


browser
    .visit("https://rawgit.com/freepeople/styleguide/master/index.html")
    .then(function() {
        test('dropdowns exists', function(t) {
            t.ok(browser.query('.dropdowns'), 'one or more dropdowns on the page');
            t.end();
        });
    })
    .then(function() {
        test('dropdown menu', function(t) {
            t.plan(3);
            // Dropdown should be hidden at first
            t.false(browser.query('.dropdown.is-opened'), 'dropdown hidden');
            // After first click dropdown should be opened
            // with a class named is-opened
            // after 2nd click dropdown should be closed again
            browser
                .clickLink('.dropdown-trigger')
                .then(function() {
                    t.true(browser.query('.dropdown.is-opened'), 'dropdown visible');
                    return browser.clickLink('.dropdown-trigger');
                })
                .then(function() {
                    t.false(browser.query('.dropdown.is-opened'), 'dropdown closed');
                });
        });
    });