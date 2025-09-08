function handleButtonScrollGallery(type) {
  const containerGallery = document.querySelector('.container-gallery')

  if (type == 'back') {
    containerGallery.scrollLeft -= 750
  } else {
    containerGallery.scrollLeft += 750
  }
}
