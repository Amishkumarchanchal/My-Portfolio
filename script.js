
const words = [
    "Frontend Developer",
    "Python Learner",
    "Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const element = document.getElementById("typing-text");

    if (!element) {
        console.log("Typing element not found!");
        return;
    }

    const currentWord = words[wordIndex];

    if (deleting === false) {

        element.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typingEffect, 1500);
            return;
        }

    } else {

        element.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typingEffect, deleting ? 60 : 120);
}

typingEffect();
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}