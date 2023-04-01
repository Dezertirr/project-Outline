// ---------------BUY NOW BUTTON-----------------
(() => {
  const refs = {
    openModalBtnSellers: document.querySelector('[sellers-data-modal-open]'),
    closeModalBtnSellers: document.querySelector('[sellers-data-modal-close]'),
    modalSellers: document.querySelector('[sellers-data-modal]'),
  };

  refs.openModalBtnSellers.addEventListener('click', toggleModalSellers);
  refs.closeModalBtnSellers.addEventListener('click', toggleModalSellers);

  function toggleModalSellers() {
    refs.modalSellers.classList.toggle('is-hidden-sellers');
  }
})();
