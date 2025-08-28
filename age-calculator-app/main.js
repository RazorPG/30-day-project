const container = document.querySelector('.container')
const calculateBtn = document.querySelector('button')
const inputDate = document.querySelector('input')
const conclusion = document.querySelector('P')
const highlightAge = document.querySelectorAll('.highlight')

let isConclusion = false

calculateBtn.addEventListener('click', () => {
  const timeNow = new Date()
  const dateNow = timeNow.getDate()
  const monthNow = timeNow.getMonth()
  const yearNow = timeNow.getFullYear()
  isConclusion = true

  if (isConclusion) document.querySelector('p').classList.remove('hidden')

  console.log(inputDate.value)
  let ageDate = dateNow - new Date(inputDate.value).getDate()
  let ageMonth = monthNow - new Date(inputDate.value).getMonth()
  let ageYear = yearNow - new Date(inputDate.value).getFullYear()
  if (ageDate < 0) {
    ageDate = 30 + ageDate
    ageMonth -= 1
  }
  if (ageMonth < 0) {
    ageMonth = 12 + ageMonth
    ageYear -= 1
  }

  const age = [ageYear, ageMonth, ageDate]
  highlightAge.forEach((s, i) => (s.textContent = age[i]))
})
