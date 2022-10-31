// function greet(msg){
//     function greetings (name){
//         return msg + ', '+name+ '!'
//     }
//     return greetings 
// }

// var gm = greet ('Good Morning')
// var gn = greet ('Good Night')
// var hello = greet ('Hello')
// // console.log (typeof gm)
// var msg = gm('Asad Ishteaque')
// var msg1 = gn('Asad Ishteaque')
// var msg2 = hello('Asad Ishteaque')


// console.log (msg)
// console.log (msg1)
// console.log (msg2)
// console.log (gm('Twinkle cats'))

// Lets See another example here with square function 

function base (b){
    return function (n){
        var result = 1 
        for (var i = 0; i < b; i++){
            result *=n
        }
        return result
    }
}
var base10 = base (10)
console.log (base10(2))

var base5 = base (5)
console.log (base5(3))
console.log (base5(6))
console.log (base5(8))

