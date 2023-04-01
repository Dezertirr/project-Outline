(() => {
  const refs = {
    openthanksBtn: document.querySelector("[data-thanks-open]"),
    closethanksBtn: document.querySelector("[data-thanks-close]"),
    thanks: document.querySelector("[data-thanks]"),
  };

  refs.openthanksBtn.addEventListener("click", togglethanks);
  refs.closethanksBtn.addEventListener("click", togglethanks);

  function togglethanks() {
    refs.thanks.classList.toggle("thanks-is-hidden");
  }
})();