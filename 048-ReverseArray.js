// Reverse array in js
let arr = [12,45,623,22,13,24]

//using for loop
/*
for (let i=0; i<arr.length; i++){
    let temp = arr [i]
    arr [i]=arr [arr.length-1-i]
    arr [arr.length-1-i]=temp
    console.log(arr[i])
    
}
*/
// In one line we can do this 
console.log(arr.reverse())