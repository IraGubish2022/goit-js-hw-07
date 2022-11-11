import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery__item');
const makeGalleryItems = (items) => {
    return items
    .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href='${original}'>
          <img class="gallery__image"
            src='${preview}'
            data-source='${original}'
            alt='${description}'/>
        </a>
      </div>`;
    })
    .join("");
}
galleryEl.insertAdjacentHTML("afterbegin", makeGalleryItems(galleryItems));

const onClick = (Event) => {
    Event.preventDefault();
    if (!Event.target.classList.contains('.gallery__image')) 
    return;


galleryEl.addEventListener('click', onClick);


const instance = basicLightbox.create(`<div class = "modal"><img src='${Event.target.dataset.source}'></div>`,
{
    onOpen: (instance) => {
        window.addEventListener('keydown', onKeyboardClick);
        console.log('onOpen', instance);
    },
    onClose: (instance) => {
        window.removeEventListener('keydown', onKeyboardClick);
        console.log('onClose', instance);
    }
});
instance.show()

function onKeyboardClick (Event) {
    if (Event.code === 'Escape') {
        instance.close();
    }
};
};
console.log(galleryItems);


