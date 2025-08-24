// query selector dom
const input = document.querySelector('input')
const add = document.querySelector('.add')
const list = document.querySelector('ul')

// event untuk enter pada input
input.addEventListener('keypress', e => {
  e.key == 'Enter' ? add.click() : 0
})

// ketika klik tombol add
add.addEventListener('click', () => {
  // buat elemen li, button, span baru
  if (input.value == '') return
  const newList = document.createElement('li')
  const deleteList = document.createElement('button')
  const contentList = document.createElement('span')

  // isi nilai element baru yang telah dibuat
  contentList.textContent = input.value
  deleteList.textContent = '✖'

  // tambahkan element contentList dan deleteList ke newList
  newList.appendChild(contentList)
  newList.appendChild(deleteList)

  // tambahkan newList ke element list
  list.appendChild(newList)

  // kosongkan input
  input.value = ''
})

// event handle ketika element ul di klik
list.addEventListener('click', e => {
  // mengambilkan elemen paren dari elemnen yang diklik
  const listItem = e.target.closest('li')
  // jika tagname adalah button
  if (e.target.tagName === 'BUTTON') {
    // hapus li dari ul
    listItem.remove()
    // ketika li di klik
  } else if (listItem) {
    // tambahkan class checked jika belum ada dan hapus jika ada
    listItem.classList.toggle('checked')
    if (listItem.classList.contains('checked')) {
      listItem.style.setProperty('--checkbox-image', 'url(images/checked.png)')
    } else {
      listItem.style.setProperty(
        '--checkbox-image',
        'url(images/unchecked.png)'
      )
    }
  }
})
