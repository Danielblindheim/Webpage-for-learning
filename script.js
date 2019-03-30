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

// Image slider

/*const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
*/
const container = document.querySelector(".images");

// const container = document.querySelector("body");

let counter = 0;

/*nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);*/

/*function nextSlide () {
    container.animate([{opacity: "0.01"}, {opacity: "1.0"}], {duration: 4000, fill: "forwards"});
    if (counter === 4) {
        counter = -1;
    }
    counter++;

    container.style.backgroundImage = `url(img/bcg-${counter}.jpg)`
}*/


function nextSlide () {
    container.animate([{opacity: "0.01"}, {opacity: "1.0"}], {duration: 4000, fill: "forwards"});
    if (counter === 4) {
        counter = -1;
    }
    counter++;

    container.style.backgroundImage = `url(img/bcg-${counter}.jpg)`
}

setInterval(nextSlide, 8000);

/*
function prevSlide () {
    container.animate([{opacity: "0.1"}, {opacity: "1.0"}], {duration: 1000, fill: "forwards"});
    if (counter === 0) {
        counter = 5;
    }
    counter--;

    container.style.backgroundImage = `url(img/bcg-${counter}.jpg)`
}
*/

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
    /*{
        name: "Leonardo Da Vinci",
        quote: "It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things."
    },*/
    {
        name: "Leo Tolstoy",
        quote: "If you want to be happy, be."
    }
    ]
    
    const quoteAuthor = document.querySelector("#quoteAuthor");
    const quote = document.querySelector("#quote");
    
    setInterval(displayQuote, 10000);


    /*function displayQuote () {
        let random = Math.floor(Math.random()*quotes.length);
        quoteAuthor.innerHTML = "-" + quotes[random].name;
        quote.innerHTML = quotes[random].quote;
    }*/

    let current = 0;

    function displayQuote () {
        if (current === 4) {
            current = -1;
        }
        current++;

        quoteAuthor.innerHTML = "-" + quotes[current].name;
        quote.innerHTML = quotes[current].quote;
    }

    displayQuote()