function dragstartHandler(ev) {
  ev.dataTransfer.setData('text', ev.target.id)
  console.log('dragstart')
}

function dragoverHandler(ev) {
  ev.preventDefault()
  console.log('dragover')
}

function dropHandler(ev) {
  ev.preventDefault()
  const data = ev.dataTransfer.getData('text')
  console.log(data)
  ev.target.appendChild(document.getElementById(data))
  console.log('drop')
}
