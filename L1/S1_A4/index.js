// 虎哥和熊弟能連續玩 10 次擲骰子比大小
// 並計算每一局輸贏, 輸出結果 
// 同時在第 10 局結束後, 宣布最終勝利者

let tigerWinCount = 0
let bearWinCount = 0
let result = ''

for (let i = 1; i <= 10; i++) {
    let tiger = Math.floor(Math.random()*6) + 1
    let bear = Math.floor(Math.random()*6) + 1

    if (tiger > bear) {
        console.log(`第 ${i} 局 | 虎哥 ${tiger} 點 vs 熊弟 ${bear} | 本局虎哥獲勝`)
        tigerWinCount++
    } else if (tiger < bear) {
        console.log(`第 ${i} 局 | 虎哥 ${tiger} 點 vs 熊弟 ${bear} | 本局熊弟獲勝`)
        bearWinCount++
    } else {
        console.log(`第 ${i} 局 | 虎哥 ${tiger} 點 vs 熊弟 ${bear} | 本局平局`)
    }
}

console.log('--- 結果 ---')
console.log(`虎哥贏 ${tigerWinCount} 局`)
console.log(`熊弟贏 ${bearWinCount} 局`)
result = tigerWinCount > bearWinCount ? '虎哥' : '熊弟'
console.log(`最終冠軍: ${result}`)