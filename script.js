function updateClock() {

    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    hoursElement.innerHTML = formatTime(hours);
    minutesElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);

    // Calculate percentage remaining to complete the hour
    let percentRemaining = 100 - ((60 - minutes) / 60 * 100);

    // Dibujar círculo de progreso
    const clockElement = document.querySelector(".clock");
    clockElement.style.backgroundImage = `conic-gradient(
    #333 ${percentRemaining}%, 
    #eee ${percentRemaining}% 100%
  )`;
}

setInterval(updateClock, 1000);


function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


