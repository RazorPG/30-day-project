const root = document.querySelector(':root')
const percentage = document.querySelector('.number').innerText
root.style.setProperty('--percentage', 440 - (440 * parseInt(percentage)) / 100)
console.log(root.style.getPropertyValue('--percentage'))
