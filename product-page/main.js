// fungsi untuk mengganti gambar produk berdasarkan pilihan warna
function changeImage(e) {
  document.querySelector('.product-image img').src = e.target.value
  console.log(e.target.value)
}
