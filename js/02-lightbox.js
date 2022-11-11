import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const makeGalleryItems = galleryItems
    .map(({ preview, original, description }) => 
         `<li class="gallery__item">
        <a class="gallery__item" href='${original}'>
          <img class="gallery__image"
            src='${preview}'
            alt='${description}'/>
        </a>
      </li>`)
    .join("");

galleryEl.insertAdjacentHTML("afterbegin", makeGalleryItems);

let gallery = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

console.log(galleryItems);