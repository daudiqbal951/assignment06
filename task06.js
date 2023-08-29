"use strict";
/*Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods
together to create a new array containing the doubled values of odd numbers*/
var number = [3, 6, 9, 12, 15, 18];
number = number.filter((elem) => {
    if (elem % 2 != 0) {
        return elem;
    }
});
number = number.map((elem) => {
    elem = 2 * elem;
    return elem;
});
console.log(number);
