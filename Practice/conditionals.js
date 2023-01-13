const x = 1;

if (x === 10){
    console.log('x is equal to 10')
}
else if(x > 10){
    console.log('x is greater than 10')
}
else{
    console.log('x is less than 10')
}

//! turnary

const y = 12

const color = y > 10 ? 'red' : 'blue'

//! switch
switch(color){
    case 'red':
        console.log('The color is red')
        break
    case 'blue':
        console.log('The color is blue')
        break

    default:
        console.log('Color is not red or blue')
        break

}

