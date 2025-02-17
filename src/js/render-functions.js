import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
  showCounter: false,
  animationSlide: true,
});

export function renderImages(images) {
  if (images.length === 0) {
    iziToast.show({
      position: 'topRight',
      backgroundColor: 'red',
      message:
        'Sorry, there are no images matching your search query. Please, try again!',
    });
    gallery.innerHTML = '';
    return;
  }
  const markupGallery = images
    .map(
      img =>
        `<li class="gallery-item">
        <a href="${img.largeImageURL}" class="gallery-link">
          <img class="gallery-img" src="${img.webformatURL}" alt="${img.tags}"/>
        </a>
        <div class="gallery-stats">
          <p>Likes <span>${img.likes}</span></p>
          <p>Views <span>${img.views}</span></p>
          <p>Comments <span>${img.comments}</span></p>
          <p>Downloads <span>${img.downloads}</span></p>
        </div>
      </li>`
    )
    .join('');
  gallery.innerHTML = markupGallery;

  lightbox.refresh();
}
