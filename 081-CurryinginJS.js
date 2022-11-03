//For Normal Summetion we use 
function add(a,b,c){
    return a + b + c 
}
console.log(add (4,5,6))

// For CUrrying 

function currying (a){
    return function (b){
        return function (c){
            return a + b + c
        }
    }
    
}

var result = currying (5)(10)(15)
console.log(result)