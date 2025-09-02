// query selector dom
const pauseBtn = document.querySelector('.pause')
const playBtn = document.querySelector('.play')
const resetBtn = document.querySelector('.reset')
const hours = document.querySelector('.hour')
const minutes = document.querySelector('.minute')
const seconds = document.querySelector('.second')

// kondisi pause
let isPause = true

// handler click paly
playBtn.addEventListener('click', () => {
  isPause = false
})

// handler click pause
pauseBtn.addEventListener('click', () => {
  isPause = true
})

// handler click reset
resetBtn.addEventListener('click', () => {
  isPause = true
  hours.textContent = '00'
  minutes.textContent = '00'
  seconds.textContent = '00'
  secondsValue = 0
  minutesValue = 0
  hoursValue = 0
})

// nilai awal
let secondsValue = 0
let minutesValue = 0
let hoursValue = 0
// lakukan perulangan setiap 1 detik
setInterval(() => {
  // jika tidak pause
  if (!isPause) {
    // tambah nilai detik
    secondsValue++
    // jika detik = 60
    if (secondsValue === 60) {
      // reset dan tambah 1 menit
      secondsValue = 0
      minutesValue++
      // jika menit = 60
      if (minutesValue === 60) {
        // reset dan tambah 1 jam
        minutesValue = 0
        hoursValue++
        // jika jam = 24
        if (hoursValue === 24) {
          // reset jadi 0
          hoursValue = 0
        }
      }
    }
  }
  // ubah nilai span tidak detik
  seconds.textContent = secondsValue.toString().padStart(2, '0')
  minutes.textContent = minutesValue.toString().padStart(2, '0')
  hours.textContent = hoursValue.toString().padStart(2, '0')
}, 1000)
