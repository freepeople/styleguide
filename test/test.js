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
        test('see if we have dropdowns', function(t) {
            t.ok(browser.query('.dropdowns'));
            t.end();
        });
    });