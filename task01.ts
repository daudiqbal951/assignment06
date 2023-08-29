//Write a program that uses filter to remove all negative numbers from an array of numbers
var number:number[]= [2,5,-5,-6,-4,-3,1,-21,32,-3]
number=number.filter((elem)=>{
    if(elem>=0){
        return elem
    }
}
)
console.log(number)