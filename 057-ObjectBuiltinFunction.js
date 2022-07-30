// 
var obj={
    x:40,
    y:30,
    z:88
}
console.log(Object.keys(obj))
console.log(Object.values(obj))
// to check both in one 
console.log(Object.entries(obj))

// to create any object 
let obj2 = Object.assign ({},obj)
obj2.x=45
console.log(obj)
console.log(obj2)