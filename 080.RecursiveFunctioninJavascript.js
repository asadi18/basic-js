function recur(n){
    if (n==0){
        return 
    }
    console.log("I am Calling")
    recur(n-1)

}
recur(5) // we can use it for any loop function print 

// lets see the sum function 

function sum (n){
    if (n==1){
        return 1
    }
    return n + sum(n-1)
}
console.log(sum(5))

// For factorial 

function fact(n){
    if (n==1){
        return 1
    }
    return n*fact(n-1)
}
console.log (fact (5))

// For array 

var arr = [1,2,3,4,5]

function sumarray(arr,lastIndex){
    if (lastIndex<0){
        return 0
    }
    return arr[lastIndex]+sumarray(arr,lastIndex -1)

}
console.log (sumarray(arr,arr.length-1))