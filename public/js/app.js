(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// right nav scroll highlighting
require('./app/scroll');
// dropdown module
require('./modules/dropdown/dropdown');

// highlight.js
require('./app/highlight.code.js');
},{"./app/highlight.code.js":2,"./app/scroll":3,"./modules/dropdown/dropdown":4}],2:[function(require,module,exports){
'use strict';
var $ = require('jquery');

$("pre[class|='lang']").each(function(i, block) {
    hljs.highlightBlock(block);
});
},{"jquery":"HlZQrA"}],3:[function(require,module,exports){
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
Scroll.prototype.highlight = function(index) {
    var self = this;
    $('ul#sidebarID li').removeClass(self.hovered);
    $('ul#sidebarID li').eq(index).addClass(self.hovered);
};

/**
 * @public
 * @memberof module:Scroll#
 * @method reachedTheBottom
 */
Scroll.prototype.reachedTheBottom = function() {
    return ($(window).scrollTop() + $(window).height() === $(document).height());
};

/**
 * @public
 * @memberof module:Scroll#
 * @method updateLastOffset
 */
Scroll.prototype.updateLastOffset = function() {
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
    self.highlight(index);
};

/**
 * @public
 * @memberof module:Scroll#
 * @method bindEvents
 */
Scroll.prototype.bindEvents = function() {
    var self = this;
    $(window).on('scroll', function() {
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
module.exports = new Scroll();
},{"jquery":"HlZQrA","lodash":"K2RcUv"}],4:[function(require,module,exports){
'use strict';

var $ = require('jquery');

var _dropDownSelector = '[data-toggle="dropdown"]';

var Dropdown = function(element, config) {
    this.element = element;
    this.parent = element.parent();
    this.bindEvents();
};

Dropdown.prototype = {
    constructor: Dropdown,
    toggleMenu: function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.closeMenu();
        var $parent = this.parent;
        var isOpened = $parent.hasClass('is-opened');
        if (!isOpened) {
            $parent.addClass('is-opened');
            return;
        }
        $parent.removeClass('is-opened');
    },
    itemSelected: function(e) {
        e.preventDefault();
        var $item = $(e.target);
        var getText = $item.text();
        this.element.text(getText);
        this.parent.removeClass('is-opened');
    },
    keydown: function(e) {
        // if not up or down arrows or escape
        // then exit out 
        if (!/(38|40|27)/.test(e.keyCode)) {
            return;
        }
        var isOpened = this.parent.hasClass('is-opened');
        if (!isOpened || (isOpened && e.keyCode === 27)) {
            return this.closeMenu();
        }
        var $items = this.parent.find('[role="menu"] li a');
        if (!$items.length) {
            return;
        }

        var index = $items.index($items.filter(':focus'));

        if (e.keyCode === 38 && index > 0) {
            index--;
        }
        if (e.keyCode === 40 && index < $items.length - 1) {
            index++;
        }
        // if index is -1, use the
        // bitwise operator and set it zero
        if (!~index) {
            index = 0;
        }

        $items.eq(index).trigger('focus');
    },
    closeMenu: function() {
        if (!this.parent.hasClass('is-opened')) {
            return this.parent.siblings().removeClass('is-opened');
        }
        this.parent.removeClass('is-opened');

    },
    bindEvents: function() {
        var $doc = $(document);
        this.element
            .on('click.toggleMenu.dropdown', $.proxy(this.toggleMenu, this))
            .closest('.dropdown')
            .on('click.item.dropdown', 'li', $.proxy(this.itemSelected, this));
        $doc
            .on('click.outside.dropdown', $.proxy(this.closeMenu, this))
            .on('keydown.dropdown', $.proxy(this.keydown, this));
    }
};

module.exports = $(_dropDownSelector).each(function() {
    return new Dropdown($(this));
});
},{"jquery":"HlZQrA"}]},{},[1])