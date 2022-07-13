// This program we will learn how to convert one data type to another data type 

var str ='1000'
var n = 10
console.log (str*n)
// we can try to add them with plus sine it will work for string 
console.log (str+n)

// Now we will convert stirng and multipy it

console.log (Number(str))
console.log (str*n)
//It is converted and working fine now.

// also we can parse it like 
console.log (Number.parseInt(str))

//to convert number to string 
console.log (n.toString())

//Everything will not convert here. if we try to convert infinity it will remain same
console.log(Number(Infinity))
console.log (String (Infinity))

//Boolean we can also try to convert it 

console.log (Boolean(Infinity))  //anything without zero will return true

// falsy value which will return false always 

console.log (Boolean (''))
console.log (Boolean (null)) 

console.log (Boolean(undefined)) 

console.log (Boolean(0)) 

console.log (Boolean(452)) 

console.log (Boolean('fasfdsfdsf')) 

//we can convert true in string 
console.log (true)

var x=true
console.log (x.toString())


// constractors to keep in mind
//String , Number , Boolean 
