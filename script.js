function tampilkanHalaman(id) {
  const semuaHalaman = document.querySelectorAll('[id^="halaman"]');
  semuaHalaman.forEach(hal => {
    hal.style.display = 'none';
    hal.classList.remove('animasi-masuk');
  });

  const halamanTampil = document.getElementById(id);
  halamanTampil.style.display = 'block';
  
  void halamanTampil.offsetWidth;

  halamanTampil.classList.add('animasi-masuk');
}
