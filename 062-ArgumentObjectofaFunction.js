// this lesson will cover the argument topic

function test(){
    for (let i=0; i<arguments.length; i++)
    console.log(arguments[i])
}
test (20,30,25,2,2,2)

// another way to call argument after finishing the function

function addAll(){
    let sum=0
    for (let j=0; j<arguments.length; j++)
    sum+=arguments[j]
    console.log(sum)
}
addAll(2,4,5,66,62,324,242,2114,25,2)
addAll(1,2,3,4,5,6,7,8,9,10)
