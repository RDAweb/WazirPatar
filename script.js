console.log("Welcome To LOP SONGS");

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let songItemPlay = document.getElementById('songItemPlay');
let  = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Udda Adda", filePath:"1.mp3", coverPath: "jfirst.jpg"},
    {songName: "Jad Cheta Tera", filePath:"2.mp3", coverPath: "2.jpg"},
    {songName: "The Last Ride", filePath:"3.mp3", coverPath: "3.jpg"},
    {songName: "Malwa Block", filePath:"4.mp3", coverPath: "4.jpg"},
    {songName: "SEE MY HYPE", filePath:"5.mp3", coverPath: "5.jpg"},
    {songName: "Notorious", filePath:"6.mp3", coverPath: "6.jpg"},
    {songName: "Hussan Illahi", filePath:"7.mp3", coverPath: "7.jpg"},
    {songName: "GOAT", filePath:"8.mp3", coverPath: "8.jpg"},
    {songName: "MTCD", filePath:"9.mp3", coverPath: "9.jpg"},
    {songName: "Farishtay", filePath:"10.mp3", coverPath: "10.jpg"},
    {songName: "Semi - Auto", filePath:"11.mp3", coverPath: "11.jpg"},
    {songName: "Gustakhiyan 2", filePath:"12.mp3", coverPath: "12.jpg"},
    {songName: "Chup Chup", filePath:"13.mp3", coverPath: "13.jpg"},
    {songName: ".45", filePath:"14.mp3", coverPath: "14.jpg"},
    {songName: "Kingpin The Next Episode", filePath:"15.mp3", coverPath: "15.jpg"},
    {songName: "Street Lori", filePath:"16.mp3", coverPath: "16.jpg"},
    {songName: "Pind Da Riwaaz", filePath:"17.mp3", coverPath: "17.jpg"},
    {songName: "Black Heart", filePath:"18.mp3", coverPath: "18.jpg"},
    {songName: "We Different", filePath:"19.mp3", coverPath: "19.jpg"},
    {songName: "Why Black !", filePath:"20.mp3", coverPath: "20.jpg"},
    {songName: "Janaza", filePath:"21.mp3", coverPath: "21.jpg"},
    {songName: "Wahzirinthehood", filePath:"22.mp3", coverPath: "22.jpg"},
    {songName: "Mac 10", filePath:"23.mp3", coverPath: "23.jpg"},
    {songName: "Barks", filePath:"24.mp3", coverPath: "24.jpg"},
    {songName: "Suneya Main", filePath:"25.mp3", coverPath: "25.jpg"},
    {songName: "Highway To Hell", filePath:"26.mp3", coverPath: "26.jpg"},
    {songName: "Bold And Brave", filePath:"27.mp3", coverPath: "27.jpg"},
    {songName: "Bae", filePath:"28.mp3", coverPath: "28.jpg"},
    {songName: "Panjab Jeha", filePath:"29.mp3", coverPath: "29.jpg"},
    {songName: "Chai Latte", filePath:"30.mp3", coverPath: "30.jpg"},
    {songName: "Lokan Diyan Nazran Ch Mai", filePath:"31.mp3", coverPath: "31.jpg"},
    {songName: "Bp Up", filePath:"32.mp3", coverPath: "32.jpg"},
    {songName: "Wahzir Nation", filePath:"33.mp3", coverPath: "33.jpg"},
    {songName: "Daaru Pee Ke Roye Ni", filePath:"34.mp3", coverPath: "34.jpg"},
    {songName: "Enigma", filePath:"35.mp3", coverPath: "35.jpg"},
    {songName: "Niggh", filePath:"36.mp3", coverPath: "36.jpg"},
    {songName: "Mashli", filePath:"37.mp3", coverPath: "37.jpg"},
    {songName: "Fatal Love", filePath:"38.mp3", coverPath: "38.jpg"},
    {songName: "Feel", filePath:"39.mp3", coverPath: "39.jpg"},
    {songName: "Tere Choode De Rang Laal", filePath:"40.mp3", coverPath: "40.jpg"},
    {songName: "Mere Hisse De Phull", filePath:"41.mp3", coverPath: "41.jpg"},
    {songName: "Executioner", filePath:"42.mp3", coverPath: "42.jpg"},
    {songName: "My Love", filePath:"43.mp3", coverPath: "43.jpg"},
    {songName: "Bas Tere Karke", filePath:"44.mp3", coverPath: "44.jpg"},
    {songName: "Eve Teaser", filePath:"45.mp3", coverPath: "45.jpg"},
    {songName: "Tu Hi Das", filePath:"46.mp3", coverPath: "46.jpg"},
    {songName: "Pind Di Nigaah", filePath:"47.mp3", coverPath: "47.jpg"},
    {songName: "Sandookh", filePath:"48.mp3", coverPath: "48.jpg"},
    {songName: "Majha Side", filePath:"49.mp3", coverPath: "49.jpg"},
    {songName: "Rumours", filePath:"50.mp3", coverPath: "50.jpg"},
    {songName: "BAD-DUA", filePath:"51.mp3", coverPath: "51.jpg"},
]

songItem.forEach((element,i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//audioElement.play();

// Function to reset all songItemPlay buttons to 'play' state
// Function to reset all songItemPlay buttons to 'play' state
const makeAllSongItemsPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
};

// Modify the masterPlay event listener to sync with songItemPlay
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        // Play the current song
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

        // Sync the current songItemPlay button to 'pause' state
        const currentSongItemPlay = document.getElementById(songIndex);
        currentSongItemPlay.classList.remove('fa-circle-play');
        currentSongItemPlay.classList.add('fa-circle-pause');
    } else {
        // Pause the song
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

        // Reset all songItemPlay buttons to 'play'
        makeAllSongItemsPlay();
    }
});

// Handle individual songItemPlay click events to sync with masterPlay
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // Reset all songItemPlay buttons to 'play' state
        makeAllSongItemsPlay();

        // Set the clicked song index and play the corresponding song
        songIndex = parseInt(e.target.id);

        // If the song is paused or stopped, play the song
        if (audioElement.paused || audioElement.currentTime <= 0) {
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src = `${songIndex + 1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;

            // Sync the masterPlay button to 'pause' state
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
        } else {
            // If the song is playing, pause it
            audioElement.pause();
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            gif.style.opacity = 0;

            // Sync the masterPlay button to 'play' state
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
        }
    });
});

// Handle next button event listener to sync with songItemPlay icons
document.getElementById('next').addEventListener('click', () => {
    // Reset all songItemPlay buttons to 'play' state
    makeAllSongItemsPlay();

    if (songIndex >= songs.length - 1) {
        songIndex = 0; // Loop back to the first song if it's the last one
    } else {
        songIndex += 1; // Move to the next song
    }

    // Update the audio source and play the next song
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0; // Reset song time
    audioElement.play(); // Play the next song

    // Update the masterPlay button to 'pause'
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1; // Show the playing GIF

    // Update the songItemPlay icon for the next song to 'pause'
    const currentSongItemPlay = document.getElementById(songIndex);
    currentSongItemPlay.classList.remove('fa-circle-play');
    currentSongItemPlay.classList.add('fa-circle-pause');
});

// Handle previous button event listener to sync with songItemPlay icons
document.getElementById('previous').addEventListener('click', () => {
    // Reset all songItemPlay buttons to 'play' state
    makeAllSongItemsPlay();

    if (songIndex <= 0) {
        songIndex = songs.length - 1; // Loop back to the last song if it's the first one
    } else {
        songIndex -= 1; // Move to the previous song
    }

    // Update the audio source and play the previous song
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0; // Reset song time
    audioElement.play(); // Play the previous song

    // Update the masterPlay button to 'pause'
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1; // Show the playing GIF

    // Update the songItemPlay icon for the previous song to 'pause'
    const currentSongItemPlay = document.getElementById(songIndex);
    currentSongItemPlay.classList.remove('fa-circle-play');
    currentSongItemPlay.classList.add('fa-circle-pause');
});

// Variables to track dragging state and time display
let isDragging = false;
const progressTimeDisplay = document.createElement('div');  // Display for hover/drag time
progressTimeDisplay.style.position = 'absolute';
progressTimeDisplay.style.visibility = 'hidden';
progressTimeDisplay.style.background = '#333';
progressTimeDisplay.style.color = '#fff';
progressTimeDisplay.style.padding = '2px 5px';
progressTimeDisplay.style.borderRadius = '5px';
progressTimeDisplay.style.fontSize = '12px';
document.body.appendChild(progressTimeDisplay);

// Listen to Events: timeupdate for tracking song progress
audioElement.addEventListener('timeupdate', () => {
    if (!isDragging) {
        const progress = (audioElement.currentTime / audioElement.duration) * 100;
        myProgressBar.value = progress;
    }
});

// Format time in mm:ss format
const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
};

// Update time display dynamically when dragging or hovering
const updateProgressTimeDisplay = (event) => {
    const rect = myProgressBar.getBoundingClientRect();
    const x = event.clientX - rect.left;  // Get the x position of the mouse relative to the bar
    const hoverTime = (x / rect.width) * audioElement.duration;  // Calculate the hover time
    const timeText = formatTime(hoverTime);
    progressTimeDisplay.innerText = timeText;
    progressTimeDisplay.style.left = `${event.pageX}px`;  // Position time display near the cursor
    progressTimeDisplay.style.top = `${rect.top - 30}px`;  // Position above the progress bar
    progressTimeDisplay.style.visibility = 'visible';
};

// Handle seeking (user click or drag)
myProgressBar.addEventListener('input', (e) => {
    const seekTime = (myProgressBar.value / 100) * audioElement.duration;
    audioElement.currentTime = seekTime;
    isDragging = true;  // User is dragging the progress bar
    updateProgressTimeDisplay(e);
});

// Remove dragging state after seeking
myProgressBar.addEventListener('change', () => {
    isDragging = false;
    progressTimeDisplay.style.visibility = 'hidden';  // Hide the time display after seeking
});

// Update time display while dragging or hovering over the progress bar
myProgressBar.addEventListener('mousemove', (e) => {
    if (!isDragging) {
        updateProgressTimeDisplay(e);
    }
});

myProgressBar.addEventListener('mouseleave', () => {
    progressTimeDisplay.style.visibility = 'hidden';  // Hide when not hovering
});

// Smooth updates with requestAnimationFrame
const updateProgressBar = () => {
    if (!audioElement.paused && !isDragging) {
        const progress = (audioElement.currentTime / audioElement.duration) * 100;
        myProgressBar.value = progress;
    }
    requestAnimationFrame(updateProgressBar);
};

// Start updating the progress bar when audio plays
audioElement.addEventListener('play', () => {
    requestAnimationFrame(updateProgressBar);

    // Update time display function
const updateTimeDisplay = () => {
    const currentTime = formatTime(audioElement.currentTime);
    const totalTime = formatTime(audioElement.duration);
    document.getElementById('currentTimeDisplay').innerText = `${currentTime} / ${totalTime}`;
};

// Function to format time in mm:ss
const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
};

// Call updateTimeDisplay during play
audioElement.addEventListener('timeupdate', updateTimeDisplay);
});


// Handle song end to play the next song and update the icons
audioElement.addEventListener('ended', () => {
    // Reset the icon of the current song
    document.getElementById(songIndex).classList.remove('fa-circle-pause');
    document.getElementById(songIndex).classList.add('fa-circle-play');

    // Move to the next song
    songIndex += 1;
    if (songIndex >= songs.length) {
        songIndex = 0; // Loop back to the first song if the list ends
    }

    // Update the audio source and song information
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();

    // Update play/pause icons
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;

    // Set the icon of the next song to 'fa-circle-pause'
    document.getElementById(songIndex).classList.remove('fa-circle-play');
    document.getElementById(songIndex).classList.add('fa-circle-pause');
});

// Handle keyboard events for spacebar, 'L', 'J', 'B', 'N', 'K', left arrow, and right arrow keys
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault(); // Prevent space from scrolling the page
        togglePlayPause();
    }

    if (e.code === 'KeyL') {
        skipForward(5); // Skip forward 5 seconds when 'L' key is pressed
    }

    if (e.code === 'KeyJ') {
        skipBackward(5); // Skip backward 5 seconds when 'J' key is pressed
    }

    if (e.code === 'KeyB') {
        playPreviousSong(); // Play the previous song when 'B' key is pressed
    }

    if (e.code === 'KeyN') {
        playNextSong(); // Play the next song when 'N' key is pressed
    }

    if (e.code === 'KeyK') {
        togglePlayPause(); // Toggle play/pause when 'K' key is pressed
    }

    if (e.code === 'ArrowLeft') {
        skipBackward(10); // Skip backward 10 seconds when the left arrow key is pressed
    }

    if (e.code === 'ArrowRight') {
        skipForward(10); // Skip forward 10 seconds when the right arrow key is pressed
    }
});

// Function to toggle play/pause logic
const togglePlayPause = () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

        // Set current playing song's icon
        document.getElementById(songIndex).classList.remove('fa-circle-play');
        document.getElementById(songIndex).classList.add('fa-circle-pause');
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

        // Reset icon to play for the current song
        document.getElementById(songIndex).classList.remove('fa-circle-pause');
        document.getElementById(songIndex).classList.add('fa-circle-play');
    }
};

// Function to skip forward a certain number of seconds
const skipForward = (seconds) => {
    if (audioElement.currentTime + seconds <= audioElement.duration) {
        audioElement.currentTime += seconds; // Skip forward by the specified number of seconds
    } else {
        audioElement.currentTime = audioElement.duration; // Jump to the end if skipping would exceed song duration
    }
};

// Function to skip backward a certain number of seconds
const skipBackward = (seconds) => {
    if (audioElement.currentTime - seconds >= 0) {
        audioElement.currentTime -= seconds; // Rewind by the specified number of seconds
    } else {
        audioElement.currentTime = 0; // Jump to the start if rewinding would go below 0
    }
};

// Function to play the next song
const playNextSong = () => {
    // Reset the icon of the current song
    document.getElementById(songIndex).classList.remove('fa-circle-pause');
    document.getElementById(songIndex).classList.add('fa-circle-play');

    // Move to the next song
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }

    // Update the audio source and song information
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();

    // Update play/pause icons
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;

    // Set the icon of the next song to 'fa-circle-pause'
    document.getElementById(songIndex).classList.remove('fa-circle-play');
    document.getElementById(songIndex).classList.add('fa-circle-pause');
};

// Function to play the previous song
const playPreviousSong = () => {
    // Reset the icon of the current song
    document.getElementById(songIndex).classList.remove('fa-circle-pause');
    document.getElementById(songIndex).classList.add('fa-circle-play');

    // Move to the previous song
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex -= 1;
    }

    // Update the audio source and song information
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();

    // Update play/pause icons
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;

    // Set the icon of the previous song to 'fa-circle-pause'
    document.getElementById(songIndex).classList.remove('fa-circle-play');
    document.getElementById(songIndex).classList.add('fa-circle-pause');
};
const songItems = document.querySelectorAll('.songItem');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        } else {
            entry.target.classList.remove('in-view');
        }
    });
});

songItems.forEach(item => observer.observe(item));


document.getElementById('search-bar').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const songItems = document.querySelectorAll('.songItem');

    songItems.forEach(item => {
        const songName = item.querySelector('.songName').innerText.toLowerCase();
        if (songName.includes(searchTerm)) {
            item.style.display = ''; // Show matching items
        } else {
            item.style.display = 'none'; // Hide non-matching items
        }
    });
});

document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey || event.metaKey) && (event.key === '+' || event.key === '-')) {
        event.preventDefault(); // Prevent zooming with Ctrl+/Ctrl-
    }
});

document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault(); // Prevent zooming with Ctrl+mouse wheel
    }
}, { passive: false });

document.addEventListener('gesturestart', function(event) {
    event.preventDefault(); // Prevent zoom on touch devices
});

document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault(); // Prevent pinch-to-zoom
    }
}, { passive: false });