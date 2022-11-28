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

var rect1 = createRect(10, 20)
rect1.draw()

var rect2 = createRect (4,5)
rect2.draw()



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

var rect3 = new Rectangle(10,8)
rect3.draw()

