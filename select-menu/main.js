function toggleMenu() {
  const arrow = document.querySelector('.arrow')
  const menuActive = document.querySelector('.menu p')
  arrow.classList.toggle('rotate')

  const list = document.querySelector('ul')
  const listMenu = document.querySelectorAll('li')
  listMenu.forEach(item => {
    item.addEventListener('click', function () {
      menuActive.textContent = item.textContent
      arrow.classList.remove('rotate')
      list.classList.add('hide')
      return
    })
  })
  list.classList.toggle('hide')
}
