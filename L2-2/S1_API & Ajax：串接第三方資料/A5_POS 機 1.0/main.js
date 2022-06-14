// ======= default data =======
const menu = document.querySelector('#menu')
const cart = document.querySelector('#cart')
const totalAmount = document.querySelector('#total-amount')
const button = document.querySelector('#submit-button')

// 菜單資料
const productData = [
  {
    id: 'product-1',
    imgUrl: 'https://images.unsplash.com/photo-1558024920-b41e1887dc32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name: '馬卡龍',
    price: 90
  }, {
    id: 'product-2',
    imgUrl: 'https://images.unsplash.com/photo-1560691023-ca1f295a5173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name: '草莓',
    price: 60
  }, {
    id: 'product-3',
    imgUrl: 'https://images.unsplash.com/photo-1568271675068-f76a83a1e2d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name: '奶茶',
    price: 100
  }, {
    id: 'product-4',
    imgUrl:
      'https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name: '冰咖啡',
    price: 180
  }
]

// ======= 想法 =======
// 1. 先將菜單品項依序列出
// 2. 點擊加入購物車按鈕，將品項加入購物車清單
// 3. 將每筆金額依序加總
// 4. 送出訂單後，顯示總金額
// 5. 關閉視窗後清除購物車清單，且將總金額歸零
// 6. 發覺點到按鈕外時，會加入NaN的品項，因此需在加入判斷

// 1.先將菜單品項使用for迴圈依序列出
for (let i = 0; i < productData.length; i++) {
  menu.innerHTML += `
    <div class="col-3">
      <div class="card">
        <img src="${productData[i].imgUrl}" class="card-img-top" alt="${productData[i].name}">
        <div class="card-body">
          <h5 class="card-title">${productData[i].name}</h5>
          <p class="card-text">${productData[i].price}</p>
          <a href="#" class="btn btn-primary order-list-btn">加入購物車</a>
        </div>
      </div>
    </div>`
}

// 設定一變數為總金額
let totalPrice = 0

menu.addEventListener('click', function (event) {
  const target = event.target
  const item = target.parentNode
  const itemName = item.children[0].innerText
  const itemPrice = Number(item.children[1].innerText)

  if (target.classList.contains('order-list-btn')) {
    cart.innerHTML += `
      <li class="list-group-item">
        ${itemName} X 1 小計：${itemPrice}
      </li>
    `

    totalPrice += itemPrice
    totalAmount.innerText = totalPrice
  }

})

button.addEventListener('click', function (event) {
  window.alert(`感謝購買\n總金額：${totalAmount.innerText}`)

  cart.innerHTML = ''
  totalPrice = 0
  totalAmount.innerText = '--'
})