// This lesson we will cover the traverse. 
//An array touched from start to end is called array traverse. by using this we can automatically update all array.
/* 01. Normal Pattern
let arr = [3,54,56,7,57,7,77,33,32]
for ( let i = 0; i <arr.length; i++){
    console.log(arr[i])
}
*/

/*02. for increasing any array value 

let arr = [3,54,56,7,57,7,77,33,32]
for ( let i = 0; i <arr.length; i++){
    console.log(arr[i]+2)
} */

// For sum we can do this

let arr = [3,54,56,7,57,7,77,33,32]
let sum = 0 
for ( let i = 0; i <arr.length; i++){
    sum += arr [i]
}
console.log(sum)

// For printing even number we can do 

for ( let i = 0; i <arr.length; i++){
    if (arr[i]%2==0){
        console.log (arr[i])
    }
}

// For printing odd number we can do 

for ( let i = 0; i <arr.length; i++){
    if (arr[i]%2==1){
        console.log (arr[i])
    }
}
