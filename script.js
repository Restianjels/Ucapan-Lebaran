function showSurprise() {
  var surpriseBox = document.getElementById("surprise-box");

  // Tampilkan efek kejutan
  surpriseBox.style.opacity = "1";

  let text = document.querySelector(".final-text");
  setTimeout(() => {
      text.style.opacity = "1";
  }, 1000); // Efek muncul setelah 1 detik
}