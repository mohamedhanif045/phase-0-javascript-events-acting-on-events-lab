const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    // Get the current left position of the dodger
    const currentLeft = parseInt(dodger.style.left) || 0;
    
    // Define the step size for movement
    const step = 1;

    // Calculate the new left position after moving left
    const newLeft = currentLeft - step;

    // Ensure the dodger does not move beyond the left edge of the game field
    if (newLeft >= 0) {
        dodger.style.left = `${newLeft}px`;
    }
}

function moveDodgerRight() {
    // Get the current left position of the dodger
    const currentLeft = parseInt(dodger.style.left) || 0;
    
    // Define the step size for movement
    const step = 1;

    // Calculate the new left position after moving right
    const newLeft = currentLeft + step;

    // Ensure the dodger does not move beyond the right edge of the game field
    const gameFieldWidth = 400; // Assuming the game field width is 400px
    const dodgerWidth = 40; // Assuming the dodger width is 40px
    if (newLeft + dodgerWidth <= gameFieldWidth) {
        dodger.style.left = `${newLeft}px`;
    }
}

// Event listeners for left and right arrow keys
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});
