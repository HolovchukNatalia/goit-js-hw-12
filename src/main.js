import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  fetchImages,
  resetPagination,
  setCurrentQuery,
  page,
  totalPages,
} from './js/pixabay-api';
import { renderImages } from './js/render-functions';

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more-btn'); 

function clearGallery() {
  gallery.innerHTML = '';
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = input.value.trim();

  if (query === '') {
    iziToast.show({
      message: 'Please enter a search query',
      position: 'topRight',
      backgroundColor: 'red',
    });
    return;
  }

  loader.style.display = 'block';
  clearGallery();
  resetPagination();
  setCurrentQuery(query);
  input.value = '';
  loadMoreBtn.style.display = 'none';
  
  try {
    const images = await fetchImages(query);

    setTimeout(() => {
      renderImages(images);
      loader.style.display = 'none';

      if (page < totalPages) {
        loadMoreBtn.style.display = 'block';
      }
    }, 1000);
  } catch (error) {
    console.log(error);
  }
});
