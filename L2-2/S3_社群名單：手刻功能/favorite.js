const BASE_URL = 'https://lighthouse-user-api.herokuapp.com'
const INDEX_URL = BASE_URL + '/api/v1/users/'

// 收藏清單
const drivers = JSON.parse(localStorage.getItem('favoriteDrivers')) || {}
const dataPanel = document.querySelector('#data-panel')

function renderDriverList(data) {
  let rawHTML = ''

  data.forEach((driver) => {
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
              class="btn btn-danger btn-remove-favorite" 
              data-id="${driver.id}">
              X
            </button>
          </div>
        </div>
      </div>
    </div>`

    dataPanel.innerHTML = rawHTML
  })
}

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

function removeFromFavorite(id) {
  if (!drivers) return

  const driverIndex = drivers.findIndex(driver => driver.id === id)
  if (driverIndex === -1) return

  drivers.splice(driverIndex, 1)
  localStorage.setItem('favoriteDrivers', JSON.stringify(drivers))
  renderDriverList(drivers)
}

// listen to data panel
dataPanel.addEventListener('click', (event) => {
  const target = event.target
  
  if (target.matches('.btn-show-driver')) {
    showDriverModal(Number(target.dataset.id))
  } else if (target.matches('.btn-remove-favorite')) {
    removeFromFavorite(Number(target.dataset.id))
  }
})

renderDriverList(drivers)