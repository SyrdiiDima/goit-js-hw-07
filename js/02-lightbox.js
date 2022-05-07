import { galleryItems } from './gallery-items.js';
// Change code below this line



const gallery = document.querySelector('.gallery');


const cardsMarkup = createGalleryCardsMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', cardsMarkup)


function createGalleryCardsMarkup(galleryItems) { 
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" 
    href="${original}">
  <img class="gallery__image" src="${preview}" 
  alt="${description}" />
</a>`
    }).join('');

};
// console.log(gallery);

const lightBox = new SimpleLightbox('.gallery a', {

    captionsData: 'alt',
    captionDelay: 250,

});

