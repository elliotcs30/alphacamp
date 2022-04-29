// A1. 神奇計算機
// Q: 依序從 0 加到 100，看看總數是多少?
// 分別用 for 和 while 迴圈來完成

// 使用 for 迴圈
let sum = 0;

for (let i = 0; i <= 100; i++) {
	sum += i
}
console.log(`${sum}`)


// 使用 while 迴圈
let sum2 = 0 // 設定總數，在未計算前的起始值為 0
let i2 = 0 // 設定計數器

// 請填入必要的程式碼
while (i2 <= 100) {
  sum2 += i2
  i2++
}
console.log(`${sum2}`)

// ==========================================
// A2: 遊戲體力分配策略
// 擁有 100 點體力, 每次要消耗 17 點體力。
// 分別用 while 和 for 來完成

// Q1. While - 如果投資所有的體力，總共可以玩幾場？
// 設置變數
let enery = 100
let count = 0

while (enery > 17) {
    enery -= 17
    count++
}

console.log(count);

// Q2. For - 如果限定自己只玩 3 次，最後會剩多少體力？
// 設置變數
let enery2 = 100
let count2 = 0

for (let i = 0; i < 3; i++) {
    enery2 -= 17
    count2++
}

console.log(enery2);





