// dom query
const generateBtn = document.querySelector('.generate')
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const tweet = document.querySelector('.tweet')

// handle click random quote
generateBtn.addEventListener('click', getRandomQuote)

// function random quote
async function getRandomQuote() {
  const response = await fetch(`https://quotes.domiadi.com/api`)
  // ubah menjadi json responsenya
  const data = await response.json()
  quote.textContent = data.quote
  author.textContent = data.from
}

// jalankan random quote
getRandomQuote()

// handle click tweet
tweet.addEventListener('click', () => {
  const tweetText = `${quote.textContent} --- ${author.textContent}`
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    tweetText
  )}`
  window.open(tweetUrl, '_blank')
})
