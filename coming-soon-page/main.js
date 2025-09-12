// variabel waktu
const times = {
  seconds: 5,
  minutes: 1,
  hours: 0,
  days: 1,
}

// dom query selector
const seconds = document.querySelector('.seconds')
const minutes = document.querySelector('.minutes')
const hours = document.querySelector('.hours')
const days = document.querySelector('.days')

// interval waktu coming soon
const intervalComingSoon = setInterval(() => {
  --times.seconds
  if (times.seconds == 0 && times.minutes > 0) {
    times.seconds = 59
    --times.minutes
  } else if (times.minutes == 0 && times.seconds == 0 && times.hours > 0) {
    times.seconds = 59
    times.minutes = 59
    --times.hours
  } else if (
    times.hours == 0 &&
    times.minutes == 0 &&
    times.seconds == 0 &&
    times.days > 0
  ) {
    times.seconds = 59
    times.minutes = 59
    times.hours = 23
    --times.days
  } else if (
    times.days == 0 &&
    times.hours == 0 &&
    times.minutes == 0 &&
    times.seconds == 0
  ) {
    clearInterval(intervalComingSoon)
  }

  seconds.textContent = times.seconds
  minutes.textContent = times.minutes
  hours.textContent = times.hours
  days.textContent = times.days
}, 1000)
