const initMenuMobile = () => {
  const menuButton = document.querySelector('[data-mobile="button"]');
  const menuBody = document.querySelector('[data-mobile="menu"]');

  if (menuButton && menuBody) {
    const handleOpen = (event) => {
      event.preventDefault();
      menuBody.classList.toggle('active');
      menuButton.classList.toggle('active');
      document.body.classList.toggle('no-overflow');
    };

    const handleClose = ({ currentTarget, target }) => {
      if (
        target === currentTarget ||
        target === menuButton ||
        target.classList.contains('menu__link')
      ) {
        menuBody.classList.remove('active');
        menuButton.classList.remove('active');
        document.body.classList.remove('no-overflow');
      }
    };

    menuButton.addEventListener('click', handleOpen);
    menuBody.addEventListener('click', handleClose);
    window.addEventListener('resize', () => {
      document.body.classList.remove('no-overflow');
    });
  }
};

export default initMenuMobile;
