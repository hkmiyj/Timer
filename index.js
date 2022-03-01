// alert("Hello");
startingMinutes = window.prompt("Enter Time")

let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown,1000);
function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds; 
    
    /*if (seconds < 10){
        seconds='0'+seconds;
    }
    */
   
    if (time <0){
        document.getElementById("countdown").innerHTML = "Time Up !!";
        clearInterval(refreshIntervalId);
    }
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}