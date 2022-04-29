// for loop:
for (let x = 5; x <= 20; x += 5) {
    console.log(x)
}
  
// 存錢使用while迴圈:
let money = 10000
let rate = 0.05
let year = 0
while (money < 15000) {
money = money + (money * rate) 
year++
}

console.log(`${year}`)