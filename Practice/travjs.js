// const hi = document.querySelector('.hd');
// const items = document.getElementsByClassName('lists');
// console.log(items);
// items[1].textContent = 'Hehehe'
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'red'

//! All colors
// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = 'red'
// }

// const li = document.getElementsByTagName('li');
// console.log(li)

// const input = document.querySelector('input');
// input.value = 'Hello'
// const send = document.querySelector('input[type="submit"]')
// send.value = 'SEND'
// const items = document.querySelector('.lists')
// items.style.color = 'red'
// const lastitems = document.querySelector('.lists:last-child')
// lastitems.style.color = 'blue'

// const secItems = document.querySelector('.lists:nth-child(2')
// secItems.style.color = 'blue'

// const odd = document.querySelectorAll('li:nth-child(odd)')
// for (var i=0; i < odd.length; i++){
//     odd[i].style.backgroundColor  = 'gray '
// }

// const pare = document.querySelector('#item')

// console.log(pare.parentNode)
// pare.parentNode.style.backgroundColor = 'red'
// const header = document.querySelector('.header')
//! Chnage Color
// const click = document.getElementById('button').addEventListener('click', function(){
//     header.style.backgroundColor = 'red'
// });

function headerBlu(){
    header.style.backgroundColor = 'blue'
}

const change = document.getElementById('button').addEventListener('click', headerBlu);

// //! Add Value
// const forms = document.getElementById('AddForm');
// const itemList = document.getElementById('item');
// const filter = document.getElementById('filter');
// //form submit event
// forms.addEventListener('submit', AddItem);
// //del event
// itemList.addEventListener('click', removeItem)
// //filter event
// filter.addEventListener('keyup', filterItems);

// //add item
// function AddItem(e){
//     e.preventDefault();
//     //GET IMPUT VALUE
//     const newItem = document.getElementById('additm').value;

//     //create new li element
//     const li = document.createElement('li')
//     li.className = 'lists'
//     //add text node with input value
//     li.appendChild(document.createTextNode(newItem))
//     //create del button element
//     const deleteBtn = document.createElement('button')
//     //add classes to del button
//     deleteBtn.className = 'del'
//     //append text node
//     deleteBtn.appendChild(document.createTextNode('X'))


//     //append button to li
//     li.appendChild(deleteBtn)

//     //apend li to lise
//     itemList.appendChild(li)

// }

// function removeItem(e){
// if(e.target.classList.contains('del')){
//     if (confirm('Are you sure?')){
//         var li  = e.target.parentElement;
//         itemList.removeChild(li);
// }}}

// function filterItems(e){
//     //convert text to lowercase
//     const text = e.target.value.toLowerCase();
//     //get list
//     const items = itemList.getElementsByTagName('li')
//     //convert to array
//     Array.from(items).forEach(function(lists){
//         const itemName = lists.firstChild.textContent;
//         if (itemName.toLowerCase().indexOf(text) != -1){
//             lists.style.display = 'block'
//         }else{
//             lists.style.display = 'none'
//         }
//     });
// }