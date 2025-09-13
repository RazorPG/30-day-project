// dom query selector
const arrow = document.querySelector('.arrow')
const root = document.documentElement.style

function handlerDragArrow(e) {
  const container = document.querySelector('.img-box')
  // nilai offset container dari window
  let containerOffsetLeft = container.offsetLeft
  // relative posisi x cursor
  let pointerRelativeXpos = e.clientX - containerOffsetLeft
  // panjang width container
  let boxWidth = container.offsetWidth
  // mendapatkan persentase width
  let newValue = (pointerRelativeXpos / boxWidth) * 100
  // handler untuk kurang dari 0 dan lebih dari 100
  newValue = newValue < 0 ? 0 : newValue > 100 ? 100 : newValue

  root.setProperty('--width', newValue + '%')
}
