var wakeuptime;


function showCurrentTime() {
    var clock = document.getElementById('clock');
    if (!clock) {
        return;
    }

    var currentTime = new Date();
    clock.textContent = currentTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });
}
 
function changeImage() {
    var image = document.getElementById("wakeUpImage");
    if (!image) {
        image = document.createElement("img");
        image.id = "wakeUpImage";
        image.alt = "Wake-up image";
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZRL3S2XEccNBHdJfImi6ggPDWtHjVbJgEyzbfhEjDw&s=10";
        document.body.appendChild(image);
    }

    var selectedHour = Number(wakeuptime) % 24;
    var shouldShowImage = Number.isFinite(selectedHour) &&
        new Date().getHours() === selectedHour;
    image.style.display = shouldShowImage ? "block" : "none";
}
function updateClock() {
    var wakeUpSelector = document.getElementById("wakeUpTimeSelector");
    if (!wakeUpSelector) {
        return;
    }

    wakeuptime = wakeUpSelector.value;
    changeImage();
}


