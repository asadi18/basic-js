// Closure is when a function is able to remember and access its lexical scope even when that function execution outside its lexical scope

// able to remember and access its lexical scope 
// when that function execution outside its lexical scope 

// function test (){
//     var msg = 'I am learning lexical scope nad closure'
// function sayMsg(){
//     console.log(msg)
// }
// sayMsg()


// }

function test (){
    var msg = 'I am learning lexical scope nad closure'

return function (){
    console.log(msg)
}



}
var sayMsg = test()
sayMsg()