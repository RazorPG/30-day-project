// query selectors dom
const bitcoin = document.querySelector('.bitcoin-price')
const ethereum = document.querySelector('.ethereum-price')
const dogecoin = document.querySelector('.dogecoin-price')

// api key for coingecko
const API_KEY = 'CG-JvmzpWVUkwPDsmKGHuKzBTDv'

// fetch data from coingecko api
fetch(
  `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd&api_key=${API_KEY}`
)
  .then(response => response.json())
  .then(data => {
    bitcoin.innerHTML = `$${data.bitcoin.usd}`
    ethereum.innerHTML = `$${data.ethereum.usd}`
    dogecoin.innerHTML = `$${data.dogecoin.usd}`
  })
  .catch(error => console.error(error))
