const clock = document.getElementById("clock");

function updateClock() {
    clock.textContent = new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });
}

updateClock();
setInterval(updateClock, 1000);
