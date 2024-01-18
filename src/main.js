import izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIcon from './img/svg/error.svg';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchingForm = document.querySelector('.searching-form');
const searchBtn = document.querySelector('.search-btn');
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
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  className: 'lightbox-on',
});

searchingForm.addEventListener('submit', requestImages);

// =================== Функція запиту на сервер ===================

function requestImages(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  addLoading();
  const searchTitle = event.currentTarget.elements.searching.value.trim();
  // ======= encodeURIComponent(searchTitle) гарантує, що символи будуть правильно закодовані для URL ===================
  const serchingRequest = encodeURIComponent(searchTitle);
  console.log(serchingRequest);
  const searchingOptions = new URLSearchParams({
    key: '41547319-253ef689baf3db6007ef0d5b5',
    q: `${serchingRequest}`,
    orientation: 'horizontal',
    per_page: 9,
    image_type: 'photo',
    safesearch: true,
  });
  fetch(`https://pixabay.com/api/?${searchingOptions}`)
    .then(response => {
      return response.json();
    })
    .then(api => {
      const imagesArray = api.hits;
      if (imagesArray.length === 0) {
        throw new Error(
          `There are no images matching your search query. Please try again!`
        );
      }
      galleryCreation(imagesArray);
      removeLoading();
    })
    .catch(error => {
      console.log(error);
      izitoast.error(
        errorOptions,
        (errorOptions.message = `Sorry! ${error.message}`)
      );
      removeLoading();
    });
}

// =================== Функція створення галереї ===================

function galleryCreation(imagesArray) {
  const markup = imagesArray
    .toSorted((a, b) => b.likes - a.likes)
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
