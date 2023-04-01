
// ---------------BUY NOW BUTTON-----------------
(() => {
  const refs = {
    openModalBtn: document.querySelector('[sellers-data-modal-open]'),
    closeModalBtn: document.querySelector('[sellers-data-modal-close]'),
    modal: document.querySelector('[sellers-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
// ---------------SUBMIT BUTTON-----------------

