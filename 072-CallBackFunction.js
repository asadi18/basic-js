function sample(a,b,cb){
    let c=a+b
    let d=a-b
    let result =cb(c,d)
    return result


}

function sum(a,b){
    return a+b
}

var result = sample(5,8,sum)
console.log (result)

//For Substraction

var result2 = sample(5,8,function(c,d){
    return c-d

})
console.log(result2)

//For Multiplication


var result3 = sample(5,8,function(c,d){
    return c*d

})
console.log(result3)


//For Division

var result4 = sample(5,8,function(c,d){
    return c/d

})
console.log(result4)