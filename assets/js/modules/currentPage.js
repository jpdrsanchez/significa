const initCurrentPage = () => {
  const currentPage = window.location.pathname.replace('/', '');
  const menuLinks = document.querySelectorAll('[data-link] a');

  if (menuLinks.length) {
    menuLinks.forEach((link) => {
      const linkHref = link
        .getAttribute('href')
        .replace('.', '')
        .replace('/', '');

      link.classList.remove('active');
      if (linkHref === currentPage) link.classList.add('active');
      else if (!currentPage.length && linkHref === 'index.html')
        link.classList.add('active');
    });
  }
};

export default initCurrentPage;
