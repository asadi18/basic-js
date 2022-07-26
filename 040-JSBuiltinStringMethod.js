// concat any string
var a= 'I am '
var b='Asad Ishteaque'
var c=a.concat(b)
console.log(c)

//substract something

var d = c.substr(5,3) // see only puting one value
console.log(d)

//to see any character 
console.log(c.charAt(5))

//to check how it has started
console.log (c.startsWith('I am')) // also try with different value to check false

// we can how it has ended

console.log(c.endsWith('Ishteaque'))

//print anything upper case 
console.log(a.toUpperCase()) // cosole.log('some text or string'.toUpperCase())

//print lowercase
console.log(b.toLowerCase())

//Remove unwanted space
console.log('  jfjklsdfjk    '.trim)

//to split any word 
console.log(c.split(' '))