function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const hoursStr = String(hours).padStart(2, '0');
    const minutesStr = String(minutes).padStart(2, '0');
    const secondsStr = String(seconds).padStart(2, '0');
    document.getElementById('clock').textContent = `${hoursStr}:${minutesStr}:${secondsStr}`;

    const hprogressPercent = (hours / 24) * 100;
    document.getElementById('hprogressBar').style.width = hprogressPercent + '%';
    const mprogressPercent = (minutes / 60) * 100;
    document.getElementById('mprogressBar').style.width = mprogressPercent + '%';
    const sprogressPercent = (seconds / 60) * 100;
    document.getElementById('sprogressBar').style.width = sprogressPercent + '%';

    const hoursLeft = 24 - hours;
    document.getElementById('countdownH').innerHTML = hoursLeft + ' hours left';
    const minutesLeft = 60 - minutes;
    document.getElementById('countdownM').innerHTML = minutesLeft + ' minutes left';
    const secondsLeft = 60 - seconds;
    document.getElementById('countdownS').innerHTML = secondsLeft + ' seconds left';

    //SchulTimer
    const aS = (hour*60*60)+(minutes*60)+seconds;
    
}

setInterval(updateClock, 1000);
updateClock();