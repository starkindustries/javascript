"use strict";

var _Food = require("./Food");

var _Food2 = _interopRequireDefault(_Food);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("BOOM");
var food = new _Food2.default("Tofu", 11, 10, 2);
food.print();
console.log("It is working!");