// we will write a code for switch statement where we will find the day with date
 
var date = new Date ()

// if 0-sunday , 1-monday etc 

var today = date.getDay()

switch (today){

    case 0:
        console.log('Today is Sunday')
        break
    case 1:
        console.log('Today is Monday')
        break 
    case 2:
            console.log('Today is Thuesday')
            break
    case 3:
            console.log('Today is Wednesday')
            break  
    case 4:
                console.log('Today is Thursday')
                break
    case 5:
                console.log('Today is Friday')
                break
    case 6:
            console.log('Today is Saturday')
            break
    default: 
    console.log('Not a valid Number') //if we change switch (today) to anything not valid switch(8)etc




}


 

   