// function act asa a value . to keep function inside variable 

let add =function(a,b){
    return a+b
}
add (10,20)

setTimeout (function(){
    console.log('I will call after 5 second')
},5000)
var another = add 
console.log(another(7,8))

