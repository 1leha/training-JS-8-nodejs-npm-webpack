//? > Task 2. Many of Many

const refs = {
  buttons: document.querySelector('.buttons'),
};

refs.buttons.addEventListener('click', onButtonClick);

function onButtonClick(e) {
  const isButton = e.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

  const currentButton = e.target;
  const activeButton = refs.buttons.querySelector('.buttons__elem.buttons__elem--active');

  removeActiveClassFromButton(activeButton);
  addActiveClassForButton(currentButton);
}

function addActiveClassForButton(button) {
  button.classList.add('buttons__elem--active');
}

function removeActiveClassFromButton(activeButton) {
  // if (activeButton) {
  //   activeButton.classList.remove('buttons__elem--active');
  // }
  activeButton?.classList.remove('buttons__elem--active');
}
