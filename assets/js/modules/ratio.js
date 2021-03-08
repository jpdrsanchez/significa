const initRatio = () => {
  const images = document.querySelectorAll('[data-ratio]');

  if (images.length) {
    const initRatio = () => {
      const handleRatio = (event) => {
        const image = event.currentTarget;
        const [width, height] = image.dataset.ratio.split(',');
        console.log(image.offsetWidth);
        image.style = `height: ${image.offsetWidth * (height / width)}px;`;
      };

      images.forEach((image) => {
        const [width, height] = image.dataset.ratio.split(',');
        image.style = `height: ${image.offsetWidth * (height / width)}px;`;
      });

      images.forEach((image) => {
        image.addEventListener('load', handleRatio);
      });
    };

    initRatio();

    window.addEventListener('resize', () => {
      images.forEach((image) => {
        const [width, height] = image.dataset.ratio.split(',');
        image.style = `height: ${image.offsetWidth * (height / width)}px;`;
      });
    });
  }
};

export default initRatio;
