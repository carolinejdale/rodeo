var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li"); // creates an element "li"
	li.appendChild(document.createTextNode(input.value)); // makes text from input field the "li" text
	ul.appendChild(li); // adds list item to unordered list
	input.value = ""; // resets text input field

	// ADD STRIKETHROUGH FOR COMPLETED LIST ITEMS
	// because it's in the function, it only adds it for new items
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
	// END ADD STRIKETHROUGH


	// ADD DELETE BUTTON FOR UNWANTED LIST ITEMS
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	// END ADD DELETE BUTTON


	// ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
	}
	// END ADD CLASS DELETE
}

function addListAfterClick(){
	if (inputLength() > 0) { // This ensures clicking while the input field is empty doesn't create a list item
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { // This checks that the user has pressed 'enter' or 'return'. 
		// '13' is the keycode of the Enter key. This can also be displayed as 'event.keyCode === 13'
		// For further info on jS keydown event keys, see keyjs.dev
		createListElement();
	} 
}
enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);