let arr = [1,2,3,4,5]
/* Simple process
let sum = arr.reduce(function(prev,cur){
    return prev + cur
})
console.log(sum)
*/
//Current Process of Implementation
 
function myReduce(arr,cb,acc){
    for (i=0; i<arr.length; i++){
        acc = cb(acc, arr[i])
    }
    return acc
}

let sum = myReduce(arr, function (prev, cur){
    return prev + cur
},0)

let max = myReduce (arr, function (prev,cur){
    return Math.max(prev,cur)
},0)

let min = myReduce (arr, function (prev,cur){
    return Math.min(prev,cur)
},arr[0])

console.log(sum, max, min)