// query selector dom
const darkMode = document.querySelector('.darkmode')

// handle click darkmode
darkMode.addEventListener('click', () => {
  darkMode.querySelector('img').src = darkMode
    .querySelector('img')
    .src.includes('moon.png')
    ? 'images/sun.png'
    : 'images/moon.png'

  // :root di style
  const root = document.documentElement.style
  // mengganti nilai properti --dark-color
  root.setProperty(
    '--dark-color',
    getComputedStyle(document.documentElement).getPropertyValue(
      '--dark-color'
    ) === '#1a1a1a'
      ? '#ffffff'
      : '#1a1a1a'
  )

  // mengganti nilai properti --light-color
  root.setProperty(
    '--light-color',
    getComputedStyle(document.documentElement).getPropertyValue(
      '--light-color'
    ) === '#ffffff'
      ? '#1a1a1a'
      : '#ffffff'
  )
})
