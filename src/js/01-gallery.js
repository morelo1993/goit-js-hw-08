import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');

    galleryItems.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.classList.add('gallery__item');

        const imageLink = document.createElement('a');
        imageLink.href = item.original;
        imageLink.classList.add('gallery__link');

        const image = document.createElement('img');
        image.src = item.preview;
        image.alt = item.description;
        image.classList.add('gallery__image');

        imageLink.appendChild(image);
        listItem.appendChild(imageLink);
        gallery.appendChild(listItem);
    });


    new SimpleLightbox('.gallery a');
});