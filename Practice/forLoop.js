const todos = [
    {
        id:'1',
        text:'code',
        isCompleted: true
    },
    {
        id:'2',
        text:'eat',
        isCompleted: true
    },
    {
        id:'3',
        text:'sleep',
        isCompleted: false
    }
];

//! for loop
/*
for (let i = 0; i<todos.length; i++){
    console.log(todos[i].id)
}*/
/*
for (let todo of todos){
    console.log(todo.text)
}
*/

//! high order array methods
//for each
todos.forEach(function(todo){
    console.log(todo.id)
});

//!map makes array
const todoText = todos.map(function(todo){
    return todo.text;
});

console.log(todoText)

//!filter return specific category
const todoComplete = todos.filter(function(todo){
    return todo.isCompleted === true
})

console.log(todoComplete)

//! print text only
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true
}).map(function(todo){
    return todo.text
})

console.log(todoCompleted)

