// 請寫一支程式, 給定一個整數, 判斷這個整數是否為偶數

// 演算法設計:
// 虛擬碼(Pseudocode)

// 設一變數為x, 並賦予一個整數

// IF x 能被 2整除
//   回傳結果為 true
// ELSE
//   回傳結果為 false
// END IF

let x = 0

if (x % 2 === 0) {
    console.log('true')
} else {
    console.log('false')
}

// 函式版
function isEven (number) {
  return number % 2 === 0
}

console.log(isEven(0))
console.log(isEven(1))
console.log(isEven(2))
console.log(isEven(3))