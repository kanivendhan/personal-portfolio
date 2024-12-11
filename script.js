
document.addEventListener("DOMContentLoaded", () => {
const text = " It's Kani Vendhan";
const typewriter = document.getElementById("peru");

let index = 0;

const revealText = () => {
const intervalId = setInterval(() => {
if (index < text.length) {
  typewriter.textContent += text[index];
  index++;
} else {
  clearInterval(intervalId);
  setTimeout(() => {
    typewriter.textContent = ""; // Clear the text
    index = 0; // Reset index
    revealText(); // Start revealing again
       }, 1000);
}
}, 150);
};

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
  revealText();
  observer.unobserve(entry.target);
}
});
});

observer.observe(typewriter);
});

// ANIMATION TRIGGER
const animateMeElements = document.querySelectorAll("#aniimage");
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("slide-in-photo");
}
});
});

animateMeElements.forEach(element => {
observer.observe(element);
});

// ANIMATION TRIGGER 2
const animateMeElement = document.querySelectorAll("#animate-over");
const observers = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("slide-next-photo");
}
});
});

animateMeElement.forEach(element => {
observers.observe(element);
});
function showSidebar() {
  const show = document.getElementById('sidebar');
  show.style.display = 'block'

}

function hideSidebar() {
  const show = document.getElementById('sidebar');
  show.style.display = 'none'
}
