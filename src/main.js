import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createGalleryCardTemplate } from './js/render-function.js';
// import { fetchPhotos } from './js/pixabay-api.js';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loader = document.querySelector('.loader');

function onSearchFormSubmit(event) {
  event.preventDefault();

  loader.classList.add('js-loader');

  const searchedValue = searchFormEl.elements.user_query.value;

  const BASE_URL = 'https://pixabay.com/api/';

  const fetchPhotos = searchedQuery => {
    const urlParams = new URLSearchParams({
      key: '45487813-fe5f6ff630a438f35d0eece69',
      q: searchedValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 200,
    });
    return fetch(`${BASE_URL}?${urlParams}`).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  };

  fetchPhotos()
    .then(data => {
      loader.classList.remove('js-loader');
      if (data.total === 0) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching <br> your search query. Please try again!',
        });

        galleryEl.innerHTML = '';
        searchFormEl.reset();

        return;
      }

      const productCardsTemplate = data.hits
        .map(imgDetails => createGalleryCardTemplate(imgDetails))
        .join('');

      const productsGalleryEl = document.querySelector('.gallery');

      productsGalleryEl.innerHTML = productCardsTemplate;

      new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
    })
    .catch(err => {
      console.log(err);
    });

  galleryEl.innerHTML = '';
  searchFormEl.reset();
}

searchFormEl.addEventListener('submit', onSearchFormSubmit);
