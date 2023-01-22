import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector(".gallery");

const markupGallery = createGalleryMarkup(galleryItems);

container.insertAdjacentHTML("beforeend", markupGallery);

container.addEventListener('click', onContainerClick);

function createGalleryMarkup (gallery) {
   return gallery
    .map (({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </div>`;
    })
    .join(""); 
};

new SimpleLightbox('.gallery__item a', {captionsData:'alt', captionDelay:'250'});

function onContainerClick (event) {
    if(!event.target.classList.contains("gallery__item")) {
        return;
    };
};  
