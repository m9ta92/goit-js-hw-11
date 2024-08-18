import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchPhotos } from './js/pixabay-api.js';
import { createGalleryCardTemplate } from './js/render-function.js';
//
const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loader = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.gallery a');
//
function onSearchFormSubmit(event) {
  //
  event.preventDefault();
  loader.classList.add('js-loader');
  //
  const searchedValue = searchFormEl.elements.user_query.value;
  //
  fetchPhotos(searchedValue)
    .then(data => {
      //
      loader.classList.remove('js-loader');
      //
      if (data.total === 0) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching <br> your search query. Please try again!',
        });
        //
        galleryEl.innerHTML = '';
        searchFormEl.reset();
        //
        return;
      }

      const productCardsTemplate = data.hits
        .map(imgDetails => createGalleryCardTemplate(imgDetails))
        .join('');

      const productsGalleryEl = document.querySelector('.gallery');

      productsGalleryEl.innerHTML = productCardsTemplate;

      lightbox.refresh();
      searchFormEl.reset();
    })
    .catch(err => {
      console.log(err);
    });
}
//
searchFormEl.addEventListener('submit', onSearchFormSubmit);
//
