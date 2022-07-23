// There is three type of logical operator and or and not 
// AND && Example 
var a = 120;
var b = 30;
var c = 50;
var d = 35;
if (a > b && c > d) {
    console.log("A is grater than B and C is greater than D")
}
else {
    console.log("Condition is not matched")
}

// For OR || operator one true than it will work 

var aa = 120; 
var bb = 30;
var cc = 50;
var dd = 35;
if (aa > bb || cc > dd) { // only one condition needs to be true 
    console.log("A is grater than B and C is greater than D")
}
else {
    console.log("Condition is not matched")
}

//For NOT ! operation

var x=56;
var y=60;
var check =!(x>y) // here x is less than y and it is false thats why it is printing true as not operation
console.log (check)