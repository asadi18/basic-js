// to check any object
let obj = {
    x:45,
    y:56,
    z:55
}
console.log('x' in obj) // it defines if it object or not

// using for loop
for (let i in obj){
    console.log(i)
    console.log(i+':'+obj[i])
}