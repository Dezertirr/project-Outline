(() => {
  const refs = {
    openVideoBtn: document.querySelector('[data-video-open]'),
    video: document.querySelector('[data-video]'),
  };

  refs.openVideoBtn.addEventListener('click', toggleVideo);

  function toggleVideo() {
    refs.video.classList.toggle('video-is-hidden');
  }
})();
