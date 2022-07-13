//1. Create Variables
const input = document.querySelector("input")

let ul = document.querySelector("ul")

const addBtn = document.querySelector("#btn")

const checkBtn = document.getElementsByClassName("shopping-item-toggle")

const deleteBtn = document.getElementsByClassName("shopping-item-delete");

// Event Listeners
addBtn.addEventListener('click', function(e){
	e.preventDefault();
	handleNewItemSubmit();
})


// Functions

function renderShoppingList() {
  // this function will be responsible for rendering the shopping list in
  // the DOM
	const item = document.createElement("li")
	
if(input.value != ""){
	item.innerHTML += `<span class="shopping-item">${input.value}</span>
<div class="shopping-item-controls">
<button class="shopping-item-toggle">
<span class="button-label">check</span></button>
<button class="shopping-item-delete">
<span class="button-label">delete</span></button></div>`;

    alert("A new item was added")
	return item
}
else {
	alert("You need to type an item")
}
}

function handleNewItemSubmit() {
  // this function will be responsible for when users add a new shopping list item
	const renderedItem = renderShoppingList();
	ul.appendChild(renderedItem)
	input.value = ""
	
    handleItemCheckClicked()
	handleDeleteItemClicked()
}


function handleItemCheckClicked() {
  // this function will be responsible for when users click the "check" button on
  // a shopping list item.
for (let btn of checkBtn) {
	btn.addEventListener('click', function(){
	let item = btn.parentElement.previousElementSibling.classList

	if (item.contains("shopping-item__checked")){ 
	 btn.innerText = "check"
	 item.remove("shopping-item__checked")				
 }else{
	 btn.innerText = "uncheck"
	 item.add("shopping-item__checked")	}
})
}
}

function handleDeleteItemClicked() {
  // this function will be responsible for when users want to delete a shopping list item
for (let btn of deleteBtn) {
	btn.addEventListener('click', function(){
let item = btn.parentElement.parentElement
	
	item.remove()
})
}
}

handleItemCheckClicked()
handleDeleteItemClicked()
