// element query
const searchInput = document.querySelector('input')
const buttonInput = document.querySelector('button')
const card = document.querySelector('#card')

// klik enter pada input
searchInput.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    buttonInput.click()
  }
})
buttonInput.addEventListener('click', async () => {
  // hapus jika ada sebelumnya
  if (document.querySelector('#content')) {
    document.querySelector('#content').remove()
  }

  const content = document.createElement('div')
  content.id = 'content'
  // tambahkan element ke dalam card
  card.appendChild(content)
  // fetch api cuaca
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=f3621279f1b64370bad235754252208&q=${searchInput.value}&aqi=no`
  )

  // ubah menjadi json responsenya
  const result = response.json()

  // menunggu hasil response
  const data = await result

  // create element yang dibutuhkan
  const img = document.createElement('img')
  const divInfo = document.createElement('div')
  divInfo.className = 'info-celcius'
  const divInfo2 = document.createElement('div')
  divInfo2.className = 'info-more'
  const celcius = document.createElement('h1')
  const location = document.createElement('h2')
  const humidity = document.createElement('div')
  humidity.className = 'more'
  const wind = document.createElement('div')
  wind.className = 'more'

  // isi content element yang telah dibuat
  celcius.innerText = `${data.current.temp_c}°C`
  location.innerText = `${data.location.name}`

  const condition = data.current.condition.text.toLowerCase()
  let weatherImage = 'clear.png'
  // menentukan icon dari weather
  if (condition.includes('cloud')) {
    weatherImage = 'clouds.png'
  } else if (condition.includes('rain')) {
    weatherImage = 'rain.png'
  } else if (condition.includes('drizzle')) {
    weatherImage = 'drizzle.png'
  } else if (condition.includes('snow')) {
    weatherImage = 'snow.png'
  } else if (condition.includes('mist') || condition.includes('fog')) {
    weatherImage = 'mist.png'
  }

  img.src = `images/${weatherImage}`

  humidity.innerHTML = `
  <img src='images/humidity.png'/>
  <div>
  <span>
  ${data.current.humidity}%
  </span>
  <p>Humidity</p>
  </div>`

  wind.innerHTML = `
  <img src='images/wind.png' />
  <div>
    <span>
    ${data.current.wind_kph} km/h
    </span>
    <p>Wind Speed</p>
  </div>`

  // tambahkan element yang telah dibuat
  content.appendChild(img)
  content.appendChild(divInfo)
  content.appendChild(divInfo2)
  divInfo.appendChild(celcius)
  divInfo.appendChild(location)
  divInfo2.appendChild(humidity)
  divInfo2.appendChild(wind)

  // kosong input setelah handler berakhir
  searchInput.value = ''
})
