function blurchange(elem) {
  let x = elem.value;
  document.getElementById('Gif').style.filter = `blur(${x}px);`;
}
