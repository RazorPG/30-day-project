const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

setInterval(() => {
  const date = new Date()
  const hoursClock = date.getHours()
  const minutesClock = date.getMinutes()
  const secondClock = date.getSeconds()
  hours.textContent = hoursClock < 10 ? '0' + hoursClock : hoursClock
  minutes.textContent = minutesClock < 10 ? '0' + minutesClock : minutesClock
  seconds.textContent = secondClock < 10 ? '0' + secondClock : secondClock
}, 1000)
