function displayTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = (30 * hh) + (mm / 2);
    let mRotation = (6 * mm);
    let sRotation = (6 * ss);

    // Get elements using class name instead of IDs
    let hour = document.querySelector(".hand#hour");
    let minutes = document.querySelector(".hand#min");
    let seconds = document.querySelector(".hand#second");

    hour.style.transform = `rotate(${hRotation}deg)`;
    minutes.style.transform = `rotate(${mRotation}deg)`;
    seconds.style.transform = `rotate(${sRotation}deg)`;
}

// Call displayTime every second
setInterval(displayTime, 1000);

// Call displayTime once initially
displayTime();
