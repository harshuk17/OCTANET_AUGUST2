const input = document.querySelector("input");
const button = document.querySelector("button");
const todos = document.querySelector("#todos");
const image = document.querySelector("#image");
const enteredTask = document.querySelector("#enteredTask");

const inputHandler = function() {
 
    if (image) {
        image.remove();
    }

    // Get the input value and trim any extra spaces
    const inputContent = input.value.trim();

   
    if (inputContent.length === 0) {
        return;
    }
    let subheading = document.querySelector(".subheading");
    if (!subheading) {
        // Create the subheading if it doesn't exist
        subheading = document.createElement("div");
        subheading.className = "subheading";
        subheading.textContent = "Entered Task";
        enteredTask.prepend(subheading);
    }

   
    const divAround = document.createElement("div");
    divAround.className = "task-container";

    
    const newElement = document.createElement("li");
    newElement.innerText = inputContent;

    const editButton = document.createElement("i");
    editButton.className ="fa-solid fa-pen-to-square edit";
    
    const deleteButton = document.createElement("i");
    deleteButton.className = "fa-solid fa-xmark ";



    // Append the newElement and deleteButton to divAround
    const iconsContainer = document.createElement("div");
    iconsContainer.className = "icons-container";
    iconsContainer.appendChild(editButton);
    iconsContainer.appendChild(deleteButton);

    divAround.appendChild(newElement);
    divAround.appendChild(iconsContainer);


    // Append the divAround to the todos list
    todos.appendChild(divAround);

    // Clear the input field
    input.value = "";

    editButton.addEventListener("click", function() {
        const newText = prompt("Edit your task:", newElement.innerText);
        if (newText !== null && newText.trim() !== "") {
            newElement.innerText = newText.trim();
        }
    });

    // Add an event listener to the delete button to remove the task
    deleteButton.addEventListener("click", function() {
        divAround.remove();
        if(todos.children.length===0){
            if(subheading){
                subheading.remove();

            }
        }
    });
    if(li==0){
        subheading.remove();
        
    }
};

// Attach the inputHandler function to the button's click event
button.addEventListener("click", inputHandler);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        inputHandler();
    }
});
