const img = document.getElementById("wat1");

const span_block = document.querySelector(".span_nav");

const navmini= document.querySelector(".navmini");

img.addEventListener("mouseover", () =>{
    img.src = "images/tree3.png";
});

img.addEventListener("mouseout", () => {
    img.src = "images/Nature.jpg";
});

span_block.addEventListener( "click", () => {

    span_block.classList.toggle("active");

    navmini.classList.toggle("active");

})

document.addEventListener("DOMContentLoaded", function () {
    let navbar = document.querySelector(".nav0"); // Select navbar
    let lastScrollY = 0; // Track last scroll position

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50 && window.scrollY > lastScrollY) {
            // Move navbar down when scrolling down
            navbar.style.top = "3.5rem"; // Adjust as needed
        } else {
            // Reset navbar position when scrolling up
            navbar.style.top = "2.5rem"; // Original position
        }

        lastScrollY = window.scrollY; // Update last scroll position
    });
});