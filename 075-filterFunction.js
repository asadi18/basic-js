let arr = [1,2,3,4,5,6,7,8,9]


/*Simple procedure----
let ab = arr.filter(function (value){
    
    return value % 2 ==1
})
console.log(ab)
*/
//Implementation of filter
function myFilter(arr, cb){
    let storr=[]
    for (let i=0; i<arr.length; i++){
        var ab= cb(arr[i],i,arr)
        if (cb(arr[i],i,arr)){

            storr.push(arr[i])
        }
        
    }
    return storr
}

let qb = myFilter (arr,function(value){
    return value % 2 == 0
})

console.log(arr)
console.log(qb)
console.log(myFilter(arr,function(value){
    return value %2 ==1
}))
console.log(myFilter(arr,function(value){
    return value>4
}))