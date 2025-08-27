// dom query
const noteContainer = document.querySelector('.content')
const createBtn = document.querySelector('button')

// handle create note
createBtn.addEventListener('click', () => {
  // create element
  const addNoteBox = document.createElement('div')
  const note = document.createElement('textarea')
  const deleteBtn = document.createElement('img')

  // add class and style
  addNoteBox.classList.add('add-note')
  note.cols = 50
  note.rows = 8
  deleteBtn.classList.add('delete-note')
  deleteBtn.src = 'images/delete.png'

  // append child
  noteContainer.appendChild(addNoteBox)
  addNoteBox.appendChild(note)
  addNoteBox.appendChild(deleteBtn)
})

// handle delete delete note
noteContainer.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    e.target.parentElement.remove()
  }
})
