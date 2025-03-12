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
    const Times = [
        { stunde: 0, minute: 0 },
        { stunde: 7, minute: 0 },
        { stunde: 7, minute: 45 },
        { stunde: 7, minute: 55 },
        { stunde: 8, minute: 40 },
        { stunde: 8, minute: 45 },
        { stunde: 9, minute: 30 },
        { stunde: 9, minute: 45 },
        { stunde: 10, minute: 30 },
        { stunde: 10, minute: 35 },
        { stunde: 11, minute: 20 },
        { stunde: 11, minute: 35 },
        { stunde: 12, minute: 20 },
        { stunde: 12, minute: 25 },
        { stunde: 13, minute: 10 },
        { stunde: 13, minute: 20 },
        { stunde: 14, minute: 5 },
        { stunde: 24, minute: 0 }
    ];
    function zeitInMinuten(zeit) {
        return zeit.stunde * 60 + zeit.minute;
    }
    function differenzInMinuten(zeit1, zeit2) {
        return Math.abs(zeitInMinuten(zeit2) - zeitInMinuten(zeit1));
    }
    function ZeitPbevor(Times) {
        let hI = -1;
        const currentTotalMinutes = hours * 60 + minutes; 
    
        for (let i = 0; i < Times.length; i++) {
            let zeitMinuten = Times[i].stunde * 60 + Times[i].minute;
            if (zeitMinuten <= currentTotalMinutes) {
                hI = i;
            }
        }
        return hI;
    }
    
    let hI = ZeitPbevor(Times);
    let jetzt = {stunde: hours, minute: minutes};
    let fullperiod = differenzInMinuten(Times[hI+1], Times[hI]);
    let Full = differenzInMinuten(jetzt, Times[hI]);
    let Rest = differenzInMinuten(Times[hI+1], jetzt);
    
    const schoolprogressPercent = (Full/fullperiod)*100;
    document.getElementById('SchoolprogressBar').style.width = schoolprogressPercent + '%';

    let schoolLefth = Math.floor(Rest/60);
    let schoolLeftm = Rest % 60;

    if (schoolLefth > 0) {
        document.getElementById('countdownSchool').innerHTML = 'in ' + schoolLefth + ':' + schoolLeftm + ':' + secondsLeft;
    }
    else if (schoolLeftm > 0) {
        document.getElementById('countdownSchool').innerHTML = 'in' + schoolLeftm + ':' + secondsLeft;
    } else {document.getElementById('countdownSchool').innerHTML = 'in ' + secondsLeft;}

    if (hI == 0) {
        document.getElementById('SchoolTitle').innerHTML = 'Neuer Schultag';
    } else if (hI < 3) {
        document.getElementById('SchoolTitle').innerHTML = 'Schulbeginn';
    } else if (hI<Times.length-2) {
        if ((hI % 2) == 1) {
        document.getElementById('SchoolTitle').innerHTML = 'Nächste Pause';
        } else {document.getElementById('SchoolTitle').innerHTML = 'Pause zu Ende';}
    } else {document.getElementById('SchoolTitle').innerHTML = 'Nächster Schultag'}
}
setInterval(updateClock, 1000);
updateClock();
