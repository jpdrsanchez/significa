const initInputLabel = () => {
  const inputs = document.querySelectorAll('[data-label]');
  const selects = document.querySelectorAll('[data-select]');

  selects.forEach((select) => {
    select.addEventListener('change', (e) => {
      if (e.currentTarget.value.length) {
        e.currentTarget.nextElementSibling.classList.add('active');
        e.currentTarget.classList.add('active');
      } else {
        e.currentTarget.nextElementSibling.classList.remove('active');
        e.currentTarget.classList.remove('active');
      }
    });
  });

  inputs.forEach((input) => {
    if (input.value.trim().length) {
      input.nextElementSibling.classList.add('active');
      input.classList.add('active');
    }

    input.addEventListener('change', ({ currentTarget }) => {
      if (currentTarget.value.trim().length) {
        currentTarget.nextElementSibling.classList.add('active');
        currentTarget.classList.add('active');
      } else {
        currentTarget.nextElementSibling.classList.remove('active');
        currentTarget.classList.remove('active');
      }
    });
  });
};

export default initInputLabel;
