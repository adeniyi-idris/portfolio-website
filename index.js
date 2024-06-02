const dynamicText = document.querySelector(".hero_name h3 span")
const roles = ["Fullstack Web-Developer", "FreeLancer", "Data Analyst"]

let wordIndex = 0
let charIndex = 0
let isDeleting = false;

const typeEffect = () => {
    const currentWord = roles[wordIndex]
    const currentChar = currentWord.substring(0, charIndex)
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking")

    if(!isDeleting && charIndex < currentWord.length){
        // if condition is true, type the next character
        charIndex++
        setTimeout(typeEffect, 200)
    } else if(isDeleting && charIndex > 0){
        // if condition is true, remove the previous character
        charIndex--
        setTimeout(typeEffect, 100)
    } else {
        //if word is deleted then sitch to the next word
        isDeleting = !isDeleting
        dynamicText.classList.add("stop-blinking")
        wordIndex = !isDeleting ? (wordIndex + 1) % roles.length : wordIndex
        setTimeout(typeEffect, 1200)
    }

}

typeEffect()


document.querySelector('.navbar-nav').addEventListener('click', function (e) {
    e.preventDefault();
  
    if (e.target.classList.contains('nav-link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });


const sec2 = document.querySelector(".section2")
const sec3 = document.querySelector(".section3")
const sec4 = document.querySelector(".section4")
const sec5 = document.querySelector(".section5")
const sec6 = document.querySelector(".section6")
const heroSec = document.querySelector(".hero-section")

const secs = [ sec2, sec3, sec4, sec5, sec6]

//const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

//sectionObserver.observe(sec3)

secs.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});