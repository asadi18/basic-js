// using parameter. 
/*
function add (a,b){
    
    console.log(a+b)
}
add (34,56)

// for doing sub 
function sub(x,y){
    console.log(x-y)
}
sub(45,40)*/

// print a lot of array using function ( Million and billion)
let arr1=[34,55,32,21]
let arr2=[31,98,93,29,33,2]
let arr3=[56,66,22,00,345,342,123]

function sumofArray(arr){
    let sum=0
    for (let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    console.log(sum)
}
sumofArray(arr1) // as this we can use the function anywhere and simplify our works
sumofArray(arr2)
sumofArray(arr3)