let milkTeaPrice = 55
let blackTeaPrice = 35
let budget = 50

if (budget >= milkTeaPrice) {
    budget = budget - milkTeaPrice
    console.log('立即買杯奶茶!')
} else if (budget >= blackTeaPrice) {
    budget = budget - blackTeaPrice
    console.log('改買一杯樸實的紅茶吧!')
} else {
    console.log('無奈地離開')
}

console.log(`錢包剩下 ${budget} 元`)
console.log('====================')


// 實作練習題:
// Q1實作練習題:
console.log('Q1實作練習題:輸出為何?')
let x = 5
if (x === 5)
    console.log('five')
else if (x > 1)
    console.log('x is bigger than 1')
else
    console.log('Nothing')

console.log('====================')

// Q2實作練習題
console.log('Q2實作練習題:驗證密碼, 密碼必須介於 4 ~ 8 個字元長度')

let password = '12345678'
console.log(`password: ${password} `)

if (password.length >= 4 && password.length <= 8)
    console.log('你的密碼已經設定成功')
else
    console.log('請設定 4 ~ 8 字元長度的密碼')

console.log('====================')

// Q3實作練習題
console.log('Q3實作練習題:會員折扣')

console.log('以下狀況不能在商城購物:')
console.log('未滿 18 歲、被加到黑名單')
console.log('給予折扣的條件，以下條件只需滿足一項就有折扣:')
console.log('擁有會員、或生日當天購物')

let today = '0425' // 假設今天的日期是 4 月 25 日
// 我的資料
let myBirthday = '0401'    // 生日為 4 月 1 日
let myAge = 19
let isMember = true        // 是否為會員
let isBlackListed = false  // 有沒有在黑名單裡

if (myAge < 18 || isBlackListed)
    console.log('根本無法在這裡買東西')
else if (myBirthday === today)
    console.log('生日優惠 75 折')
else if (isMember)
    console.log('會員優惠 95 折')
else
    console.log('沒有優惠，請用原價購買')

