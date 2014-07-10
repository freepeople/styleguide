'use strict';
// use tape with zombie 
var test = require('tape');
var Browser = require('zombie');

var browser = new Browser();

// Anything if we cannot resolve the request
// or a DOM issue catch it all here
browser.on("error", function(error) {
    console.error(error);
});


browser
    .visit("http://127.0.0.1:9000/")
    .then(function() {
        test('dropdowns exists', function(t) {
            t.ok(browser.query('.dropdowns'), 'one or more dropdowns on the page');
            t.end();
        });
    })
    .then(function() {
        test('dropdown menu', function(t) {
            t.plan(2);
            t.false(browser.query('.dropdown.is-opened'), 'dropdown hidden');
            browser.clickLink('.dropdown-trigger', function() {
                t.true(browser.query('.dropdown.is-opened'), 'dropdown visible');
            });
        });
    });