// Step 1. 宣告變數: 將題目當中的資料儲存到變數當中
// 宣告變數: 定義水果單價
let apple = 3
let orange = 4
let peach = 10

// 宣告變數: 買多少水果
let appleQuantity = 1
let orangeQuantity = 40
let peachQuantity = 2

// 宣告變數: 錢包裡有多少錢
let budget = 50

// Step 2. 計算加總金額: 將你的數學邏輯轉換成程式邏輯: 用變數以及運算子計算出結果
let total = (apple * appleQuantity) + 
            (orange * orangeQuantity) + 
            (peach * peachQuantity)

// Step 3. 輸出判斷結果
if (budget < total) {
  console.log(`你想要買的水果要花 ${total} 元, 而錢包裡有 ${budget} 元, 我們的錢不夠!`)
} else {
  console.log(`你想要買的水果要花 ${total} 元, 而錢包裡有 ${budget} 元, 我們的錢很夠!`)
}