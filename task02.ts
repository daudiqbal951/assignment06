/*Given an array of numbers [1, 2, 3, 4, 5],
use the map method to create a new array where each number is multiplied by 2*/
var number:number[]=[1,2,3,4,5]
number=number.map((elem)=>{
    elem=2*elem
    return elem
}
)
console.log(number)