// query selector dom
const operation = document.querySelector('h1')
const rep = document.querySelectorAll('.rep')
const delIn = document.querySelector('.de')
const clearIn = document.querySelector('.ac')
const evalIn = document.querySelector('.eval')

// handler click buton calc
function clickButtonCalc(val) {
  console.log('button di klik')
  operation.textContent += val
}

// handler click submit input
function evalOperation(input) {
  operation.textContent = eval(input)
}

// lakukan perulangan sebanyak element dengan class rep
rep.forEach(r => {
  // lalu adakan event click
  r.addEventListener('click', () => {
    clickButtonCalc(r.textContent)
  })
})

// handler click saat delete input
delIn.addEventListener('click', () => {
  operation.textContent = operation.textContent.slice(
    0,
    operation.textContent.length - 1
  )
})

// handler click saat clear input
clearIn.addEventListener('click', () => {
  operation.textContent = ''
})

// handler click saat eval input
evalIn.addEventListener('click', () => {
  evalOperation(operation.textContent)
})
