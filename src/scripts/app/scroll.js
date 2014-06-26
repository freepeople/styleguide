
'use strict';
var $ = require('jquery');
var _ = require('lodash');

console.log(_.isArray([1,2,3]));
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
    this.trackOffset = 'trackOffset';
    this.hovered = 'hovered';
    this.yOffsets = [];
    this.lastOffset = 0;
    this.currLoc = 0;
    this.direction = 'down';
}

/**
 * @public
 * @memberof module:Scroll#
 * @method getOffsets
 */
Scroll.prototype.getOffsets = function() {
    var self = this;
    $('.' + self.trackOffset).each(function() {
        var pageOffsets = Math.floor($(this).offset().top);
        self.yOffsets.push(pageOffsets);
    });
};

/**
 * @public
 * @memberof module:Scroll#
 * @method compareOffsets
 */
Scroll.prototype.compareOffsets = function() {
    if (this.direction === 'down') {
        if (this.currLoc > this.yOffsets[this.lastOffset]) {
            this.lastOffset += 1;
            if (this.lastOffset >= this.yOffsets.length) {
                this.lastOffset = this.yOffsets.length - 1;
            }
        }
    } else {
        // up
        if (this.currLoc < this.yOffsets[this.lastOffset]) {
            this.lastOffset -= 1;
            if (this.lastOffset < 0) {
                this.lastOffset = 0;
            }
        }
    }
};

/**
 * @public
 * @memberof module:Scroll#
 * @method bindEvents
 */
Scroll.prototype.bindEvents = function() {
    var self = this;
    $(window).on('scroll', function() {
        var $this = $(this);
        if ($this.scrollTop() >= self.currLoc) {
            self.direction = 'down';
        } else {
            self.direction = 'up';
        }
        self.currLoc = $this.scrollTop();
        self.compareOffsets();
        var correctedIndex = self.lastOffset + 1;
        $('ul#sidebarID li').removeClass(self.hovered);
        $('ul li:nth-child(' + correctedIndex + ')').addClass(self.hovered);
    });

    $(".menu-icon").on("click", function() {
        $("body").addClass("move-left");
        $(".right-off-canvas-menu").addClass("move-left");
    });

    $(".exit-off-canvas").on("click", function() {
        $("body").removeClass("move-left");
        $(".right-off-canvas-menu").removeClass("move-left");
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
module.exports = Scroll;