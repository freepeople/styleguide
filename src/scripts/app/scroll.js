'use strict';

var $ = require('jquery');
var _ = require('lodash');

/**
 * Highlight sidebar nav element on scroll
 * @constructor
 * @exports Scroll
 * @alias module:Scroll
 */
function Scroll() {
    if (!(this instanceof Scroll)) {
        return new Scroll();
    }
    // add global variable that references the class
    this.trackOffset = '[data-offset]';
    this.hovered = 'hovered';
    this.yOffsets = [];
    this.lastOffset = 0;
    this.currLoc = 0;
    // initialize
    this.init();
}

/**
 * @public
 * @memberof module:Scroll#
 * @method getOffsets
 */
Scroll.prototype.getOffsets = function() {
    var self = this;
    $(self.trackOffset).each(function() {
        // account for margin of element
        var pageOffsets = Math.floor($(this).offset().top);
        self.yOffsets.push(pageOffsets);
    });
};

/**
 * @public
 * @memberof module:Scroll#
 * @method highlight
 */
Scroll.prototype.highlight = function () {
    var self = this;
    $('ul#sidebarID li').removeClass(self.hovered);
    $('ul#sidebarID li').eq(self.lastOffset).addClass(self.hovered);
}

/**
 * @public
 * @memberof module:Scroll#
 * @method reachedTheBottom
 */
Scroll.prototype.reachedTheBottom = function () {
    return ($(window).scrollTop() + $(window).height() === $(document).height());
};

/**
 * @public
 * @memberof module:Scroll#
 * @method updateLastOffset
 */
Scroll.prototype.updateLastOffset = function () {
    // check scroll top
    var self = this;
    var index = 0;
    // loop through offsets to determine index
    for (var i = 0; i < self.yOffsets.length - 1; i += 1) {
        if (self.currLoc > self.yOffsets[i]) {
            index += 1;
        }
    }
    if (self.reachedTheBottom()) {
        index = self.yOffsets.length - 1;
    }
    self.lastOffset = index;
    self.highlight();
};

/**
 * @public
 * @memberof module:Scroll#
 * @method bindEvents
 */
Scroll.prototype.bindEvents = function() {
    var self = this;
    $(window).on('scroll', function () {
        self.currLoc = Math.floor($(this).scrollTop());
        self.updateLastOffset();
    });
};

/**
 * @public
 * @memberof module:Scroll#
 * @method init
 */
Scroll.prototype.init = function() {
    this.getOffsets();
    this.bindEvents();
};

/** @module Scroll */
module.exports = function () {
    return Scroll();
};