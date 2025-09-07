// dom selector
const form = document.querySelector('form')
const inputs = document.querySelectorAll('.input')

// handle click
form.addEventListener('submit', e => {
  e.preventDefault()

  let hasError = false
  inputs.forEach(i => {
    if (!i.querySelector('span').classList.contains('hidden')) {
      i.querySelector('span').classList.add('hidden')
    }
    if (hasError) return
    const input = i.querySelector('input')
    const textarea = i.querySelector('textarea')
    if (
      (!input || !input.value.length) &&
      (!textarea || !textarea.value.length)
    ) {
      i.querySelector('span').classList.remove('hidden')
      hasError = true
    } else {
      i.querySelector('span').classList.add('hidden')
    }
  })

  // jika error hapus hidden pada span
  if (hasError) {
    document.querySelector('.error span').classList.remove('hidden')
  }
  // jika tidak tampilkan pesan error
  else {
    document.querySelector('.error span').classList.add('hidden')
  }
})

// lakukan perulangan dan setiap perulangan ada event input
inputs.forEach(i => {
  i.addEventListener('input', () => {
    const input = i.querySelector('input')
    const textarea = i.querySelector('textarea')
    // jika input kosong atau textarea kosnog
    if (
      (!input || !input.value.length) &&
      (!textarea || !textarea.value.length)
    ) {
      // hapus class hidden
      i.querySelector('span').classList.remove('hidden')
    }
    // jika tidak tampilkan pesan error
    else {
      i.querySelector('span').classList.add('hidden')
    }
  })
})
