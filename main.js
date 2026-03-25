// Dark Mode
document.getElementById("darkToggle").onclick = () => {
    document.body.classList.toggle("dark");
};

// Slider Auto
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");

    index++;
    if (index >= slides.length) index = 0;
}

setInterval(showSlide, 3000);