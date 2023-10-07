console.log("Welcome to Spotify");

document.addEventListener('DOMContentLoaded' , ()=>{

                //Variables 
let audioElement = new Audio("songs/1.mp3");
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');

 
                // Play/Pause click
masterplay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        gif.style.opacity = "1";
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');        
    }
    else {
        audioElement.pause();
        gif.style.opacity="0";
        masterplay.classList.remove('fa-circle-pause'); 
        masterplay.classList.add('fa-circle-play');
    }
})

                // Progressbar
audioElement.addEventListener('timeupdate' , ()=>{
    console.log('timeupdate');
    // updata seekbar
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);    
    console.log('progress');
    myprogressbar.value = progress; 
})



})


