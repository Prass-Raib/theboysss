function tampilkanHalaman(id) {
    document.getElementById("halaman1").style.display = "none";
    document.getElementById("halaman2").style.display = "none";
  document.getElementById("halaman3").style.display = "none";
  document.getElementById("halaman4").style.display ="none";
  document.getElementById("halaman5").style.display ="none";
    document.getElementById(id).style.display = "block";
}