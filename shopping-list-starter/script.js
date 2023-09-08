// function addItem() {
//     // get the value of the new item to add to the list
//     const newItem = document.getElementById('new-item-text')
//     const newItemValue = newItem.value

//     // add that item to our shopping list
//     const newListItem = document.createElement('li')
//     newListItem.innerHTML = newItemValue

//     const shoppingList = document.getElementById('shopping-list-items')
//     shoppingList.appendChild(newListItem)

//     // clear my input field
//     newItem.value = ''
// }

const shoppingListItems = ['Donuts', 'Cupcakes', 'Coffee']

function addItem() {
    shoppingListItems.push(document.getElementById('new-item-text').value)
    updateItems()
}

function updateItems() {
    const shoppingList = document.getElementById('shopping-list-items')
    shoppingList.innerHTML = ''
    for (let item of shoppingListItems) {
        const li = document.createElement('li')
        li.innerHTML = item
        shoppingList.appendChild(li)
    }
}

updateItems()