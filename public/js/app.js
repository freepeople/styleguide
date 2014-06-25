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
Scroll.prototype.getOffsets = function () {
    var self = this;
    $('.' + self.trackOffset).each(function () {
        var pageOffsets = Math.floor($(this).offset().top);
        self.yOffsets.push(pageOffsets);
    });
}

/**
 * @public
 * @memberof module:Scroll#
 * @method compareOffsets
 */
Scroll.prototype.compareOffsets = function () {
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
}

/**
 * @public
 * @memberof module:Scroll#
 * @method bindEvents
 */
Scroll.prototype.bindEvents = function () {
    var self = this;
    $(window).on('scroll', function () {
        $this = $(this);
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

    $(".menu-icon").on("click", function () {
        $("body").addClass("move-left");
        $(".right-off-canvas-menu").addClass("move-left");
    });

    $(".exit-off-canvas").on("click", function () {
        $("body").removeClass("move-left");
        $(".right-off-canvas-menu").removeClass("move-left");
    });
}

/**
 * @public
 * @memberof module:Scroll#
 * @method init
 */
Scroll.prototype.init = function () {
    this.getOffsets();
    this.bindEvents();
}

/** @module Scroll */
module.exports = Scroll;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3N0eWxlZ3VpZGUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc3R5bGVndWlkZS9zcmMvc2NyaXB0cy9hcHAuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3N0eWxlZ3VpZGUvc3JjL3NjcmlwdHMvYXBwL3Njcm9sbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBTY3JvbGwgPSByZXF1aXJlKCcuL2FwcC9zY3JvbGwnKSgpO1xuU2Nyb2xsLmluaXQoKTsiLCIvKipcbiAqIEhpZ2hsaWdodCBzaWRlYmFyIG5hdiBlbGVtZW50IG9uIHNjcm9sbFxuICogQGNvbnN0cnVjdG9yXG4gKiBAZXhwb3J0cyBTY3JvbGxcbiAqIEBhbGlhcyBtb2R1bGU6U2Nyb2xsXG4gKi9cbmZ1bmN0aW9uIFNjcm9sbCgpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU2Nyb2xsKSkge1xuICAgICAgICByZXR1cm4gbmV3IFNjcm9sbCgpO1xuICAgIH1cbiAgICAvLyBhZGQgZ2xvYmFsIHZhcmlhYmxlIHRoYXQgcmVmZXJlbmNlcyB0aGUgY2xhc3NcbiAgICB0aGlzLnRyYWNrT2Zmc2V0ID0gJ3RyYWNrT2Zmc2V0JztcbiAgICB0aGlzLmhvdmVyZWQgPSAnaG92ZXJlZCc7XG4gICAgdGhpcy55T2Zmc2V0cyA9IFtdO1xuICAgIHRoaXMubGFzdE9mZnNldCA9IDA7XG4gICAgdGhpcy5jdXJyTG9jID0gMDtcbiAgICB0aGlzLmRpcmVjdGlvbiA9ICdkb3duJztcbn1cblxuLyoqXG4gKiBAcHVibGljXG4gKiBAbWVtYmVyb2YgbW9kdWxlOlNjcm9sbCNcbiAqIEBtZXRob2QgZ2V0T2Zmc2V0c1xuICovXG5TY3JvbGwucHJvdG90eXBlLmdldE9mZnNldHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICQoJy4nICsgc2VsZi50cmFja09mZnNldCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwYWdlT2Zmc2V0cyA9IE1hdGguZmxvb3IoJCh0aGlzKS5vZmZzZXQoKS50b3ApO1xuICAgICAgICBzZWxmLnlPZmZzZXRzLnB1c2gocGFnZU9mZnNldHMpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIEBwdWJsaWNcbiAqIEBtZW1iZXJvZiBtb2R1bGU6U2Nyb2xsI1xuICogQG1ldGhvZCBjb21wYXJlT2Zmc2V0c1xuICovXG5TY3JvbGwucHJvdG90eXBlLmNvbXBhcmVPZmZzZXRzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJMb2MgPiB0aGlzLnlPZmZzZXRzW3RoaXMubGFzdE9mZnNldF0pIHtcbiAgICAgICAgICAgIHRoaXMubGFzdE9mZnNldCArPSAxO1xuICAgICAgICAgICAgaWYgKHRoaXMubGFzdE9mZnNldCA+PSB0aGlzLnlPZmZzZXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdE9mZnNldCA9IHRoaXMueU9mZnNldHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHVwXG4gICAgICAgIGlmICh0aGlzLmN1cnJMb2MgPCB0aGlzLnlPZmZzZXRzW3RoaXMubGFzdE9mZnNldF0pIHtcbiAgICAgICAgICAgIHRoaXMubGFzdE9mZnNldCAtPSAxO1xuICAgICAgICAgICAgaWYgKHRoaXMubGFzdE9mZnNldCA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RPZmZzZXQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEBwdWJsaWNcbiAqIEBtZW1iZXJvZiBtb2R1bGU6U2Nyb2xsI1xuICogQG1ldGhvZCBiaW5kRXZlbnRzXG4gKi9cblNjcm9sbC5wcm90b3R5cGUuYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgaWYgKCR0aGlzLnNjcm9sbFRvcCgpID49IHNlbGYuY3VyckxvYykge1xuICAgICAgICAgICAgc2VsZi5kaXJlY3Rpb24gPSAnZG93bic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLmRpcmVjdGlvbiA9ICd1cCc7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5jdXJyTG9jID0gJHRoaXMuc2Nyb2xsVG9wKCk7XG4gICAgICAgIHNlbGYuY29tcGFyZU9mZnNldHMoKTtcbiAgICAgICAgdmFyIGNvcnJlY3RlZEluZGV4ID0gc2VsZi5sYXN0T2Zmc2V0ICsgMTtcbiAgICAgICAgJCgndWwjc2lkZWJhcklEIGxpJykucmVtb3ZlQ2xhc3Moc2VsZi5ob3ZlcmVkKTtcbiAgICAgICAgJCgndWwgbGk6bnRoLWNoaWxkKCcgKyBjb3JyZWN0ZWRJbmRleCArICcpJykuYWRkQ2xhc3Moc2VsZi5ob3ZlcmVkKTtcbiAgICB9KTtcblxuICAgICQoXCIubWVudS1pY29uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcIm1vdmUtbGVmdFwiKTtcbiAgICAgICAgJChcIi5yaWdodC1vZmYtY2FudmFzLW1lbnVcIikuYWRkQ2xhc3MoXCJtb3ZlLWxlZnRcIik7XG4gICAgfSk7XG5cbiAgICAkKFwiLmV4aXQtb2ZmLWNhbnZhc1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJtb3ZlLWxlZnRcIik7XG4gICAgICAgICQoXCIucmlnaHQtb2ZmLWNhbnZhcy1tZW51XCIpLnJlbW92ZUNsYXNzKFwibW92ZS1sZWZ0XCIpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIEBwdWJsaWNcbiAqIEBtZW1iZXJvZiBtb2R1bGU6U2Nyb2xsI1xuICogQG1ldGhvZCBpbml0XG4gKi9cblNjcm9sbC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmdldE9mZnNldHMoKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbn1cblxuLyoqIEBtb2R1bGUgU2Nyb2xsICovXG5tb2R1bGUuZXhwb3J0cyA9IFNjcm9sbDsiXX0=
