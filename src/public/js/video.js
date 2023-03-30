(() => {
  const refs = {
    openVideoBtn: document.querySelector("[data-video-open]"),
    closeVideoBtn: document.querySelector("[data-video-close]"),
    video: document.querySelector("[data-video]"),
  };

  refs.openVideoBtn.addEventListener("click", toggleVideo);
  refs.closeVideoBtn.addEventListener("click", toggleVideo);

  function toggleVideo() {
      refs.video.classList.toggle("video-is-hidden");
  }
})();