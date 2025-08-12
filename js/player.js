// js/player.js

// --- Éléments du DOM pour le lecteur principal (player-bar) ---
const playerBar = document.querySelector('.player-bar');
const currentSongCover = document.getElementById('currentSongCover');
const currentSongTitle = document.getElementById('currentSongTitle');
const currentSongArtist = document.getElementById('currentSongArtist');
const mainPlayPauseBtn = document.querySelector('.main-play-pause-btn');
const mainPlayPauseIcon = mainPlayPauseBtn.querySelector('i'); // L'icône Font Awesome
const progressBar = document.getElementById('progressBar');
const miniCurrentTimeDisplay = document.getElementById('miniCurrentTime');
const miniDurationDisplay = document.getElementById('miniDuration');
const volumeSlider = document.getElementById('volumeSlider');
const mainVolumeMuteBtn = document.querySelector('.main-volume-mute-btn');
const mainVolumeMuteIcon = mainVolumeMuteBtn.querySelector('i');
const fullscreenBtn = document.querySelector('.fullscreen-btn');

// --- Éléments du DOM pour le lecteur plein écran (fullscreen-modal) ---
const fullscreenCoverModal = document.getElementById('fullscreenCoverModal');
const closeFullscreenModalBtn = document.querySelector('.close-modal');
const fullscreenCoverImage = document.getElementById('fullscreenCoverImage');
const fullscreenSongTitle = document.getElementById('fullscreenSongTitle');
const fullscreenSongArtist = document.getElementById('fullscreenSongArtist');
const fullscreenLyrics = document.getElementById('fullscreenLyrics');
const fullscreenPlayPauseBtn = document.querySelector('.fullscreen-play-pause-btn');
const fullscreenPlayPauseIcon = fullscreenPlayPauseBtn.querySelector('i');
const fullscreenProgressBar = document.getElementById('fullscreenProgressBar');
const fullscreenCurrentTimeDisplay = document.getElementById('fullscreenCurrentTime');
const fullscreenDurationDisplay = document.getElementById('fullscreenDuration');
const fullscreenVolumeSlider = document.getElementById('fullscreenVolumeSlider');
const fullscreenVolumeMuteBtn = document.querySelector('.fullscreen-volume-mute-btn');
const fullscreenVolumeMuteIcon = fullscreenVolumeMuteBtn.querySelector('i');

// --- Boutons de contrôle partagés (pour le moment, seulement des stubs) ---
const shuffleBtns = document.querySelectorAll('.shuffle-btn');
const prevBtns = document.querySelectorAll('.prev-btn');
const nextBtns = document.querySelectorAll('.next-btn');
const repeatBtns = document.querySelectorAll('.repeat-btn');

// --- Élément audio HTML ---
const audioPlayer = document.getElementById('audioPlayer');

// Variable globale pour stocker l'URL de la piste en cours
let currentTrackPath = '';
let currentVolume = 1; // Stocke le volume actuel pour le mute/unmute

// Fonction pour formater le temps (secondes en MM:SS)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Fonction pour mettre à jour les icônes de lecture/pause
function updatePlayPauseIcons() {
    if (audioPlayer.paused) {
        mainPlayPauseIcon.classList.remove('fa-pause');
        mainPlayPauseIcon.classList.add('fa-play');
        fullscreenPlayPauseIcon.classList.remove('fa-pause');
        fullscreenPlayPauseIcon.classList.add('fa-play');
    } else {
        mainPlayPauseIcon.classList.remove('fa-play');
        mainPlayPauseIcon.classList.add('fa-pause');
        fullscreenPlayPauseIcon.classList.remove('fa-play');
        fullscreenPlayPauseIcon.classList.add('fa-pause');
    }
}

// Fonction principale pour jouer une chanson
window.playTrack = (path, title, artistName, albumImage, lyrics = 'Paroles non disponibles.') => {
    // Si on clique sur la même chanson
    if (path === currentTrackPath) {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    } else {
        // Nouvelle chanson : charge et joue
        currentTrackPath = path;
        audioPlayer.src = path;

        // Mise à jour des informations du mini-lecteur
        currentSongTitle.textContent = title;
        currentSongArtist.textContent = artistName;
        currentSongCover.src = albumImage;

        // Mise à jour des informations du lecteur plein écran
        fullscreenSongTitle.textContent = title;
        fullscreenSongArtist.textContent = artistName;
        fullscreenCoverImage.src = albumImage;
        fullscreenLyrics.textContent = lyrics; // Mettez à jour les paroles

        audioPlayer.load(); // Recharge la nouvelle source
        audioPlayer.play();
    }

    // Affiche le lecteur principal (barre du bas)
    playerBar.classList.add('visible');
    updatePlayPauseIcons();
};

// --- Écouteurs d'événements pour le lecteur principal ---

// Clic sur le bouton Play/Pause du mini-lecteur
mainPlayPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
    updatePlayPauseIcons();
});

// Mise à jour de la barre de progression du mini-lecteur
progressBar.addEventListener('input', () => {
    const newTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = newTime;
});

// Contrôle du volume du mini-lecteur
volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = volumeSlider.value / 100;
    currentVolume = audioPlayer.volume; // Met à jour le volume actuel
    // Met à jour l'icône de mute/unmute
    if (audioPlayer.volume === 0) {
        mainVolumeMuteIcon.classList.remove('fa-volume-up');
        mainVolumeMuteIcon.classList.add('fa-volume-mute');
    } else {
        mainVolumeMuteIcon.classList.remove('fa-volume-mute');
        mainVolumeMuteIcon.classList.add('fa-volume-up');
    }
});

// Bouton Mute/Unmute du mini-lecteur
mainVolumeMuteBtn.addEventListener('click', () => {
    if (audioPlayer.volume > 0) {
        audioPlayer.volume = 0;
        volumeSlider.value = 0;
        mainVolumeMuteIcon.classList.remove('fa-volume-up');
        mainVolumeMuteIcon.classList.add('fa-volume-mute');
    } else {
        audioPlayer.volume = currentVolume > 0 ? currentVolume : 1; // Rétablit le volume précédent ou 1 si 0
        volumeSlider.value = audioPlayer.volume * 100;
        mainVolumeMuteIcon.classList.remove('fa-volume-mute');
        mainVolumeMuteIcon.classList.add('fa-volume-up');
    }
});

// --- Écouteurs d'événements pour le lecteur plein écran ---

// Ouverture du modal plein écran
fullscreenBtn.addEventListener('click', () => {
    fullscreenCoverModal.classList.add('active');
    // Synchroniser les contrôles une fois le modal ouvert
    fullscreenProgressBar.value = progressBar.value;
    fullscreenVolumeSlider.value = volumeSlider.value;
    updatePlayPauseIcons(); // S'assurer que l'icône est correcte
    // Synchroniser l'icône du volume du modal
    if (audioPlayer.volume === 0) {
        fullscreenVolumeMuteIcon.classList.remove('fa-volume-up');
        fullscreenVolumeMuteIcon.classList.add('fa-volume-mute');
    } else {
        fullscreenVolumeMuteIcon.classList.remove('fa-volume-mute');
        fullscreenVolumeMuteIcon.classList.add('fa-volume-up');
    }
});

// Fermeture du modal plein écran
closeFullscreenModalBtn.addEventListener('click', () => {
    fullscreenCoverModal.classList.remove('active');
});

// Clic sur le bouton Play/Pause du lecteur plein écran
fullscreenPlayPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
    updatePlayPauseIcons();
});

// Mise à jour de la barre de progression du lecteur plein écran
fullscreenProgressBar.addEventListener('input', () => {
    const newTime = (fullscreenProgressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = newTime;
});

// Contrôle du volume du lecteur plein écran
fullscreenVolumeSlider.addEventListener('input', () => {
    audioPlayer.volume = fullscreenVolumeSlider.value / 100;
    currentVolume = audioPlayer.volume; // Met à jour le volume actuel
    // Synchroniser le volume du mini-lecteur
    volumeSlider.value = fullscreenVolumeSlider.value;
    // Met à jour l'icône de mute/unmute
    if (audioPlayer.volume === 0) {
        fullscreenVolumeMuteIcon.classList.remove('fa-volume-up');
        fullscreenVolumeMuteIcon.classList.add('fa-volume-mute');
        mainVolumeMuteIcon.classList.remove('fa-volume-up');
        mainVolumeMuteIcon.classList.add('fa-volume-mute');
    } else {
        fullscreenVolumeMuteIcon.classList.remove('fa-volume-mute');
        fullscreenVolumeMuteIcon.classList.add('fa-volume-up');
        mainVolumeMuteIcon.classList.remove('fa-volume-mute');
        mainVolumeMuteIcon.classList.add('fa-volume-up');
    }
});

// Bouton Mute/Unmute du lecteur plein écran
fullscreenVolumeMuteBtn.addEventListener('click', () => {
    if (audioPlayer.volume > 0) {
        audioPlayer.volume = 0;
        volumeSlider.value = 0; // Synchronise le mini-lecteur
        fullscreenVolumeSlider.value = 0;
        fullscreenVolumeMuteIcon.classList.remove('fa-volume-up');
        fullscreenVolumeMuteIcon.classList.add('fa-volume-mute');
        mainVolumeMuteIcon.classList.remove('fa-volume-up');
        mainVolumeMuteIcon.classList.add('fa-volume-mute'); // Synchronise l'icône du mini-lecteur
    } else {
        audioPlayer.volume = currentVolume > 0 ? currentVolume : 1;
        volumeSlider.value = audioPlayer.volume * 100; // Synchronise le mini-lecteur
        fullscreenVolumeSlider.value = audioPlayer.volume * 100;
        fullscreenVolumeMuteIcon.classList.remove('fa-volume-mute');
        fullscreenVolumeMuteIcon.classList.add('fa-volume-up');
        mainVolumeMuteIcon.classList.remove('fa-volume-mute');
        mainVolumeMuteIcon.classList.add('fa-volume-up'); // Synchronise l'icône du mini-lecteur
    }
});


// --- Écouteurs d'événements pour l'élément audio ---

audioPlayer.addEventListener('play', () => {
    updatePlayPauseIcons();
});

audioPlayer.addEventListener('pause', () => {
    updatePlayPauseIcons();
});

audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress; // Pour le mini-lecteur
    fullscreenProgressBar.value = progress; // Pour le lecteur plein écran

    miniCurrentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
    fullscreenCurrentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
});

audioPlayer.addEventListener('loadedmetadata', () => {
    if (!isNaN(audioPlayer.duration)) {
        miniDurationDisplay.textContent = formatTime(audioPlayer.duration);
        fullscreenDurationDisplay.textContent = formatTime(audioPlayer.duration);
        progressBar.max = 100;
        fullscreenProgressBar.max = 100;
        progressBar.value = 0;
        fullscreenProgressBar.value = 0;
    } else {
        miniDurationDisplay.textContent = '0:00';
        fullscreenDurationDisplay.textContent = '0:00';
    }
    // S'assurer que le volume du slider est synchronisé avec l'audio
    volumeSlider.value = audioPlayer.volume * 100;
    fullscreenVolumeSlider.value = audioPlayer.volume * 100;
    currentVolume = audioPlayer.volume;
    updatePlayPauseIcons(); // Met à jour l'icône au chargement des métadonnées
});

// Cache le lecteur principal si la chanson se termine
audioPlayer.addEventListener('ended', () => {
    playerBar.classList.remove('visible'); // Retire la classe 'visible'
    fullscreenCoverModal.classList.remove('active'); // Ferme le modal plein écran
    audioPlayer.currentTime = 0;
    progressBar.value = 0;
    fullscreenProgressBar.value = 0;
    updatePlayPauseIcons();
});

// --- Gestion des boutons Shuffle, Précédent, Suivant, Répéter (stubs pour le moment) ---
shuffleBtns.forEach(btn => btn.addEventListener('click', () => {
    console.log('Shuffle button clicked!');
    btn.classList.toggle('active'); // Exemple de feedback visuel
}));
prevBtns.forEach(btn => btn.addEventListener('click', () => {
    console.log('Previous button clicked!');
    // Logique pour passer à la chanson précédente
}));
nextBtns.forEach(btn => btn.addEventListener('click', () => {
    console.log('Next button clicked!');
    // Logique pour passer à la chanson suivante
}));
repeatBtns.forEach(btn => btn.addEventListener('click', () => {
    console.log('Repeat button clicked!');
    btn.classList.toggle('active'); // Exemple de feedback visuel
}));

// Initialise le volume du slider au chargement
document.addEventListener('DOMContentLoaded', () => {
    volumeSlider.value = audioPlayer.volume * 100;
    fullscreenVolumeSlider.value = audioPlayer.volume * 100;
    currentVolume = audioPlayer.volume;
});