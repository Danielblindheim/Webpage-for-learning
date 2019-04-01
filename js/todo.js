const navbarBtn = document.querySelector(".navbar__btn")
const navbarLinks = document.querySelector(".navbar__links")

navbarBtn.addEventListener("click", function() {
    let value = navbarLinks.classList.contains("navbar__collapse")

    if (value) {
        navbarLinks.classList.remove("navbar__collapse")
        navbarBtn.classList.remove("change")
    } else {
        navbarLinks.classList.add("navbar__collapse")
        navbarBtn.classList.add("change")
    }
})

// To-Do List from here

let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.getElementById("todo");
let item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    let dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);

    function deleteListItem() {
        li.classList.add("delete");
    }
}

function addListAfterClick() {
    if (inputLength() > 0 && input.value !== " ") {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13 && input.value !== " ") {
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);