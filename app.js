let time = 0;
let timer;

function start() {

    if (timer) {
        return;
    }

    timer = setInterval(function () {

        time++;

        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time % 3600) / 60);
        let seconds = time % 60;

        document.getElementById("display").innerHTML =
            String(hours).padStart(2, '0') + ":" +
            String(minutes).padStart(2, '0') + ":" +
            String(seconds).padStart(2, '0');

    }, 1000);
}


function stop() {

    clearInterval(timer);

    timer = null;
}


function reset() {

    clearInterval(timer);

    timer = null;

    time = 0;

    document.getElementById("display").innerHTML = "00:00:00";

    document.getElementById("laps").innerHTML = "";
}


function addLap() {

    let li = document.createElement("li");

    li.innerHTML = document.getElementById("display").innerHTML;

    document.getElementById("laps").appendChild(li);
}