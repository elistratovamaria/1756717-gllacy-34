const modalContainerElement = document.querySelector('.modal-container');
const buttonContactsElement = document.querySelector('.contacts-connection-link');
const modalCloseButtonElement = document.querySelector('.modal-close-button');

const onContactsButtonClick = () => {
  modalContainerElement.classList.remove('modal-container-close');
  buttonContactsElement.removeEventListener('click', onContactsButtonClick);
  modalCloseButtonElement.addEventListener('click', onModalCloseButtonClick);
  document.addEventListener('keydown', onEscKeyDown);
};

const onModalCloseButtonClick = () => {
  modalContainerElement.classList.add('modal-container-close');
  buttonContactsElement.addEventListener('click', onContactsButtonClick);
  modalCloseButtonElement.removeEventListener('click', onModalCloseButtonClick);
  document.removeEventListener('keydown', onEscKeyDown);
};

const isEscapeKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const onEscKeyDown = () => {
  if (isEscapeKey) {
    modalContainerElement.classList.add('modal-container-close');
    buttonContactsElement.addEventListener('click', onContactsButtonClick);
    modalCloseButtonElement.removeEventListener('click', onModalCloseButtonClick);
    document.removeEventListener('keydown', onEscKeyDown);
  }
};

buttonContactsElement.addEventListener('click', onContactsButtonClick);

const backgroundColors = ['#feafc3', '#69a9ff', '#fcc850'];
const slideElements = [...document.querySelectorAll('.slider-item')];
const buttonPrevElement = document.querySelector('.slider-button-prev');
const buttonNextElement = document.querySelector('.slider-button-next');
const bulletElements = [...document.querySelectorAll('.slider-pagination-button')];
const slidesAmount = slideElements.length;
let currentIndex = 0;

const onSlideChange = (index) => {
  const activeSlideElement = document.querySelector('.slider-item.slider-item-active');
  const activeBulletElement = document.querySelector('.slider-pagination-button.slider-pagination-button-current');

  document.body.style.backgroundColor = backgroundColors[index];
  slideElements.forEach((element) => (element.style.order = ''));
  activeSlideElement.classList.remove('slider-item-active');
  activeSlideElement.style.order = `${slidesAmount}`;
  slideElements[index].classList.add('slider-item-active');
  slideElements[index].style.order = '-1';
  activeBulletElement.classList.remove('slider-pagination-button-current');
  bulletElements[index].classList.add('slider-pagination-button-current');
};

buttonPrevElement.addEventListener('click', () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = slidesAmount - 1;
  }

  onSlideChange(currentIndex);
});

buttonNextElement.addEventListener('click', () => {
  currentIndex++;

  if (currentIndex === slidesAmount) {
    currentIndex = 0;
  }

  onSlideChange(currentIndex);
});

bulletElements.forEach((element, index) =>
  element.addEventListener('click', () => onSlideChange(index))
);
