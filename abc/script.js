// Task 3: JavaScript Section

const colors = ["green", "blue", "red"];

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

const h5Elements = document.querySelectorAll("h5");

h5Elements.forEach(h5 => {
    h5.addEventListener("click", () => {
        h5Elements.forEach(el => {
            el.style.color = randomColor();
        });
    });
});
