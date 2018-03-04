// include JQuery
window.jQuery = window.$ = require('jquery');

// include bootstrap js
let bootstrap = require('bootstrap-sass');

// include browsers detect
let browsers = require('./modules/browsers.js');
browsers();

// include filter
let filter = require('./modules/filter.js');
filter();