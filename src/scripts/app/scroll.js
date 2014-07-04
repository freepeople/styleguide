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
    this.direction = 'down';
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
 * @method compareOffsets
 */
Scroll.prototype.compareOffsets = function() {
    var self = this;
    var marginOffset =  parseInt($(self.trackOffset).eq(self.lastOffset).css('margin-top'));
    console.log(self.direction);
    if (self.direction === 'down') {
        if (self.currLoc > self.yOffsets[self.lastOffset]  + marginOffset) {
            self.lastOffset += 1;
            if (self.lastOffset === self.yOffsets.length) {
                self.lastOffset = self.yOffsets.length - 1;
            }
            self.highlight();
        }
    } else {
        // up
        if (self.currLoc < self.yOffsets[self.lastOffset] - marginOffset) {
            self.lastOffset -= 1;
            if (self.lastOffset < 0) {
                self.lastOffset = 0;
            }
            self.highlight();
        }
    }
};

/**
 * @public
 * @memberof module:Scroll#
 * @method calcDirection
 */
Scroll.prototype.calcDirection = function () {
    var self = this;
    var $window = $(window);
    if ($window.scrollTop() >= self.currLoc) {
        self.direction = 'down';
    } else {
        self.direction = 'up';
    }
    self.currLoc = $window.scrollTop();
    self.compareOffsets();
};

/**
 * @public
 * @memberof module:Scroll#
 * @method bindEvents
 */
Scroll.prototype.bindEvents = function() {
    var self = this;
    $(window).on('scroll', function () {
        self.calcDirection()
    });
    $('ul#sidebarID li a').on('click', function () {
        self.calcDirection();
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