const BASE_URL = 'https://lighthouse-user-api.herokuapp.com'
const INDEX_URL = BASE_URL + '/api/v1/users/'

const drivers = []  // 賽車手總清單
let filteredDrivers = [] // 搜尋清單

const driversPerPage = 12

const dataPanel = document.querySelector('#data-panel')
const searchForm = document.querySelector('#search-form')
const searchInput = document.querySelector('#search-input')
const paginator = document.querySelector('#paginator')

// Render drivers list
function renderDriversList(drivers) {
  let rawHTML = ''
  drivers.forEach((driver) => {
    rawHTML += `
    <div class="col-sm-3">
      <div class="mb-2">
        <div class="card">
          <img src="${driver.avatar}" class="card-img-top" alt="Driver Image">
            
          <div class="card-body">
            <h5 class="card-title">${driver.name} ${driver.surname}</h5>
          </div>
          <div class="card-footer">
            <!-- Button trigger modal -->
            <button 
              class="btn btn-primary 
              btn-show-driver" 
              data-bs-toggle="modal" 
              data-bs-target="#driverModal" 
              data-id="${driver.id}">
              More
            </button>
            <!-- Button trigger modal -->
            <button 
              class="btn btn-info btn-add-favorite" 
              data-id="${driver.id}">
              +
            </button>
          </div>
        </div>
      </div>
    </div>`

    dataPanel.innerHTML = rawHTML
  })
}

function renderPaginator(amount) {
  const numberOfPages = Math.ceil(amount / driversPerPage)

  let rawHTML = ''

  for (let page = 1; page <= numberOfPages; page++) {
    rawHTML += `<li class="page-driver"><a class="page-link" href="javascript:void(0)" data-page="${page}">${page}</li>`
  }

  paginator.innerHTML = rawHTML
}

function getDriversByPage(page) {
  const data = filteredDrivers.length ? filteredDrivers : drivers
  const startIndex = (page -1) * driversPerPage

  return data.slice(startIndex, startIndex + driversPerPage)
}

// show Driver Modal
function showDriverModal(id) {
  // get elements
  const modalImage = document.querySelector('.driver-modal-image')
  const modalDriverInfo = document.querySelector('.driver-modal-info')

  axios.get(INDEX_URL + id).then((response) => {
    const data = response.data

    // insert data into modal ui
    modalImage.innerHTML = `<img class="driver-image" src="${data.avatar}" alt="driver-image" class="img-fluid">`

    modalDriverInfo.innerHTML = `
      <p class="driver-age">age: ${data.age}</p>
      <p class="driver-gender">gender: ${data.gender}</p>
      <p class="driver-region">region: ${data.region}</p>
      <p class="driver-birthday">birthday: ${data.birthday}</p>
      <p class="driver-email">email: ${data.email}</p>`
  })
}

function addToFavorite(id) {
  let list = JSON.parse(localStorage.getItem('favoriteDrivers')) || []
  const driver = drivers.find((driver) => driver.id === id)

  if (list.some((driver) => driver.id === id)) {
    return alert('此賽車手已經在收藏清單中！')
  } else {
    return alert('此賽車手加入在收藏清單中！')
  }

  list.push(driver)
  localStorage.setItem('favoriteDrivers', JSON.stringify(list))
}

// listen to data panel
dataPanel.addEventListener('click', function onPanelClicked(event) {
  if (event.target.matches('.btn-show-driver')) {
    showDriverModal(event.target.dataset.id)
  } else if (event.target.matches('.btn-add-favorite')) {
    addToFavorite(Number(event.target.dataset.id))
  }
})

//listen to search form
searchForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const keyword = searchInput.value.trim().toLowerCase()

  filteredDrivers = drivers.filter( function (driver) {
    if (driver.name.toLowerCase().includes(keyword)) {
      return driver.name.toLowerCase().includes(keyword)
    } else if (driver.surname.toLowerCase().includes(keyword)) {
      return driver.surname.toLowerCase().includes(keyword)
    }
  })

  if (filteredDrivers.length === 0) {
    return alert(`您輸入的關鍵字： ${keyword} 沒有符合條件的賽車手，請再重新輸入!`)
  }

  renderPaginator(filteredDrivers.length)
  renderDriversList(getDriversByPage(1))
})

// listen to paginator
paginator.addEventListener('click', (event) => {
  if (event.target.tagName !== 'A') return

  const page = Number(event.target.dataset.page)
  renderDriversList(getDriversByPage(page))
})

// send request to index api
axios.get(INDEX_URL)
  .then((response) => {
    drivers.push(...response.data.results)
    renderPaginator(drivers.length)
    renderDriversList(getDriversByPage(1))
  })
  .catch((error) => {
    console.log(error)
  })


