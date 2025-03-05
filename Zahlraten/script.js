var p = 0;
var zahl = Math.floor(Math.random() * 101);
var versuche = [];
function Try(number) {
    var text = document.getElementById("text");
    if (number < zahl  && !versuche.includes(number)) {
        document.getElementById("l1").innerHTML +=" <li>" + number + "</li>";
        versuche += number;
        text.innerHTML = number + " ist zu niedrig";
    }
    if (number > zahl && !versuche.includes(number)) {
        document.getElementById("l2").innerHTML +=" <li>" + number + "</li>";
        versuche += number;
        text.innerHTML = number + " ist zu hoch";
    }
    if (number == zahl) {
        text.innerHTML = "Richtig! " + number;
        p += 1;
        document.getElementById('punkte').innerHTML = "Punkte: " + p;
        document.getElementById('reset').style.opacity = 1;
    }
    document.getElementById("keineAhnung").value = "";
}
function reset() {
    document.getElementById('l1').innerHTML = "";
    document.getElementById('l2').innerHTML = "";
    zahl = Math.floor(Math.random() * 101);
    document.getElementById('reset').style.opacity = 0;
}