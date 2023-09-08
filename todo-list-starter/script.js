const todoList = ['Quit my job', 'Go get Donuts', 'Have a nap']
const todoStatus = [false, false, false, false]


function addTask() {
    // Get the item value
    const newTodo = document.getElementById('new-task-text').value

    // Push this tiem to my todoList
    todoList.push(newTodo)

    updateTodoList()
}


function updateTodoList() {
    const todoListElement = document.getElementById('todo-list')
    todoListElement.innerHTML = ''
    for(const [index, todo] of todoList.entries()) {
        const newTodoText = document.createElement('p')
        newTodoText.innerHTML = todo

        const markCompleteButton = document.createElement('input')
        markCompleteButton.type = 'button'
        markCompleteButton.onclick =function() {
            toggleComplete(index)
        }
        markCompleteButton.value = 'Complete'

        const newTodo = document.createElement('li')
        newTodo.appendChild(newTodoText)
        newTodo.appendChild(markCompleteButton)
        
        if (todoStatus[index]) {
            newTodo.classList.add('complete')
        }

        todoListElement.appendChild(newTodo)
    }
}


function createNewTodoItemElement(task, index) {}

function toggleComplete(index) {
    todoStatus[index] = true;
    updateTodoList()
}

updateTodoList()