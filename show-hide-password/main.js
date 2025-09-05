// query selector dom
const input = document.querySelector('input')
const toggleShowHideInput = document.querySelector('img')

// handle click show password
toggleShowHideInput.addEventListener('click', () => {
  input.type = input.classList.contains('hidden') ? 'text' : 'password'
  toggleShowHideInput.src = input.classList.contains('hidden')
    ? 'images/eye-open.png'
    : 'images/eye-close.png'
  input.classList.toggle('hidden')
})
