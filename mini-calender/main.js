const date = new Date()

// Select elements
const dateNumber = document.querySelector('.date-number')
const dateDay = document.querySelector('.date-day')
const month = document.querySelector('.month')
const year = document.querySelector('.year')

// set elements to current date
dateNumber.textContent = date.toLocaleString('en', { day: '2-digit' })
dateDay.textContent = date.toLocaleString('en', { weekday: 'long' })
month.textContent = date.toLocaleString('en', { month: 'long' })
year.textContent = date.toLocaleString('en', { year: 'numeric' })
