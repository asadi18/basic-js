// Example of it 


var rect = {
    width: 10, // these are the properties

    height: 20, // these are the properties

    calculateArea: function(){ // These functions are methods
        return this.width * this.height
    },
    calculateRange: function (){ // These functions are methods
        return 2 * (This.width + this.height)
    }
}

var area = rect.calculateArea() // In this way we just need to call rect. and all inside works will be done easily. 

var range = rect.calculateRange()