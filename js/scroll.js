/**
 *
 * Highlight sidebar nav element on scroll
 *
 **/
(function ($) {
    // loop through all elements with class 'trackOffset'
    var frameNav = (function () {
        // add global variable that references the class
        var trackOffset = "trackOffset",
            hovered = "hovered",
            yOffsets = [],
            lastOffset = 0,
            currLoc = 0,
            direction = "down";
        function getOffsets(){
            $('.' + trackOffset).each(function (index, obj){
                var pageOffsets = $(obj).offset().top;
                yOffsets.push(Math.floor(pageOffsets));
                // console.log("the pages offsets are at: " + Math.floor(pageOffsets) + " pixels");
                // console.log(pageOffsets[index]);
            });
        }

        function compareOffsets() {
            // console.log("current page location is @ " + currLoc + " pixels");
            // console.log(yOffsets);
            // console.log("the current offset is " + lastOffset);
            //take y (yOffsets), compare it to lastOffset
            if (direction === 'down') {
                if (currLoc > yOffsets[lastOffset]) {
                    console.log('increment');
                    lastOffset += 1;
                    if (lastOffset >= yOffsets.length) {
                        lastOffset = yOffsets.length - 1;
                    }
                }
            }

            else {
                // up
                if (currLoc < yOffsets[lastOffset]) {
                    console.log('decrement');
                    lastOffset -= 1;

                    if (lastOffset < 0) {
                        lastOffset = 0;
                    }
                }
            }
        }

        function bindEvents() {
            getOffsets();
            $(window).on('scroll', function () {
                if ($(this).scrollTop() >= currLoc) {
                    direction = 'down';
                } else {
                    direction = 'up';
                }
                currLoc = $(this).scrollTop();
                compareOffsets();
                //TODO: create selector
                var correctedIndex = lastOffset + 1
                // 'ul li:nth-child(' + correctedIndex + ')'
                $('ul#sidebarID li').removeClass(hovered);
                $('ul li:nth-child(' + correctedIndex + ')').addClass(hovered);
                //console.log(currLoc);

            });

            $(".menu-icon").on("click", function() {
                $("body").addClass("move-left");
                // console.log('\n' + 'opened');
            });

            $(".exit-off-canvas").on("click", function() {
                $("body").removeClass("move-left");
                // console.log('closed');
            });

            $(".menu-icon").on("click", function() {
                $(".right-off-canvas-menu").addClass("move-left");
                // console.log('\n' + 'opened');
            });

            $(".exit-off-canvas").on("click", function() {
                $(".right-off-canvas-menu").removeClass("move-left");
                // console.log('closed');
            });


        }

        // public
        return {
              bindEvents: bindEvents
        };

    }());
    frameNav.bindEvents();
}(jQuery));
