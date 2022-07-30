var obj1 = {
    x: 34,
    y: 54
}

var obj2 = {
    x: 34,
    y: 54
}


// there is two way to compare it because it will not compare directly console.log(obj1 == obj2)
/*

if (obj1.x == obj2.x && obj2.y == obj1.y) {
    console.log(true)

} else {
    console.log(false)
} */

// another way is 

console.log(JSON.stringify(obj1)== JSON.stringify(obj2))