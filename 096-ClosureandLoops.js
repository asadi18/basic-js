
// for (var i = 1; i<=5; i++){
//     setTimeout (function(){
//         console.log(i)
//     },1000*i)
// }







// if we use let then we dont need IIFE -- This is in update version 


// for (let i = 1; i<=5; i++){
//     setTimeout (function(){
//         console.log(i)
//     },1000*i)
// }







// but for IIFE

for (var i = 1; i<=5; i++){
    (function(n){
        setTimeout (function(){
            console.log(n)
        },1000*n)

    }
)(i)
   
}