//Functions are very important. as calculator we can use math functions here ALso

console.log('The value of E ' + Math.E)
console.log( 'The value of PI ' + Math.PI)

var n = 4.689 // also use 4.45
console.log (Math.abs(n))
console.log(Math.floor(n))

console.log(Math.ceil(n)) //it will show the above value if it is 4.3 it will make to 5
console.log(Math.round(n)) //if we change 4.689 to 4.45 it will show 4 because it is showing lower value 


//Check max and min with help of Math function

console.log(Math.max(400,56,765))
console.log(Math.min(876,435,46))

//For generating power , square or cube we can use 

console.log(Math.pow(2,3))
console.log(Math.pow(3,5))

console.log(Math.sqrt(9))
console.log(Math.sqrt(64))

//For Random Number we can use multiple time 
console.log(Math.random())

// we can also assign some value for this random function 
console.log(Math.round(Math.random()*50+1))