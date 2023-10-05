console.log("Welcome to Spotify");
let audioElement = new Audio("songs/1.mp3");
let progessbar = document.getElementById('myprogressbar').addEventListener('timeupdate' , function(){
    var currentTime = audioElement.currentTime;
    var duration = audioElement.duration;
    var progressPercentage = (currentTime / duration) * 100;
    progressBar.value = progressPercentage;
});

function runsong(){
    audioElement.play();
}