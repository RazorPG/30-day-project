// query selector dom
const inputTextOrURL = document.querySelector('input')
const QRCodeBtn = document.querySelector('button')
const imgQRCode = document.querySelector('img')

// handler click button generate QR Code
QRCodeBtn.addEventListener('click', () => {
  if (imgQRCode.classList.contains('hidden')) {
    imgQRCode.classList.remove('hidden')
  }
  // ubah source gambar dari img
  imgQRCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputTextOrURL.value}`
})

// handler untuk press button enter
inputTextOrURL.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    QRCodeBtn.click()
  }
})
