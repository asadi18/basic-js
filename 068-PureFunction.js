// Example of pure function

function sqr(n){
   return n*n


}

console.log(sqr(3))

// Also there has some example of Non-Pure Function

var point = {
        x: 45, 
        y: 30

}
function pp(point){
point.x=100
point.y=200

}
pp(point)
console.log(point)