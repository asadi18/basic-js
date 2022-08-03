// 

function sum(greet,name){
    function sayHi(){
        console.log(greet,name)
    }
    sayHi()
}

somthing('Good Morning','Asad Ishteaque')
//Something('Good Morning', 'Hey How')
function somthing (greet,name){
    function getFirstName(){
        if (name){
          
            return name.split(' ')[0]
            
        }else{
            return ' '
        }
    }
let message =getFirstName()
console.log(message)
}
somthing('Good Morning','Asad Ishteaque')