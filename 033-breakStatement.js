// Break statement is necessary for loop to stop any loop
while (true){
    var rand = Math.floor (Math.random()*10+1)
    if (rand==9){
    console.log ('Asad')
    break;
    }
    else {
        console.log('You got '+rand)
    }
}