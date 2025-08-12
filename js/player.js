// js/player.js

// Sélection des éléments du DOM pour le lecteur
const musicPlayer = document.getElementById('music-player');
const audioPlayer = document.getElementById('audio-player');
const playerPlayPauseBtn = document.getElementById('player-play-pause-btn');
const playIcon = playerPlayPauseBtn.querySelector('.play-icon');
const pauseIcon = playerPlayPauseBtn.querySelector('.pause-icon');
const playerTrackTitle = document.getElementById('player-track-title');
const playerArtistName = document.getElementById('player-artist-name');
const playerAlbumCover = document.getElementById('player-album-cover');
const progressBar = document.getElementById('progress-bar');
const currentTimeDisplay = document.getElementById('current-time');
const totalTimeDisplay = document.getElementById('total-time');

// Variable globale pour stocker l'URL de la piste en cours
let currentTrackPath = '';

// Fonction pour formater le temps
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Fonction pour mettre à jour l'icône du bouton de lecture/pause
function updatePlayPauseButton() {
    if (audioPlayer.paused) {
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    } else {
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
    }
}

// Fonction principale pour jouer une chanson
window.playTrack = (path, title, artistName, albumImage) => {
    // Si on clique sur la même chanson, on met en pause/lecture
    if (path === currentTrackPath) {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    } else {
        // Nouvelle chanson, on la charge et on la joue
        currentTrackPath = path;
        audioPlayer.src = path;
        playerTrackTitle.textContent = title;
        playerArtistName.textContent = artistName;
        playerAlbumCover.src = albumImage;
        audioPlayer.load(); // Ajout de .load() pour recharger la nouvelle source
        audioPlayer.play();
    }

    // Affiche le lecteur en ajoutant la classe 'visible'
    musicPlayer.classList.add('visible');
    updatePlayPauseButton();
};

// Événements pour le lecteur
playerPlayPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
    updatePlayPauseButton();
});

audioPlayer.addEventListener('play', () => {
    updatePlayPauseButton();
});

audioPlayer.addEventListener('pause', () => {
    updatePlayPauseButton();
});

audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;
    currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
});

audioPlayer.addEventListener('loadedmetadata', () => {
    if (!isNaN(audioPlayer.duration)) {
        totalTimeDisplay.textContent = formatTime(audioPlayer.duration);
    } else {
        totalTimeDisplay.textContent = '0:00';
    }
});

progressBar.addEventListener('input', () => {
    const newTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = newTime;
});

// Cache le lecteur si la chanson se termine
audioPlayer.addEventListener('ended', () => {
    musicPlayer.classList.remove('visible'); // Retire la classe 'visible' au lieu de 'hidden'
    audioPlayer.currentTime = 0;
    progressBar.value = 0;
    updatePlayPauseButton();
});