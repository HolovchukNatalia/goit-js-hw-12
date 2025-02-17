import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', function (event) {
  event.preventDefault();
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
  gallery.innerHTML = '';
  input.value = '';

  fetchImages(query).then(images => {
    setTimeout(() => {
      renderImages(images);
      loader.style.display = 'none';
    }, 1000);
  });
});
