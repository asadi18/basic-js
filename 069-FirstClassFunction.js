// 6 types of first class function. here we will discuss 4 and remaining 2 in next file.

// 1. Function can be stored in a Variable

function add(a,b){
    return a+b
}
sum = add
console.log(sum(4,5))

// 2. Function can be stored in Array

// all code from above parts 

var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](3,5))

// 3. It can be stored in object
var obj = {
    oj:add
}
console.log(obj)
console.log(obj.oj(5,5))

// 4. Function can be created as needed

setTimeout (function(){
    console.log('I have written this......')

},100)