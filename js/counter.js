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

// Counter from here

let counter = document.querySelector(".counter");
const addCount = document.querySelector("#addCountBtn");
const lowerCount = document.querySelector("#lowerCountBtn")
const resetCount = document.querySelector("#resetCountBtn");

let count = 0;

addCount.addEventListener("click", incrementCounter);
lowerCount.addEventListener("click", decrementCounter);
resetCount.addEventListener("click", resetCounter);

function incrementCounter () {
    count++;
    counter.innerHTML = count;
    if (counter.innerHTML > 0) {
        /*counter.style.color = "#4caf50"*/
        counter.style.color = "#6baa75";
    } else if (counter.innerHTML === "0") {
        counter.style.color = "#FFF"
    }
    counter.animate([{opacity:"0.2"}, {opacity:"1.0"}], {duration: 500, fill: "forwards"})
}

function resetCounter () {
    count = 0;
    counter.innerHTML = count;
    counter.style.color = "#FFF"
    counter.animate([{opacity:"0.2"}, {opacity:"1.0"}], {duration: 500, fill: "forwards"})
}

function decrementCounter () {
    count--;
    counter.innerHTML = count;
    if (count < 0) {
        counter.style.color = "#F15025"
    } else if (counter.innerHTML === "0") {
        counter.style.color = "#FFF"
    }
    counter.animate([{opacity:"0.2"}, {opacity:"1.0"}], {duration: 500, fill: "forwards"})
}