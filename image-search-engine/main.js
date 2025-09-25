// Unsplash API
const api_key = 'u0BGJIjPFG0mOn1ieFj2kMBR76EUUvOtJ7-xrbXnUdk'

// variabel
let indexPage = 1
let query = ''

// button submit
async function submitBtn(ev) {
  ev.preventDefault()

  // query selector
  const input = document.querySelector('input')
  const containerImage = document.querySelector('.image-container')

  // riset halaman dan gambar
  containerImage.innerHTML = ''
  try {
    // fetch data dari API
    const result = await fetch(
      `https://api.unsplash.com/search/photos?page=${indexPage}&query=${input.value}&per_page=9&client_id=${api_key}`
    )
    // konversi ke json
    const data = await result.json()
    totalPages = data.total_pages
    query = input.value
    input.value = ''

    // buat elemen gambar
    data.results.forEach(image => {
      const div = document.createElement('div')
      containerImage.appendChild(div)
      const img = document.createElement('img')
      img.src = image.urls.small
      img.alt = image.alt_description || 'Image from Unsplash'
      div.appendChild(img)

      // tampilkan tombol load more jika ada halaman lebih dari 1 dan indexPage kurang dari totalPages
      if (data.total_pages > 1 && indexPage < data.total_pages) {
        const moreButton = document.querySelector('#loadMoreBtn')
        moreButton.classList.remove('hidden')
      }
    })
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

// button load more
async function loadMore() {
  indexPage += 1
  const containerImage = document.querySelector('.image-container')
  try {
    // fetch data dari API
    const result = await fetch(
      `https://api.unsplash.com/search/photos?page=${indexPage}&query=${query}&per_page=9&client_id=${api_key}`
    )
    // konversi ke json
    const data = await result.json()

    // buat element gambar ke container
    data.results.forEach(image => {
      const div = document.createElement('div')
      containerImage.appendChild(div)
      const img = document.createElement('img')
      img.src = image.urls.small
      img.alt = image.alt_description || 'Image from Unsplash'
      div.appendChild(img)
    })
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
