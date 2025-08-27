// query selector dom
const generateBtn = document.querySelector('button')
const generatePassword = document.querySelector('input')
const copyPassword = document.querySelector('img')

// button generate password
generateBtn.addEventListener('click', () => {
  let result = ''
  for (let i = 0; i < 12; i++) {
    result += String.fromCharCode(Math.floor(Math.random() * 65 + 60))
  }
  generatePassword.value = result
})

// button copy password
copyPassword.addEventListener('click', () => {
  navigator.clipboard
    .writeText(generatePassword.value)
    .then(() => {
      alert('Password has been copied!')
    })
    .catch(err => {
      alert('Failed to copy password')
    })
})
