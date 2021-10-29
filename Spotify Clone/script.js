//Initialize variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let song = [
    {songName: "Sadness & Sorrow" ,filepath: "songs/1.mp3" ,coverPath: "bg6.jpg"},
    {songName: "Pain" ,filepath: "songs/2.mp3" ,coverPath: "bg10.jpg"},
    {songName: "Neji" ,filepath: "songs/1.mp3" ,coverPath: "bg11.jpg"},
    {songName: "Sasuke" ,filepath: "songs/2.mp3" ,coverPath: "bg16.jpg"},
    {songName: "Sakura" ,filepath: "songs/1.mp3" ,coverPath: "bg5.jpg"},
    {songName: "Tsunade" ,filepath: "songs/1.mp3" ,coverPath: "bg8.jpg"},
    {songName: "Jiraya" ,filepath: "songs/1.mp3" ,coverPath: "bg15.jpg"},
    {songName: "Orochimaru" ,filepath: "songs/1.mp3" ,coverPath: "bg4.jpg"}
    


]

songItems.forEach((element, i)=>{
    console.log(element, i);
   // element.getElementByTagName("img")[0].src = song[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = song[i].songName;
})  


//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})
//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

const makeAllPlays = ()=>{
  
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');


    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
      
        makeAllPlays();
        
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
             //  audioElement.src = 'songs/2.mp3';

        masterSongName.innerText = song[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex = 0;

    }
    else{
        songIndex += 1;
    }
    
    audioElement.src = `songs/${songIndex+1}.mp3`;
           //  audioElement.src = 'songs/2.mp3';

     masterSongName.innerText = song[songIndex].songName; 
      audioElement.currentTime = 0;
      audioElement.play();
    
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;

    }
    else{
        songIndex -= 1;
    }
   
    audioElement.src = `songs/${songIndex+1}.mp3`;
           //  audioElement.src = 'songs/2.mp3';

    masterSongName.innerText = song[songIndex].songName;     
      audioElement.currentTime = 0;
      audioElement.play();
    
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
})
