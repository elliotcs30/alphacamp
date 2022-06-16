const BASE_URL = 'https://movie-list.alphacamp.io'
const INDEX_URL = BASE_URL + '/api/v1/movies/'
const POSTER_URL = BASE_URL + '/posters/'

const movies = []

const dataPanel = document.querySelector('#data-panel')

function renderMovieList(data) {
  let rawHTML = ''

  // processing
  data.forEach((item) => {
    // title, image
    rawHTML += `<div class="col-sm-3">
        <div class="mb-2">
          <div class="card">
            <img src="${POSTER_URL + item.image}" class="card-img-top" alt="Movie Poster">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary btn-show-movie" data-bs-toggle="modal" data-bs-target="#movie-model">More</button>
              <button class="btn btn-info btn-add-favorite" >+</button>
            </div>
          </div>
        </div>
      </div>`
  })

  dataPanel.innerHTML = rawHTML
}

axios
  .get(INDEX_URL)
  .then((response) => {
    movies.push( ... response.data.results)
    renderMovieList(movies)
  })
  .catch((error) => {
    console.log(error)
  })