
//Basic code foreach 
/*
let sum = 0
arr.forEach(function(value, index, arr) {
console.log(value +'' +'is at' ,index , 'Number index')
sum+=value


})
console.log('\n', sum)
*/
let arr =[2,3,4,5,6]
function asadforEach(arr, cb){
    for (let i=0; i< arr.length; i++){
        cb(arr[i],i,arr)
    }
    
}
let sum = 0
asadforEach(arr, function(value,index,arr){
    console.log(value,index, arr)
    sum += value
})
console.log(sum)

asadforEach(arr,function(value,index,arr){
    arr[index] = value+5
})
console.log(arr)