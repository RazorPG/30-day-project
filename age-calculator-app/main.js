// dom query
const container = document.querySelector('.container')
const calculateBtn = document.querySelector('button')
const inputDate = document.querySelector('input')
const conclusion = document.querySelector('P')
const highlightAge = document.querySelectorAll('.highlight')

// tampilkan kesimpulan
let isConclusion = false

// handler ketika klik button calculate
calculateBtn.addEventListener('click', () => {
  // mengambil waktu saat ini
  const timeNow = new Date()
  const dateNow = timeNow.getDate()
  const monthNow = timeNow.getMonth() + 1
  const yearNow = timeNow.getFullYear()
  // tampilkan kesimpulan
  isConclusion = true

  // jika sudah tampil maka hapus class hidden
  if (isConclusion) document.querySelector('p').classList.remove('hidden')

  // memncari nilai days, months, and year untuk mengentahui umur
  let ageDate = dateNow - new Date(inputDate.value).getDate()
  let ageMonth = monthNow - new Date(inputDate.value).getMonth() + 1
  let ageYear = yearNow - new Date(inputDate.value).getFullYear()
  if (ageDate < 0) {
    ageDate = dayInMonth(ageYear, ageMonth) + ageDate
    ageMonth -= 1
  }
  if (ageMonth < 0) {
    ageMonth = 12 + ageMonth
    ageYear -= 1
  }
  // jadikan array
  const age = [ageYear, ageMonth, ageDate]
  // lakukan perulangan sebanyak span yang ada di p
  highlightAge.forEach(
    (s, i) =>
      // ubah valuenya menjadi age berdasarkan index
      (s.textContent = age[i])
  )
})

function dayInMonth(year, month) {
  return new Date(year, month, 0).getDate()
}
