const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('.progress-container');

const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

// Song titles
const songs = [
    'Dave Nelson - Whale Lines', 
    'Hawkin - Woods', 
    'Horse Lords - Outer East', 
    'Il Sogno Del Marinaio - Partisian Song',
];

// Keep track of songs
let songIndex = 3;

// Initial loading of songs into DOM
loadSong(songs[songIndex]);

// Update song details with title, artwork and audio file
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `img/${song}.jpg`;
}

// Function to pause song
function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

// Invoking the HTML5 audio.pause inbuilt method
    audio.pause();
}

// Function to play song
function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

// Invoking the HTML5 audio.play inbuilt method
    audio.play();
}


// Function to play previous song in index
// Invoked when 'previous' button is clicked
function prevSong() {
    songIndex--;

    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex])

    playSong()
}

// Function to play next song in index
// Invoked when song ends;  when 'forward' button is clicked
function nextSong() {
    songIndex++;

    // Checking if we're at the end of our playlist
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    // Returning to start of playlist if so
    loadSong(songs[songIndex]);

    playSong();
}

function updateProgress(e) {
    console.log(e.srcElement.currentTime);
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

}

// Function to set different spot on progress bar (to ff track etc)
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
    console.log(clickX);
}

//get duration & currentTime for Time of song
function DurTime (e) {
	const {duration,currentTime} = e.srcElement;
	var sec;
	var sec_d;

	// define minutes currentTime
	let min = (currentTime==null)? 0:
	 Math.floor(currentTime/60);
	 min = min <10 ? '0'+min:min;

	// define seconds currentTime
	function get_sec (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec = Math.floor(x) - (60*i);
					sec = sec <10 ? '0'+sec:sec;
				}
			}
		}else{
		 	sec = Math.floor(x);
		 	sec = sec <10 ? '0'+sec:sec;
		 }
	} 

	get_sec (currentTime,sec);

	// change currentTime DOM
	currTime.innerHTML = min +':'+ sec;

	// define minutes duration
	let min_d = (isNaN(duration) === true)? '0':
		Math.floor(duration/60);
	 min_d = min_d <10 ? '0'+min_d:min_d;


	 function get_sec_d (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec_d = Math.floor(x) - (60*i);
					sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				}
			}
		}else{
		 	sec_d = (isNaN(duration) === true)? '0':
		 	Math.floor(x);
		 	sec_d = sec_d <10 ? '0'+sec_d:sec_d;
		 }
	} 

	// define seconds duration
	get_sec_d (duration);

	// change duration DOM
	durTime.innerHTML = min_d +':'+ sec_d;
		
};

// Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } 
    else {
            playSong();
        }
    });

// Change song to previous
    prevBtn.addEventListener('click', prevSong);

 // Change song - next
    nextBtn.addEventListener('click', nextSong);

// Time/song update to progress bar
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('timeupdate', updateProgress);

// Jump forward/back in song when progress bar is clicked
    progressContainer.addEventListener('click', setProgress);

 // Song ends
    audio.addEventListener('ended', nextSong);

    // Time of song
    audio.addEventListener('timeupdate', durTime);