require('lodash')
var webpackNumbers = require('./webpack-numbers.js')
var out = function() {
    process.stdout.write('This is the result for numtoword(1) === ' + webpackNumbers.numtoword(1)) // 注意要加default
}
out()

// origin:
// webpackNumbers = {
//     default: {
//         numtoword: function,
//         wordtonum: function
//     }
// }
// after using babel-plugin-add-module-exports
// webpackNumbers = {
//     numtoword: function,
//     wordtonum: function
// }