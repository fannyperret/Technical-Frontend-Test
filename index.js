let startTimer = function (duration, display) {

    var timer = duration, minutes, seconds;

    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        console.log(seconds);

        minutes = minutes < 10 ? + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);

}

window.onload = function () {
    var fiveMinutes = 60 * 5 + 2,
        display = document.querySelector('#counterTimer');
    startTimer(fiveMinutes, display);
};


let 