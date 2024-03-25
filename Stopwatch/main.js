let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById('time');
let timer = null;
function StopWatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }
    let H = hours < 10 ? "0" + hours : hours;
    let M = minutes < 10 ? "0" + minutes : minutes;
    let S = seconds < 10 ? "0" + seconds : seconds;
    displayTime.innerHTML = H + " : " + M + " : " + S;
}
function WatchStart(){
    if(timer != null){
        clearInterval(timer);
    }
    timer = setInterval(StopWatch, 1000);
}
function WatchStop(){
    clearInterval(timer);
}
function WatchReset(){
    clearInterval(timer);
    let [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00 : 00 : 00";
}