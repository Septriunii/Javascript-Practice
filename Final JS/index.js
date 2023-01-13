const forms = document.getElementById('AddForm');
forms.addEventListener('submit', AddItem);
const itemList = document.getElementById('lists');
//del event
itemList.addEventListener('click', removeItem)

//add item
function AddItem(e){
    e.preventDefault();
    //GET IMPUT VALUE
    const newItem = document.getElementById('searchbar').value;
    //create new li element
    const li = document.createElement('li')
    li.className = 'list'
    //add text node with input value
    li.appendChild(document.createTextNode(newItem))
    //create del button element
    const deleteBtn = document.createElement('button')
    //add classes to del button
    deleteBtn.className = 'del'
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'))
    //append button to li
    li.appendChild(deleteBtn)
    //apend li to lise
    itemList.appendChild(li)
}


function removeItem(e){
    if(e.target.classList.contains('del')){
   
            var li  = e.target.parentElement;
            itemList.removeChild(li);
    }}