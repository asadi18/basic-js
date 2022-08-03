// in function no local variable works 

let a ='abc'
function x(){
    //let a=34
    function y(){
        let a =10
        console.log (a)
    }
    console.log(a)
}
//y()
x()

// another program

function test (n){
    function a(){
        return n%3==0
    }
    function b(){
        return n%5== 0
    }
    if (a() && b()){
        console.log(n+' is divisible by both 3 & 5')

    }else{
       console.log(n+' Not divisible ')

    }
}
test (15)

test (30)
test (12)