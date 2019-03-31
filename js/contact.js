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

// Klokke

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