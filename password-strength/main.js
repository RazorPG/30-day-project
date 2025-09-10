function showPasswordStrength() {
  // query selector dom
  const root = document.querySelector(':root')
  const input = document.querySelector('input')
  const message = document.querySelector('.msg')

  // hapus class hidden untuk menampilkan message
  message.classList.remove('hidden')
  // logic hard medium and weak password
  if (input.value.length > 7) {
    message.textContent = 'Password is hard'
    root.style.setProperty('--message', 'green')
  } else if (input.value.length > 3) {
    message.textContent = 'Password is medium'
    root.style.setProperty('--message', 'yellow')
  } else if (input.value.length > 0) {
    message.textContent = 'Password is weak'
    root.style.setProperty('--message', 'red')
  } else if (input.value.length <= 0) {
    message.classList.add('hidden')
    root.style.setProperty('--message', 'red')
  }
}
