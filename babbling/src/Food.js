"use strict";

// Food is a base class
export default class Food {

    constructor (name, protein, carbs, fat) {
        this.name = name;
        this.protein = protein;
        this.carbs = carbs;
        this.fat = fat;
    }

    toString () {
        return `${this.name} | ${this.protein}g P :: ${this.carbs}g C :: ${this.fat}g F`
    }

    print () {
      console.log( this.toString() );
    }
}

const chicken_breast = new Food('Chicken Breast', 26, 0, 3.5);

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