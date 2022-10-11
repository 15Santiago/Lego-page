const modal = document.querySelector('.modal');
const spiderButton = document.querySelector('.spiderman-btn');
const robinButton = document.querySelector('.robin-btn');
const batmanButton = document.querySelector('.batman-btn');
const closeBtn = document.querySelector('.modal-button-close');

spiderButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
});
robinButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
});
batmanButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
});
closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('visible');
});