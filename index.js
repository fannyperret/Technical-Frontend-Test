let showModal = function () {

    var modal = document.getElementById("congratulationModal");
    var badge = document.querySelector(".badge");

    modal.style.display = "flex";
    badge.style.backgroundColor = "#181A21";

}


let startTimer = function (duration, display) {

    var timer = duration, minutes, seconds;

    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

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

    setTimeout(() => {
        giveAStar();
        showModal();
    }, 3000);
};

let giveAStar = function () {

    let incrementStar = document.querySelector('#countingStars');
    let value = incrementStar.textContent;
    value = parseInt(value);

    incrementStar.textContent = value + 1;

}

let toggleButton = function () {

    var button = document.getElementById("toggleButton"),
        buttonsGroup = document.querySelector(".icons-container")
    ;

    button.addEventListener('click', () => {

        var iconArrow = document.querySelector(".arrow"),
            arrowTop = "top"
        ;

        if (buttonsGroup.style.visibility === 'visible' || buttonsGroup.style.visibility === "") {
            buttonsGroup.style.visibility = 'hidden'
        } else {
            buttonsGroup.style.visibility = 'visible';
        }

        if (iconArrow.src.includes(arrowTop)) {
            iconArrow.src = "assets/icon-arrow-bottom.svg";
        } else {
            iconArrow.src = "assets/icon-arrow-top.svg";
        }
        
    });

}

toggleButton();


