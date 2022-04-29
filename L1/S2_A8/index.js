// 經典猜數字
// 指定介於1-100之間的數字，存在 answer 變數裡
// 設定一個 guess 變數，代表挑戰者(電腦)猜的數字
//     電腦可重複猜數字
//     比對 guess  和 answer 判斷太大或太小
// 若兩者相等(猜對)則結束遊戲，且結束時須計算電腦猜了幾次

// 規格: 

// 程式碼開頭先宣告三個變數:
//     answer : 正確數字
//     guess : 挑戰者(電腦)猜的數字
//     count : 當前回合數
// 程式執行的過程中，請用 console.log( ) 把猜數字的過程輸出到 console 裡觀察
// 運用 while 迴圈來讓電腦能持續猜數字，直到猜中時才跳出 while 迴圈
// 運用 if / else 來根據太大、太小、猜對等狀況，切換不同的流程
// 使用嚴格的 === 而非寬鬆的 ==

// ========= 宣告變數 ==========
let answer = Math.floor(Math.random() * 100) + 1 //正確答案
let guess = 0 //挑戰者猜的數字
let count = 0 //回合數

// ========= 從這裡開始 ==========
// 先印出正確數字
console.log(`正確數字為: ${answer}`)

// 設計判斷式和迴圈解決問題
while (answer !== guess) {
  
  // 挑戰者猜一個本回合的數字
  guess = Math.floor(Math.random() * 100) + 1                         
  // 回合數 + 1
  count++
  
  if (answer > guess) {
    console.log(`第${count}回合, 挑戰者猜${guess}, 莊家回答: 太小了`)
  } else if (answer < guess) {
    console.log(`第${count}回合, 挑戰者猜${guess}, 莊家回答: 太大了`)
  } else {
    console.log(`第${count}回合, 挑戰者猜${guess}, 莊家回答: 恭喜答對!`)
    break    
  }
}