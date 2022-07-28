// Find out anything using this method
var arr =[3,4,5,6,7,54,67,13,71,45]
var find=67
var isFound=false
for (var i=0;i<arr.length;i++){
    if (arr [i]==find){
        console.log('Data Found at : '+i)
        isFound =true
        break;
    }
}
if (!isFound){
    console.log('Data Not Found')
}


