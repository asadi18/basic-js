// Class is a object that can be used multiple time to reduce the work. we dont need to copy an object everytime.

class Rect{
    constructor(width,height){
        this.width = width
        this.height = height
    }
    calculateArea(){
        return this.width * this.height
    }
    calculateRange(){
        return 2 * ( this.width + this.height)
    }
}

var rect = new Rect(10,20)
var rect2 = new Rect(50,70)
var rect3= new Rect(13,12)


