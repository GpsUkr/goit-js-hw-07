import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.querySelector('.modal');
const modalImage = modal.querySelector('.modal-image');

// Додаємо обробник кліку на кожен елемент галереї
galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
        const src = item.querySelector('img').getAttribute('src');
        modalImage.setAttribute('src', src);
        modal.classList.add('open');
    });
});

// Додаємо обробник кліку на модальне вікно для закриття
modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.classList.contains('modal-close')) {
        modal.classList.remove('open');
    }
});

console.log(galleryItems);
