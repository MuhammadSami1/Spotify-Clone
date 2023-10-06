console.log("Welcome to Spotify");

document.addEventListener('DOMContentLoaded' , ()=>{

                //Variables 
let audioElement = new Audio("songs/1.mp3");
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');

 
                // Play/Pause click
masterplay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');        
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause'); 
        masterplay.classList.add('fa-circle-play');
    }
})

                // Progressbar
myprogressbar.addEventListener('timeupdate' , ()=>{
        console.log('timeupdate');
})



})


