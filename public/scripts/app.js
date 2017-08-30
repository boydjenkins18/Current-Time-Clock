(function() {
  let text = document.querySelector("p");

  function displayTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = " AM";

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (hours > 12) {
      meridian = " PM";
    }

    text.innerHTML = `${hours} : ${minutes} : ${seconds} ${meridian}`;
  }
  setInterval(displayTime, 1000);
})();
