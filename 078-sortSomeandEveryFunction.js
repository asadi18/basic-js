let persons = [
    {
        name: 'A',
        age: 24
    },
    {
        name: 'B',
        age: 19
    },
    {
        name: 'C',
        age: 26
    },
    {
        name: 'D',
        age: 21
    }
]


var arr = [4,6,7,8,5,-2,5,0,6,7,-8,6,5,-5,7,3,2,4,9,7]

//arr.sort()
//console.log(arr) // This method have some issues with the order on minus value. 

// thats why making a algorithm call back function for it

arr. sort(function (a,b){
    if (a> b){
        return 1
    }
    else if (a<b){
        return -1
    }
    else {
        return 0
    }
})
console.log (arr)

// Lets sort the person with age and other details 

persons.sort(function (a,b){
    if (a.age>b.age){
        return 1
    }
    else if (a.age<b.age){
        return -1
    }else {
        return 0
    }
})
console.log (persons)

// Every and some function -- it will return true if all number is true with condition otherwise false 

var arr2 = [4,6,7,8,5,-2,5,0,6,7,-8,6,5,-5,7,3,2,4,9,7]

var res = arr2.every(function (value){
    return value % 2 == 0
})
console.log (res)

var res2 = arr2.every (function (value){
    return value <= 0
})
console.log (res2) // we can apply more condition with this call back function 

// Some function -- only one value need present for returning true 


var res3 = arr2.some(function (value){
    return value % 2 == 0 
})
console.log (res3)

// By this way we can apply more conditions to get the results. 