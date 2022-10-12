const modal = document.querySelector('.modal');
const spiderButton = document.querySelector('.spiderman-btn');
const robinButton = document.querySelector('.robin-btn');
const batmanButton = document.querySelector('.batman-btn');
const closeBtn = document.querySelector('.modal-button-close');

const img1 = document.querySelector('#img-1');
const img2 = document.querySelector('#img-2');
const img3 = document.querySelector('#img-3');

spiderButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
    renderImgaes(spiderButton);
});
robinButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
    renderImgaes(robinButton);
});
batmanButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
    renderImgaes(batmanButton);
});
closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('visible');
});