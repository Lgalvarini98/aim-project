let buttonStart;
let redCircle;
let redCircleImg;


/* Iniciar Programa --------------------------------------------------------------------------------------------*/

function startProgram() {

    buttonStart = document.getElementById("buttonStart");

    redCircle = document.getElementById("sectionMatriz");
    redCircle.innerText = '';


    setInterval(function () {
        redCircle.innerHTML = "<img src=img/circle.png class=red--circle id=redCircleImg onclick=removeCircle()>"
    }, 1000)


    setInterval(function () {
        redCircle.removeChild(redCircle.firstChild);
    }, 2000);


}


/* Borrar circulo --------------------------------------------------------------------------------------------*/

function removeCircle() {

    removeCircleImg = document.getElementById("redCircleImg");
    redCircle = document.getElementById("sectionMatriz");
    redCircle.removeChild(redCircle.firstChild);

}

/* Countdown --------------------------------------------------------------------------------------------*/
const startingMinutes = 1;
let time = startingMinutes * 60;

function startCountdown() {
    setInterval(updateCountdown, 1000);
}

const countdownEl = document.getElementById('countdown');


function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}