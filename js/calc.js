const navbarBtn = document.querySelector(".navbar__btn")
const navbarLinks = document.querySelector(".navbar__links")
const btns = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const equalBtn = document.querySelector(".btn-equal");
const clearBtn = document.querySelector(".btn-clear"); 

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

// Calculator from here

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        if (screen.value === "no input") {
            screen.value = "";
            let number = btns[i].getAttribute("data-num");
            screen.value += number;
        } else {
        let number = btns[i].getAttribute("data-num");
        screen.value += number
        }
    })
}

equalBtn.addEventListener("click", function() {

    if (screen.value === '') {
        //alert("input is empty")
        screen.value = "no input";
    } else if (screen.value === "no input") {
        screen.value = "";
    } else {
        let value = eval(screen.value);
        screen.value = value;
    }
})

clearBtn.addEventListener("click", function() {
    screen.value = '';
})