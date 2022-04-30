// 擲骰子比大小
// 功能:
// 1. 模擬擲骰子的行為，撰寫「比大小」的邏輯，最後輸出結果
// 2. 回應的結果會有 3 種情況，使用 console.log 將結果輸出到螢幕上

// (1) 虎哥贏了
// (2) 虎哥輸了
// (3) 平手

// 函式用法:
// Math.random(): 會隨機產生出0~1之間的小數
// Math.floor(): 將所有的小數無條件捨去到比自身小的最大整數
// 參考: https://ithelp.ithome.com.tw/articles/10197904

// 印出結果, 思考一下是否為自己所要的參數
//console.log(Math.random())
//console.log(Math.floor(Math.random()))

// 宣告變數:
// 由上可知random起始值為0~6(預設的值), 但因為骰子沒有0這個數值, 因此將結果 + 1
let tiger = Math.floor(Math.random() * 6) + 1
let bear = Math.floor(Math.random() * 6) + 1

console.log(`tiger骰子點數: ${tiger}, bear骰子點數: ${bear}`)

// 判斷:
if (tiger > bear)
  console.log('虎哥贏了')
else if (tiger < bear)
  console.log('虎哥輸了')
else
  console.log('平手')