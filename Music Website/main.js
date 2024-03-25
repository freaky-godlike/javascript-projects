var song = document.getElementById('song');
var icon = document.getElementById('icon');
icon.onclick = function(){
    if(song.paused){
        song.play();
        icon.src = "./Assets/pause.png";
    }
    else{
        song.pause();
        icon.src = "./Assets/play.png";
    }
}