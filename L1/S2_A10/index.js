// ========= 宣告變數 ==========
// 預設範圍最大值、最小值
let min = 1
let max = 100

let answer = Math.floor(Math.random() * 100) + 1 //正確答案
let guess = 0 //挑戰者猜的數字
let count = 0 //回合數

// ========= 從這裡開始 ==========
// 先印出正確數字
console.log(`正確數字為: ${answer}`)

// 設計判斷式和迴圈解決問題
while (answer !== guess) {
  
  // 挑戰者猜一個本回合的數字
  guess = Math.floor( (max - min) / 2) + min

  // 回合數 + 1
  count++
  
  if (answer > guess) {
    console.log(`第${count}回合, 挑戰者猜${guess}, 莊家回答: 太小了`)
    min = guess + 1
  } else if (answer < guess) {
    console.log(`第${count}回合, 挑戰者猜${guess}, 莊家回答: 太大了`)
    max = guess
  } else {
    console.log(`第${count}回合, 挑戰者猜${guess}, 莊家回答: 恭喜答對!`)
    break    
  }
}