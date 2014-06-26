(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Scroll = require('./app/scroll')();
Scroll.init();
},{"./app/scroll":2}],2:[function(require,module,exports){
/**
 * Highlight sidebar nav element on scroll
 * @constructor
 * @exports Scroll
 * @alias module:Scroll
 */
'use strict';

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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvYW5ub3BvbHNreWQxL0Rlc2t0b3Avc3R5bGVndWlkZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2Fubm9wb2xza3lkMS9EZXNrdG9wL3N0eWxlZ3VpZGUvc3JjL3NjcmlwdHMvYXBwLmpzIiwiL1VzZXJzL2Fubm9wb2xza3lkMS9EZXNrdG9wL3N0eWxlZ3VpZGUvc3JjL3NjcmlwdHMvYXBwL3Njcm9sbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgU2Nyb2xsID0gcmVxdWlyZSgnLi9hcHAvc2Nyb2xsJykoKTtcblNjcm9sbC5pbml0KCk7IiwiLyoqXG4gKiBIaWdobGlnaHQgc2lkZWJhciBuYXYgZWxlbWVudCBvbiBzY3JvbGxcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4cG9ydHMgU2Nyb2xsXG4gKiBAYWxpYXMgbW9kdWxlOlNjcm9sbFxuICovXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFNjcm9sbCgpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU2Nyb2xsKSkge1xuICAgICAgICByZXR1cm4gbmV3IFNjcm9sbCgpO1xuICAgIH1cbiAgICAvLyBhZGQgZ2xvYmFsIHZhcmlhYmxlIHRoYXQgcmVmZXJlbmNlcyB0aGUgY2xhc3NcbiAgICB0aGlzLnRyYWNrT2Zmc2V0ID0gJ3RyYWNrT2Zmc2V0JztcbiAgICB0aGlzLmhvdmVyZWQgPSAnaG92ZXJlZCc7XG4gICAgdGhpcy55T2Zmc2V0cyA9IFtdO1xuICAgIHRoaXMubGFzdE9mZnNldCA9IDA7XG4gICAgdGhpcy5jdXJyTG9jID0gMDtcbiAgICB0aGlzLmRpcmVjdGlvbiA9ICdkb3duJztcbn1cblxuLyoqXG4gKiBAcHVibGljXG4gKiBAbWVtYmVyb2YgbW9kdWxlOlNjcm9sbCNcbiAqIEBtZXRob2QgZ2V0T2Zmc2V0c1xuICovXG5TY3JvbGwucHJvdG90eXBlLmdldE9mZnNldHMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgJCgnLicgKyBzZWxmLnRyYWNrT2Zmc2V0KS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcGFnZU9mZnNldHMgPSBNYXRoLmZsb29yKCQodGhpcykub2Zmc2V0KCkudG9wKTtcbiAgICAgICAgc2VsZi55T2Zmc2V0cy5wdXNoKHBhZ2VPZmZzZXRzKTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogQHB1YmxpY1xuICogQG1lbWJlcm9mIG1vZHVsZTpTY3JvbGwjXG4gKiBAbWV0aG9kIGNvbXBhcmVPZmZzZXRzXG4gKi9cblNjcm9sbC5wcm90b3R5cGUuY29tcGFyZU9mZnNldHMgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgICAgICBpZiAodGhpcy5jdXJyTG9jID4gdGhpcy55T2Zmc2V0c1t0aGlzLmxhc3RPZmZzZXRdKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RPZmZzZXQgKz0gMTtcbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RPZmZzZXQgPj0gdGhpcy55T2Zmc2V0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RPZmZzZXQgPSB0aGlzLnlPZmZzZXRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1cFxuICAgICAgICBpZiAodGhpcy5jdXJyTG9jIDwgdGhpcy55T2Zmc2V0c1t0aGlzLmxhc3RPZmZzZXRdKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RPZmZzZXQgLT0gMTtcbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RPZmZzZXQgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0T2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogQHB1YmxpY1xuICogQG1lbWJlcm9mIG1vZHVsZTpTY3JvbGwjXG4gKiBAbWV0aG9kIGJpbmRFdmVudHNcbiAqL1xuU2Nyb2xsLnByb3RvdHlwZS5iaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgIGlmICgkdGhpcy5zY3JvbGxUb3AoKSA+PSBzZWxmLmN1cnJMb2MpIHtcbiAgICAgICAgICAgIHNlbGYuZGlyZWN0aW9uID0gJ2Rvd24nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5kaXJlY3Rpb24gPSAndXAnO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuY3VyckxvYyA9ICR0aGlzLnNjcm9sbFRvcCgpO1xuICAgICAgICBzZWxmLmNvbXBhcmVPZmZzZXRzKCk7XG4gICAgICAgIHZhciBjb3JyZWN0ZWRJbmRleCA9IHNlbGYubGFzdE9mZnNldCArIDE7XG4gICAgICAgICQoJ3VsI3NpZGViYXJJRCBsaScpLnJlbW92ZUNsYXNzKHNlbGYuaG92ZXJlZCk7XG4gICAgICAgICQoJ3VsIGxpOm50aC1jaGlsZCgnICsgY29ycmVjdGVkSW5kZXggKyAnKScpLmFkZENsYXNzKHNlbGYuaG92ZXJlZCk7XG4gICAgfSk7XG5cbiAgICAkKFwiLm1lbnUtaWNvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcIm1vdmUtbGVmdFwiKTtcbiAgICAgICAgJChcIi5yaWdodC1vZmYtY2FudmFzLW1lbnVcIikuYWRkQ2xhc3MoXCJtb3ZlLWxlZnRcIik7XG4gICAgfSk7XG5cbiAgICAkKFwiLmV4aXQtb2ZmLWNhbnZhc1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIm1vdmUtbGVmdFwiKTtcbiAgICAgICAgJChcIi5yaWdodC1vZmYtY2FudmFzLW1lbnVcIikucmVtb3ZlQ2xhc3MoXCJtb3ZlLWxlZnRcIik7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIEBwdWJsaWNcbiAqIEBtZW1iZXJvZiBtb2R1bGU6U2Nyb2xsI1xuICogQG1ldGhvZCBpbml0XG4gKi9cblNjcm9sbC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2V0T2Zmc2V0cygpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xufTtcblxuLyoqIEBtb2R1bGUgU2Nyb2xsICovXG5tb2R1bGUuZXhwb3J0cyA9IFNjcm9sbDsiXX0=
