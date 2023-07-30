// code for playing music

document.addEventListener('DOMContentLoaded', function() {
  const playlist = document.getElementById("playlist");
  const audio = document.getElementById("audio");

  playlist.addEventListener('click', () => {
    if (audio.paused || audio.currentTime <= 0) {
      audio.play();
    }
    else {
      audio.pause();
    }
  });
});