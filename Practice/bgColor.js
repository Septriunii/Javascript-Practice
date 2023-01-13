const box = document.querySelector('.color');

const yellow = document.getElementById('yellow');
const red = document.getElementById('red');
const blue = document.getElementById('blue');

yellow.addEventListener('click', changeToYellow)
blue.addEventListener('click', changeToBlue)
red.addEventListener('click', changeToRed)

function changeToYellow(){
    box.style.backgroundColor = 'yellow'
    box.innerHTML = 'Yellow'
}

function changeToBlue(){
    box.style.backgroundColor = 'blue'
    box.innerHTML = 'Blue'
    box.style.color = 'white'

}

function changeToRed(){
    box.style.backgroundColor = 'red'
    box.style.color = 'white'
    box.innerHTML = 'Red'
}