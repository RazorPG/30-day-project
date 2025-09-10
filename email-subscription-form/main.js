// api ke google sheets
const scriptURL =
  'https://script.google.com/macros/s/AKfycbyy0pD2dVUgzz-6XOtLwK3TK4Iqe7IfDMeEBhwKAe5CWaLxa1fvbiadjmNDkiodswRa/exec'

// mengambil query form
const email = document.querySelector('#email')
const form = document.forms['submit-to-google-sheet']

// add event listener form submit
form.addEventListener('submit', e => {
  // tidak reset ketika submit
  e.preventDefault()
  // fetch api lalu post ke google sheets
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      const msg = document.querySelector('.msg')
      msg.classList.remove('hidden')
      email.value = ''
      setTimeout(() => {
        msg.classList.add('hidden')
      }, 5000)
      console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
})
