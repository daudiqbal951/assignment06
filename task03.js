"use strict";
/*Given an array of strings ["apple", "banana", "cherry", "date", "grape"],
use the filter method to create a new array containing only the fruits with more than 5 characters*/
var array = ["apple", "banana", "cherry", "date", "grape"];
array = array.filter((elem) => {
    if (elem.length > 5) {
        return elem;
    }
});
console.log(array);
