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

/* Kode for quote generator */

const quotes = [
{
    name:"Stephen King",
    quote:"Get busy living or get busy dying."
},
{
    name: "John F. Kennedy",
    quote: "Those who dare to fail miserably can achieve greatly."
},
{
    name: "Abraham Lincoln",
    quote: "I'm a success today because I had a friend who believed in me and I didn't have the heart to let him down."
},
{
    name: "Leonardo Da Vinci",
    quote: "It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things."
},
{
    name: "Leo Tolstoy",
    quote: "If you want to be happy, be."
}
]

const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote () {
    let random = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = "-" + quotes[random].name;
    quote.innerHTML = quotes[random].quote;
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