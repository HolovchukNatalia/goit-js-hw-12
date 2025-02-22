import axios from 'axios';

let page = 1;
let perPage = 40;
let totalPages;
let currentQuery ='';

export { page, totalPages, currentQuery };

export function resetPagination() {
  page = 1;
}

export function setCurrentQuery(query) {
  currentQuery = query;
}

export function nextPage(){
  page +=1;
}

const API_KEY = '48843638-b89903974de20d086a3125d9e';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page) {
  try {
    const response = await axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: perPage,
      },
    })
    totalPages = Math.ceil(response.data.totalHits / perPage);
    return response.data.hits
  } catch(error) {
      console.error('Error fetching images:', error);
      return [];
    };
}

// loadMoreBtn.addEventListener('click', async (e)=>{
//   e.preventDefault();
//   if(page >= totalPages) {
//     iziToast.show({
//       position: 'topRight',
//       backgroundColor: 'red',
//       message:
//         "We're sorry, but you've reached the end of search results.",
//     });
//     loadMoreBtn.style.display = 'none';
//     return;
//   }
//   loadMoreBtn.style.display = 'none';
//   loaderMore.style.display = 'block';

//   setTimeout(async () => {
//     try {
//       const postsImg = await fetchImages(currentQuery, page);
//       renderImages(postsImg);
//       page += 1;
  
//       const galleryItemHeight = document.querySelector('.gallery-item')?.getBoundingClientRect().height;
  
//       if (galleryItemHeight) {
//         window.scrollBy({
//           top: 2 * galleryItemHeight,
//           behavior: 'smooth',
//         });
//       }
//       loaderMore.style.display = 'none';
//       if (page < totalPages) {
//         loadMoreBtn.style.display = 'block';
//       }
//     } catch (error) {
//       console.log(error);
//       loader.style.display = 'none'; 
//     }
//   }, 2000);
// });
