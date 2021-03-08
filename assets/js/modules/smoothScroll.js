import smoothScrollTo from './smooth';

const initSmoothScroll = () => {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  if (scrollLinks.length) {
    const getElementTop = (element) => {
      const href = element.getAttribute('href');
      return document.querySelector(href).offsetTop;
    };

    const handleScroll = (event) => {
      event.preventDefault();
      const section = getElementTop(event.currentTarget);
      smoothScrollTo(0, section);
    };

    scrollLinks.forEach((link) => {
      link.addEventListener('click', handleScroll);
    });
  }
};

export default initSmoothScroll;
