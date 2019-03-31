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

/* Kode for klokka */

function showTime () {

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let formatHours = convertFormat(hours)


hours = checkTime(hours)

hours = addZero(hours)
minutes = addZero(minutes)
seconds = addZero(seconds)
document.getElementById("clock").innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`
}

function convertFormat(time) {
    let format = "AM"
    if (time >= 12) {
        format = "PM"
    }

    return format;
}

function checkTime(time) {
    if (time > 12) {
        time = time -12;
    }
    if (time === 0) {
        time = 12;
    }
    return time
}

function addZero(time) {
    if (time < 10) {
        time = "0" + time;
    }
    return time
}

showTime()
setInterval(showTime, 1000)