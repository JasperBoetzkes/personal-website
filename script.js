// Add a click event to change the background color of the header
const header = document.querySelector('header');
header.addEventListener('click', function () {
    header.style.backgroundColor = getRandomColor();
});

// Function to generate a random HEX color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
