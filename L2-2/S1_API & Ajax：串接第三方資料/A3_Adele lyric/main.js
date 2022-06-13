// DEFAULT CODE ////////////////////////
const BASE_URL = 'https://lyric-api-403c0.firebaseio.com/'
const songList = document.querySelector('#song-list')
const lyricsPanel = document.querySelector('#lyrics-panel')
const album = {
  artist: 'Adele',
  album: '25',
  tracks: [
    'Hello',
    'Send My Love (To Your New Lover)',
    'I Miss You',
    'When We Were Young',
    'Remedy',
    'Water Under the Bridge',
    'River Lea',
    'Love in the Dark',
    'Million Years Ago',
    'All I Ask',
    'Sweetest Devotion'
  ]
}

// WRITE YOUR CODE ////////////////////////
// 先將歌單依序建立
for (let i = 0; i < album.tracks.length; i++) {
  let list = document.createElement('li')

  list.innerHTML = `
    <a class="nav-link" id="v-pills-${i}" data-bs-toggle="pill" data-bs-target="#v-pills-${i}" type="button" role="tab" aria-selected="false">
      ${album.tracks[i]}
    </a>`

  songList.appendChild(list)
}

// 點選當前的歌單按鈕
songList.addEventListener('click', (event) => {
  // 當前點擊的目標
  const target = event.target
  // 抓取當前點擊按鈕的文字
  const song = target.innerText

  // 使用歌詞API抓取當前選擇的歌詞
  axios.get(`${BASE_URL}Adele/${song}.json`)
    .then((response) => {
      // 成功返回的歌詞
      const lyrics = response.data.lyrics
      // 將歌詞資料放入右側區塊
      lyricsPanel.innerHTML = `
        <h2>${song}</h2>
        <pre id="${target.id}">${lyrics}</pre>`
    })
    .catch((error) => {
      // 顯示錯誤
      console.log(error)
    })
})


