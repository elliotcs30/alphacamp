const BASE_URL = 'https://movie-list.alphacamp.io'
const INDEX_URL = BASE_URL + '/api/v1/movies/'
const POSTER_URL = BASE_URL + '/posters/'
const MOVIES_PER_PAGE = 12

const movies = []

const dataPanel = document.querySelector('#data-panel')
const searchForm = document.querySelector('#search-form')
const searchInput = document.querySelector('#search-input')
const paginator = document.querySelector('#paginator')

function renderMovieList(data) {
  let rawHTML = ''

  // processing
  data.forEach((item) => {
    // title, image, id
    rawHTML += `<div class="col-sm-3">
        <div class="mb-2">
          <div class="card">
            <img src="${POSTER_URL + item.image}" class="card-img-top" alt="Movie Poster">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary btn-show-movie" data-bs-toggle="modal" data-bs-target="#movie-model" data-bs-id="${item.id}">More</button>
              <button class="btn btn-info btn-add-favorite" data-bs-id="${item.id}">+</button>
            </div>
          </div>
        </div>
      </div>`
  })

  dataPanel.innerHTML = rawHTML
}

function renderPaginator(amount) {
  const numberOfPages = Math.ceil(amount / MOVIES_PER_PAGE)

  let rawHTML = ''
  
  for (let page = 1; page <= numberOfPages; page++) {
    rawHTML += `
      <li class="page-item">
        <a class="page-link" href="#" data-page="${page}">
          ${page}
        </a>
      </li>`
  }

  paginator.innerHTML = rawHTML
}

function getMoviesByPage(page) {
  // page 1 -> movies 0 - 11
  // page 2 -> movies 12 -23
  // ...

  const startIndex = (page - 1) * MOVIES_PER_PAGE
  return movies.slice(startIndex, startIndex + MOVIES_PER_PAGE)
}

function showMovieModal(id) {
  const modalTitle = document.querySelector('#movie-modal-title')
  const modalImage = document.querySelector('#movie-modal-image')
  const modalDate = document.querySelector('#movie-modal-date')
  const modalDescription = document.querySelector('#movie-modal-description')

  axios.get(INDEX_URL + id)
    .then((response) => {
      const data = response.data.results

      modalTitle.innerText = data.title
      modalDate.innerText = `Release date: ${data.release_date}`
      modalDescription.innerText = data.description
      modalImage.innerHTML = `<img src="${POSTER_URL + data.image}" alt="movie-poster" class="img-fluid">`
    })
}

function addToFavorite(id) {
  const list = JSON.parse(localStorage.getItem('favoriteMovies')) || []
  const movie = movies.find(movie => movie.id === id)

  if (list.some(movie => movie.id === id)) {
    return window.alert('此電影已經在收藏清單中！')
  }

  list.push(movie)

  localStorage.setItem('favoriteMovies', JSON.stringify(list))
}

dataPanel.addEventListener('click', function onPanelClicked(event) {
  if (event.target.matches('.btn-show-movie')) {
    showMovieModal(Number(event.target.dataset.bsId))
  } else if (event.target.matches('.btn-add-favorite')) {
    addToFavorite(Number(event.target.dataset.bsId))
  }
})

paginator.addEventListener('click', function onPaginatorClicked(event) {
  // 如果被點擊的不是 a 標籤，結束
  if (event.target.tagName !== 'A') return
  // 透過 dataset 取得被點擊的頁數
  const page = Number(event.target.dataset.page)
  // 更新畫面
  renderMovieList(getMoviesByPage(page))
})

searchForm.addEventListener('submit', function onSearchFormSubmitted(event) {
  // cancel prevent default action
  event.preventDefault()
  // get search keyword 
  const keyword = searchInput.value.trim().toLowerCase()
  // save filter movies 
  let filteredMovies = []

  // fail processing: input fail valid string
  if (!keyword.length) {
    return window.alert('Please enter a valid string')
  }

  // filter movies
  // map, filter, reduce
  filteredMovies = movies.filter((movie) => {
    movie.title.toLowerCase().includes(keyword)
  })

  // reset render movies
  if (filteredMovies.length === 0) {
    return window.alert('Cannot find movies with keyword: ' + keyword)
  }

  renderMovieList(filteredMovies)
})

axios.get(INDEX_URL)
  .then((response) => {
    movies.push( ... response.data.results)
    renderPaginator(movies.length)
    renderMovieList(getMoviesByPage(1))
  })
  .catch((error) => {
    console.log(error)
  })