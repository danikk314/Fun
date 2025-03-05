let x = 0;
function updateClock() {
    x += 1;
    if (x > 100) {
        x = 0;
    }
    const spb = (x/100)*100;
    document.getElementById('loadingbar').style.width = spb + '%';
    document.getElementById('loadingbar').style.height = spb + '%';
    document.getElementById('loadingbar').style.rotate = (spb*3.60) + 'deg';
}

setInterval(updateClock, 100);
updateClock();