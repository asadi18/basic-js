// Higher order can written function inside another.

function add (a,b){
    return a+b
}

function manipulate(a,b,func){
    c=a+b
    d=a-b

    function multiply(){
        var m=func(a,b)
        return c*d*m
    }
    return multiply
}
var x = manipulate (3,4,add)
console.log(x())