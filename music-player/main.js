const player = document.querySelector('.player')
const audio = document.querySelector('#myAudio')
const trackAudio = document.querySelector('input')
const addTrack = document.querySelector('.addTrack')
const increaseTrack = document.querySelector('.increaseTrack')

// Play/pause functionality
player.addEventListener('click', () => {
  if (player.querySelector('i').classList.contains('fa-play')) {
    audio.play()
    player.querySelector('i').classList.remove('fa-play')
    player.querySelector('i').classList.add('fa-pause')
  } else {
    audio.pause()
    player.querySelector('i').classList.remove('fa-pause')
    player.querySelector('i').classList.add('fa-play')
  }
})

// Track audio progress
audio.addEventListener('timeupdate', () => {
  trackAudio.value = (audio.currentTime / audio.duration) * 100
})

// Seek in audio track
trackAudio.addEventListener('input', () => {
  const time = (trackAudio.value * audio.duration) / 100

  audio.currentTime = time
})

// event pengurangan track
addTrack.addEventListener('click', () => {
  const time = (trackAudio.value * audio.duration) / 100
  if (audio.currentTime <= time + 5) {
    audio.currentTime = time + 5
  }
})

// event penambahan track
increaseTrack.addEventListener('click', () => {
  const time = (trackAudio.value * audio.duration) / 100
  if (audio.currentTime >= time - 5) {
    audio.currentTime = time - 5
  }
})
