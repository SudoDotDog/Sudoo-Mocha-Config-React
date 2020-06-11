/**
 * @author WMXPY
 * @namespace Mocha
 * @description Index
 */

const path = require('path');

module.exports = {
    extension: [
        "js",
        "ts",
        "jsx",
        "tsx"
    ],
    require: [
        path.join(__dirname, 'tshook.js'),
        path.join(__dirname, 'hook.js'),
    ],
}
