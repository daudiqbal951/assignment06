/*Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
use the map and filter methods together to create a new array containing the squares of even numbers*/
var number:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
number=number.filter((elem)=>{
    if(elem%2==0){
        return elem
    }
}
)
number=number.map((elem)=>{
    elem=elem**2
    return elem
}
)
console.log(number)