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
    }
    document.getElementById("keineAhnung").value = "";
}