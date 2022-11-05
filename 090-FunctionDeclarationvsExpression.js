abc ()

function abc(){
    console.log('I am Function')

}

//newAbc() //if we call it here it will not work becauase this is a variable not a function

var newAbc = function (){
    console.log('I am New ABC Function')
}

newAbc() // it is working as a var and after declaration

// Creational phase 
// abc = ref 
//newAbc = undefined


// Executional phase 