const audio = document.getElementById('my-audio');
  const playButton = document.getElementById('play-button');
  const pauseButton = document.getElementById('pause-button');

  playButton.addEventListener('click', () => {
    audio.play();
  });

  pauseButton.addEventListener('click', () => {
    audio.pause();
  });
