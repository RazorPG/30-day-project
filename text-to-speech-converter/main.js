// memanggil global variabel speech
const synth = window.speechSynthesis

// dom query selector
const inputTxt = document.querySelector('textarea')
const voiceSelect = document.querySelector('select')
const btnListen = document.querySelector('button')

// simpan nilai pengisi suara
let voices

// fungsi mengambil suara yang tersedia
function loadVoices() {
  voices = synth.getVoices()
  for (const [i, voice] of voices.entries()) {
    const option = document.createElement('option')
    option.textContent = `${voice.name} (${voice.lang})`
    option.value = i
    voiceSelect.appendChild(option)
  }
}

// fungsi click event button lister
function handleSpeak(event) {
  event.preventDefault()

  const utterThis = new SpeechSynthesisUtterance(inputTxt.value)
  utterThis.voice = voices[voiceSelect.value]
  synth.speak(utterThis)
  inputTxt.blur()
}

// fungsi untuk menjalankan handleSpeak saat enter pada textarea
function handleEnterInput(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault()
    btnListen.click()
  }
}

// panggil fungsi loadvoices
loadVoices()
