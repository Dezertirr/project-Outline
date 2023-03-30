(() => {
  const refs = {
    openFeedbackThanksBtn: document.querySelector("[data-feedback-thanks-open]"),
    closeFeedbackThanksBtn: document.querySelector("[data-feedback-thanks-close]"),
    feedback: document.querySelector("[data-feedback-thanks]"),
  };

  refs.openFeedbackThanksBtn.addEventListener("click", toggleFeedbackThanks);
  refs.closeFeedbackThanksBtn.addEventListener("click", toggleFeedbackThanks);

  function toggleFeedbackThanks() {
      refs.feedback.classList.toggle("feedback-thanks-is-hidden");
  }
})();