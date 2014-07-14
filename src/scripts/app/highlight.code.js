'use strict';
var $ = require('jquery');

$("pre[class|='lang']").each(function(i, block) {
    hljs.highlightBlock(block);
});