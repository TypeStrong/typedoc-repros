"use strict";
/**
 * Docs for `foo` module
 * @packageDocumentation
 */
exports.__esModule = true;
exports.foo = void 0;
var bar_1 = require("bar");
/**
 * Docs for `foo` function.
 */
function foo() {
    console.log("foo");
    return (0, bar_1.bar)();
}
exports.foo = foo;
