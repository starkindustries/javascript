"use strict";

// Food is a base class

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Food = function () {
    function Food(name, protein, carbs, fat) {
        _classCallCheck(this, Food);

        this.name = name;
        this.protein = protein;
        this.carbs = carbs;
        this.fat = fat;
    }

    _createClass(Food, [{
        key: "toString",
        value: function toString() {
            return this.name + " | " + this.protein + "g P :: " + this.carbs + "g C :: " + this.fat + "g F";
        }
    }, {
        key: "print",
        value: function print() {
            console.log(this.toString());
        }
    }]);

    return Food;
}();

exports.default = Food;


var chicken_breast = new Food('Chicken Breast', 26, 0, 3.5);

chicken_breast.print(); // 'Chicken Breast | 26g P :: 0g C :: 3.5g F'
chicken_breast.print();
console.log(chicken_breast.protein); // 26 (LINE A)
console.log(chicken_breast.protein); // 26 (LINE A)
console.log(chicken_breast.protein); // 26 (LINE A)
console.log(chicken_breast.protein); // 26 (LINE A)
console.log("THIS IS COOL");
console.log("THIS IS SO SUPER COOL");
console.log("THIS IS SO SUPER COOL");
console.log("THIS IS SO SUPER COOL");