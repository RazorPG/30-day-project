// dom query
const containerToast = document.querySelector('.container-notification')
const successBtn = document.querySelector('#success')
const errorBtn = document.querySelector('#error')
const invalidBtn = document.querySelector('#invalid')

// function handle toast
const showToast = (msg, icon, color) => {
  // create element
  const box = document.createElement('div')
  const i = document.createElement('i')
  const span = document.createElement('span')

  // add class
  box.classList.add('notification', color)
  i.classList.add(...icon.split(' '))

  // textcontent dari span
  span.textContent = msg

  // include element
  box.appendChild(i)
  box.appendChild(span)
  containerToast.appendChild(box)

  // hapus box setelah 5 detik
  setTimeout(() => box.remove(), 5000)
}

// handle click success
successBtn.addEventListener('click', () => {
  showToast('successfully submitted', 'fas fa-check-circle', 'success')
})

// handle click error
errorBtn.addEventListener('click', () => {
  showToast('Please fix the error!', 'fas fa-times-circle', 'error')
})

// handle click invalid
invalidBtn.addEventListener('click', () => {
  showToast('Invalid input check again', 'fas fa-exclamation-circle', 'invalid')
})
