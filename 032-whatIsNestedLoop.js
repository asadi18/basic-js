//A Loop is another loop is called nested loop
/* we will make a pattern like 

1
12
123
1234
12345

*/
let n=5 
for (var i=1; i<=n;i++){
    let result =' '
    for (let j=1; j<=i; j++){
        result +=j + ' '

    }
    console.log(result)
}

/*Another pattern is to print star is square 

*****
*****
*****
*****
*****

*/
console.log ('\n')
let nn=5  //change value to check the shape
for (ii=1; ii<=nn;ii++){
    let result2 =''
    for (let jj=1;jj<=nn;jj++){
        result2 +='* '
    }
    console.log(result2)

}