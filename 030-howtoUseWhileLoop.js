// We will learn how to use while loop

// Example-1
/*
let i = 0
while (i<10){
    console.log('Asad')
    i++                 // This is also structure of writing while loop
}

*/
//Anothe way to write this code is 
//Example-2
let isRunning = true
while (isRunning) {
    let rand = Math.floor(Math.random() * 10 + 1)
    if (rand == 9) {
        console.log('This is working fine now')
        isRunning = false
    } else {
        console.log('Not Good ' + rand)

    }
}
