//!Single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

//!Multiple element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('li'));

// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item))

// const ul = document.querySelector('.items')

// ul.remove();
// ul.lastElementChild.remove()
// ul.firstElementChild.textContent = 'hi'
// ul.children[1].innerHTML = 'hello'
// ul.lastElementChild.innerHTML = '<h1>hehehe</h1>'
// const btn = document.querySelector('.btn');
// btn.style.background = 'black'

// const btn = document.querySelector('.btn');

// btn.addEventListener( 'mouseout', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = 'black';
//     //document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hihihihi</h1>'
// })


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document .querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.vavlue==='' || emailInput.value===''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(()=>msg.remove(),3000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value
        } : ${emailInput.value}`));
        userList.appendChild(li);
         //clear field
        nameInput.value = ''
        emailInput.value = ''
    }
}