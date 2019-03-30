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