let arr = [2,3,4,56,67,8,9,5,55,21]
/*Simple code Here 
let found = arr.find(function(value){
    return value == 67
})

let foundx = arr.findIndex(function(value){
    return value == 67

})

console.log (found,foundx)
*/
// Implementation 

function myFind (arr, cb){
    for (let i=0; i<arr.length; i++){
        if(cb(arr[i])){
            return arr [i]
             //For index number: return i
        }
    }
}

let result = myFind (arr,function(value){
    return value == 67
})
console.log (result)