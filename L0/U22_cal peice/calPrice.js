// Q: 一支筆50元, 一本筆記本50元。若購買5支筆、5本筆記本總共花多少錢？

// 加法計算:
// 50*5 + 50*5 => 250 + 250 = 500元


// 代數計算:
// 50x + 50y 元


// code: 

// 文具的價格:
let penceil = 50
let notebook = 50

// 購買的數量:
let penceilCount = 5
let notebookCount = 5

// 所需要的花費:
let total
total = penceil * penceilCount + notebook * notebookCount

console.log('文具的價格:')
console.log('Q: 一支筆50元, 一本筆記本50元。若購買5支筆、5本筆記本總共花多少錢？')
console.log(`${penceil} * ${penceilCount} + ${notebook} * ${notebookCount} = ${total}元`)