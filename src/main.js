import axios from 'axios';
import izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIcon from './img/svg/error.svg';
import notificationIcon from './img/svg/notification.svg';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchingForm = document.querySelector('.searching-form');
const searchBtn = document.querySelector('.button');
const loadMoreBtn = document.querySelector('.load-more-btn');
const gallery = document.querySelector('.gallery');
const container = document.querySelector('.container');
const errorOptions = {
  title: '',
  iconUrl: `${errorIcon}`,
  backgroundColor: '#EF4040',
  titleColor: '#fff',
  messageColor: '#fff',
  theme: 'dark',
  messageSize: '16px',
  progressBarColor: '#B5EA7C',
  position: 'topRight',
};
const perPage = 40;
let page = 1;
let serchingRequest;
let searchingOptions;
let imagesArray;
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  className: 'lightbox-on',
});

// =================== Слухач події кліку на кнопку "Submit" ===================

searchingForm.addEventListener('submit', requestImages);

// =================== Функція запиту на сервер ===================

async function requestImages(event) {
  event.preventDefault();
  hideLoadMoreBtn();
  gallery.innerHTML = '';
  page = 1;
  addLoading();

  const searchTitle = event.currentTarget.elements.searching.value.trim();

  // ======= encodeURIComponent(searchTitle) гарантує, що символи будуть правильно закодовані для URL ===================

  serchingRequest = encodeURIComponent(searchTitle);
  console.log(serchingRequest);

  fetchImages()
    .then(response => {
      const imgQuantity = response.data.totalHits;
      if (imgQuantity === 0) {
        throw new Error(
          `There are no images matching your search query. Please try again!`
        );
      }
      imagesArray = response.data.hits;
      galleryCreation(imagesArray);
      if (imgQuantity > perPage) {
        showLoadMoreBtn();
        loadMoreBtn.addEventListener('click', loadMoreImages);
      }
    })
    .catch(error => {
      izitoast.error(
        errorOptions,
        (errorOptions.message = `Sorry! ${error.message}`)
      );
    })
    .finally(() => {
      removeLoading();
    });
}

// =================== Функція запиту на сервер ===================

async function fetchImages() {
  searchingOptions = {
    params: {
      key: '41547319-253ef689baf3db6007ef0d5b5',
      q: `${serchingRequest}`,
      orientation: 'horizontal',
      per_page: perPage,
      page: page,
      image_type: 'photo',
      safesearch: true,
      order: 'likes',
    },
  };
  const response = await axios.get(
    'https://pixabay.com/api/',
    searchingOptions
  );
  return response;
}

// =================== Колбек функція для слухача події кліку на кнопку "Load more" ===================

function loadMoreImages() {
  page += 1;
  fetchImages()
    .then(response => {
      const imgQuantity = response.data.totalHits;
      const totalPages = Math.ceil(imgQuantity / perPage);
      if (page === totalPages) {
        removeEventListener('click', loadMoreImages);
        hideLoadMoreBtn();
        izitoast.info(
          errorOptions,
          (errorOptions.iconUrl = `${notificationIcon}`),
          (errorOptions.message = `You have reached the end of the search results.`),
          (errorOptions.backgroundColor = '#0ab6f5')
        );
      }
      imagesArray = response.data.hits;
      galleryCreation(imagesArray);
    })
    .catch(error => {
      izitoast.error(
        errorOptions,
        (errorOptions.message = `Sorry! ${error.message}`)
      );
    })
    .finally(() => {});
}

// =================== Функція створення галереї ===================

function galleryCreation(imagesArray) {
  const markup = imagesArray
    .map(image => {
      return `<li class="gallery-item"><div class='image-wrapper'>
  <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      alt="${image.tags}"
      width="360"
      height="200"
    />
    </a>
    <div class="gallery-item-description">
<ul class='gallery-item-description-list'>
<li class='description-list-item'>
<p class='description'>Likes</p>
<p class='quantity'>${image.likes}</p>
</li>
<li class='description-list-item'>
<p class='description'>Views</p>
<p class='quantity'>${image.views}</p>
</li>
<li class='description-list-item'>
<p class='description'>Comments</p>
<p class='quantity'>${image.comments}</p>
</li>
<li class='description-list-item'>
<p class='description'>Downloads</p>
<p class='quantity'>${image.downloads}</p>
</li>
</ul>
    </div>
    </div>
</li>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

// =================== Функція відображення кнопки "Load more" =====

function showLoadMoreBtn() {
  loadMoreBtn.style.display = 'block';
}

// =================== Функція приховування кнопки "Load more" =====

function hideLoadMoreBtn() {
  loadMoreBtn.style.display = 'none';
}

// =================== Функція додавання спінера, стилю search-btn-disabled, змінення стану кнопки на відключено ===================

function addLoading() {
  container.insertAdjacentHTML('afterbegin', '<span class="loader"></span>');
  searchBtn.disabled = true;
  searchBtn.classList.add('search-btn-disabled');
}

// =================== Функція видалення спінера, стилю search-btn-disabled, змінення стану кнопки на включено, обнулення форми ===================

function removeLoading() {
  const loader = document.querySelector('.loader');
  loader.remove();
  searchBtn.disabled = false;
  searchBtn.classList.remove('search-btn-disabled');
  searchingForm.reset();
}
