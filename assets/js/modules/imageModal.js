const initImageModal = () => {
  const modalOpen = document.querySelectorAll('[data-image="open"] img');
  const modal = document.querySelector('[data-image="modal"]');
  const modalClose = document.querySelector('[data-image="close"]');
  const modalImage = document.querySelector('[data-image="image"]');

  if (modalOpen.length && modal && modalClose && modalImage) {
    const handleOpen = (event) => {
      const imageUrl = event.currentTarget.getAttribute('src');
      modalImage.setAttribute('src', imageUrl);
      modal.classList.add('active');
    };

    const handleClose = () => {
      modal.classList.remove('active');
    };

    const handleModal = (event) => {
      if (event.currentTarget === event.target) {
        modal.classList.remove('active');
      }
    };

    modalOpen.forEach((open) => {
      open.addEventListener('click', handleOpen);
    });
    modalClose.addEventListener('click', handleClose);
    modal.addEventListener('click', handleModal);
  }
};

export default initImageModal;
