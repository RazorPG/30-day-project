// query selector dom
const submit = document.querySelector('.submit')
const popup = document.querySelector('.popup')
const ok = document.querySelector('.ok')

// handler klik submit
submit.addEventListener('click', () => {
  popup.classList.remove('hidden')
})

// handler klik ok
ok.addEventListener('click', () => {
  popup.classList.add('hidden')
})
