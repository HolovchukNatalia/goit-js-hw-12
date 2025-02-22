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

