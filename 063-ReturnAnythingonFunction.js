// use return at end and console is not use in production only test


function addAll(){
    let sum=0
    for (let j=0; j<arguments.length; j++){
        sum+=arguments[j]
    }
    
    return sum
}
let result = addAll(1,2,3)
console.log(result)

// if we use return at beginning then the operation will return from there and nothing will run