import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  fetchImages,
  resetPagination,
  setCurrentQuery,
  currentQuery,
  nextPage,
  page,
  totalPages,
} from './js/pixabay-api';
import { renderImages } from './js/render-functions';

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more-btn');
loadMoreBtn.style.display ='none';
const loaderMore = document.querySelector('.loader-more');
loaderMore.style.display = 'none';

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

    
      renderImages(images);
      loader.style.display = 'none';

      if (page < totalPages) {
        loadMoreBtn.style.display = 'block';
      }
    
  } catch (error) {
    console.log(error);
  }
});


loadMoreBtn.addEventListener('click', async (e)=>{
  e.preventDefault();
  
  loadMoreBtn.style.display = 'none';
  loaderMore.style.display = 'block';


  try {
    nextPage();
    const postsImg = await fetchImages(currentQuery, page);
    renderImages(postsImg);

    const galleryItemHeight = document.querySelector('.gallery-item')?.getBoundingClientRect().height;

    if (galleryItemHeight) {
      window.scrollBy({
        top: 2 * galleryItemHeight,
        behavior: 'smooth',
      });
    }
    loaderMore.style.display = 'none';
    if(page >= totalPages) {
      iziToast.show({
        position: 'topRight',
        backgroundColor: 'red',
        message:
          "We're sorry, but you've reached the end of search results.",
      });
      loadMoreBtn.style.display = 'none';
    } else if (page < totalPages) {
      loadMoreBtn.style.display = 'block';
    }
  } catch (error) {
    console.log(error);
    loader.style.display = 'none'; 
  }
});