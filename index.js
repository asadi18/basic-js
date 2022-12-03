//alert('I am js file')


//This is from 107 


// var rect = {
//     width: 100,
//     height: 50,

//     draw: function(){
//         console.log('I am rectangle')
//         console.log('My width is '+ this.width)
//         console.log('My height is '+ this.height)
//     }
// }

// rect.draw()
// rect.height = 100
// rect.draw()


//--------------End --------------





// This is from Lesson - 108



// var rect = {
//     width: 100,
//     height: 50,

//     draw: function(){
//         console.log('I am rectangle')
//         console.log('My width is '+ this.width)
//         console.log('My height is '+ this.height)
//     },
//     printProperties : function(){
//         console.log('My width is '+ this.width)
//         console.log('My height is '+ this.height)
//     }
// }

// rect.draw()
// // rect.height = 100
// // rect.draw()

// function myFunc(){
//     console.log(this)
// }

// new myFunc()

// var another = {
//     width: 47,
//     height: 56,
//     print: rect.printProperties

// }
// console.log(another.print)
// another.print()



//----------END-------------




// This is from Lesson - 109 - Factory Pattern in Javascript


var createRect = function (width, height){


return {
    width: width,
    height: height,

    draw: function(){
        console.log('I am rectangle')
        console.log('My width is '+ this.width)
        console.log('My height is '+ this.height)
    },
    printProperties : function(){
        console.log('My width is '+ this.width)
        console.log('My height is '+ this.height)
    }
}
}

// var rect1 = createRect(10, 20)
// rect1.draw()

// var rect2 = createRect (4,5)
// rect2.draw()



//---------------END--------------



// This is from Lesson - 110 - Constructor Pattern


var Rectangle = function(width,height){
    this.width = width
    this.height = height

    this.draw = function(){
        console.log('I am rectangle')
        console.log('My width is '+ this.width)
        console.log('My height is '+ this.height)
    }
    this.heightprintProperties = function(){
        console.log('My width is '+ this.width)
        console.log('My height is '+ this.height)
    }
}

// var rect3 = new Rectangle(10,8)
// rect3.draw()



// 111 ----------- New Keyword  -----------------


function myNew(constructor){
    var obj = {}
    Object.setPrototypeOf(obj,constructor.prototype)
    var argsArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj,argsArray.slice(1))

    return obj
}
var rect4 = myNew (Rectangle,10,8)
rect4.draw()


//----------------END --------------------------




// ------ 112  Factory vs Constructor --------------

// All thory about this 


// ---------------- END -------------------------




//113------- Constructor Property--------



var str = new String('Hey')
console.log('This is our string '+ str)



//-----------------END------------------


//114------------- Functions Are Object --------------------

function test (){
    console.log('Something')
}
console.log(test.name, test.length)

var Rect = new Function('width', 'height', `this.width = width
this.height = height

this.draw = function(){
    console.log('I am rectangle')
    console.log('My width is '+ this.width)
    console.log('My height is '+ this.height)
}
this.heightprintProperties = function(){
    console.log('My width is '+ this.width)
    console.log('My height is '+ this.height)
}`)

var rect5 = new Rect(4,5)
console.log(rect5)


//-----------------------END--------------------




// -------------115 Bind, Call, Apply ---------------



function myFunc(c,d){
    console.log(this)
    console.log(this.a + this.b + c + d)
}

myFunc.call({a:40, b:25},10,5) // for call and apply
myFunc.apply({a:40, b:25}[10,5])

// For bind 

var testBind = myFunc.bind({a:7, b:3})
testBind(5,7)