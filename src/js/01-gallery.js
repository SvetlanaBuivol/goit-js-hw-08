import SimpleLightBox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';


const galleryEl = document.querySelector('.gallery');

const galleryMarkup = createGalleryItemMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);


new SimpleLightbox('.gallery a', {
    captionDelay: 250,
});

function createGalleryItemMarkup (galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
        title="${description}"
        />
        </a>
        </li> 
        `
    }).join('');
};


