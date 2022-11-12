// Introduction to object oriented programming


// Example code for procedural programming where we need to code separate function 

var width = 10
var height = 20
function calculateArea(width,height){
    return width * height
}

function calculateRange(width,height){
    return 2* (width + height)
}

var area = calculateArea(width,height)
var range = calculateRange(width,height)


// For object oriented programming this come inside a packet and all function can be called easily with it. 

var rect = {
    width: 10,
    height: 20,

    calculateArea: function(){
        return this.width * this.height
    },
    calculateRange: function (){
        return 2 * (This.width + this.height)
    }
}

var area = rect.calculateArea() // In this way we just need to call rect. and all inside works will be done easily. 

var range = rect.calculateRange()