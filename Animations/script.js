function startAnimation() {
  let bar = document.getElementById('Load');
  bar.style.animation = 'none'; // Animation zurücksetzen
  void bar.offsetWidth; // Reflow erzwingen, damit die Änderung greift
  bar.style.animation = 'loading 5s ease forwards'; // Animation neu starten
}
