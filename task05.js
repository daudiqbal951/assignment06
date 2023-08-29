"use strict";
/*Given an array of temperatures in Celsius [0, 10, 20, 30, 40]
use the map method to create a new array where each temperature is converted to Fahrenheit
using the formula (Celsius * 9/5) + 32*/
var celcius = [0, 10, 20, 30, 40];
celcius = celcius.map((elem) => {
    elem = (elem * 9 / 5) + 32;
    return elem;
});
console.log(celcius);
