// this is where we will learn how to work with multidimensional array

var arr = [
    [45,67,63,34,64],
    [34,62,32,61,53],
    [35,64,31,62,43]
]

//console.log(arr)

// to check any perticular array we will use 
//console.log(arr[0][1]) // change the value to check how it works

// to traverse these arrays for 2 dimensional array we will use 2 for loop as nested for 3 we use 3 nested loop

for (var i =0; i <arr.length; i++){
    for (var j=0; j<arr.length; j++){
        console.log('Elements in'+i+':'+arr[i][j]+ '\n')
    }
}
