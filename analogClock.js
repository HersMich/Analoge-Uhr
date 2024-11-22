// creating variables
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

// Update the clock every second
function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate rotation degrees
    const hoursDeg = (hours % 12) * 30 + minutes * 0.5; // 12-hour clock
    const minutesDeg = minutes * 6 + seconds * 0.1;
    const secondsDeg = seconds * 6;

    // Apply rotations
    hourHand.style.transform = `translateX(-50%) rotate(${hoursDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minutesDeg}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${secondsDeg}deg)`;
}

const clockFace = document.querySelector('.clock');

// Function for creating the hour markings
function createMarks() {
    for (let i = 0; i < 60; i++) {
        const mark = document.createElement('div');

        if (i % 5 === 0) {
            // Hour markers
            mark.classList.add('hour-mark');
        }
        mark.style.transform = `translateX(-50%) rotate(${i * 6}deg)`; // Rotate each mark by 6°
        clockFace.appendChild(mark);
    }
}

// Initializze the marks
createMarks();

// Initialize the clock
setInterval(updateClock, 1000);
updateClock();