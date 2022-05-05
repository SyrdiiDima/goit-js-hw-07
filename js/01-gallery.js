import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');
const body = document.querySelector('body');

const cardsMarkup = createImageCardsMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', cardsMarkup)




function createImageCardsMarkup(galleryItems) {
    return galleryItems.map(({preview,original,description}) => {
        return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `
    }).join('');
  
}

// //----- //----

// gallery.addEventListener('click',onGalleryContainerClick )



// function onGalleryContainerClick(evt) {
  
//   evt.preventDefault();

//   console.log(evt.target);
//   const isGaleryEl = evt.target.classList.contains('gallery__item');
//   if (!isGaleryEl) {
//     return;
//   }
//   return evt.target.dataset.original;
// }
  


const modal = basicLightbox.create(
	`<div class="modal"><img src="" width="800" height="600"></div>`
);

gallery.addEventListener('click', onGalleryImageClickOpenModal);


function onGalleryImageClickOpenModal(evt) {
	evt.preventDefault();

	const IMG_TAG = 'IMG';
	const isEventOnImage = evt.target.nodeName === IMG_TAG;
	const currentPreviewImage = evt.target;
	const modalImgRef = modal.element().querySelector('img');

	if (!isEventOnImage) return;

	setOriginalImageURL(currentPreviewImage, modalImgRef);
  modal.show();
  
	window.addEventListener('keydown', onEscapeKeydownCloseModal);
}


function setOriginalImageURL(image, modal) {
	modal.src = image.dataset.source;
}


function onBackdropClickCloseModal(e) {
	const IMG_TAG = 'IMG';
	const isBackdropClicked = e.target.nodeName !== IMG_TAG;

	if (!isBackdropClicked) return;


}
body.removeEventListener('click', onBackdropClickCloseModal);

function onEscapeKeydownCloseModal(e) {
  const ESC_KEY_CODE = 'Escape';
  const isEscapeKeyPressed = e.code === ESC_KEY_CODE;

  if (!isEscapeKeyPressed) return;

  window.removeEventListener('keydown', onEscapeKeydownCloseModal);

  modal.close();
};
