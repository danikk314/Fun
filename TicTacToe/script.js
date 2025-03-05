var Q = "X";
function clicken(element) {
    if (Q == "X") {
        element.style.color = "red";
        element.innerHTML = "X";
        Q = "0";
    }
    else if (Q == "0") {
        element.style.color = "blue";
        element.innerHTML = "0";
        Q = "X";
    }

    var F1 = document.getElementById("F1").innerHTML;
    var F2 = document.getElementById("F2").innerHTML;
    var F3 = document.getElementById("F3").innerHTML;
    var F4 = document.getElementById("F4").innerHTML;
    var F5 = document.getElementById("F5").innerHTML;
    var F6 = document.getElementById("F6").innerHTML;
    var F7 = document.getElementById("F7").innerHTML;
    var F8 = document.getElementById("F8").innerHTML;
    var F9 = document.getElementById("F9").innerHTML;

    if (F1 == F2 && F2 == F3) {
        if (F1 == "X") {
            Xwins()
        }
        else if (F1 == "0") {
            Owins()
        }
    }
    else if (F1 == F4 && F4 == F7) {
        if (F1 == "X") {
            Xwins()
        }
        else if (F1 == "0") {
            Owins()
        }
    }
    else if (F1 == F5 && F5 == F9) {
        if (F1 == "X") {
            Xwins()
        }
        else if (F1 == "0") {
            Owins()
        }
    }
    else if (F5 == F3 && F5 == F7) {
        if (F5 == "X") {
            Xwins()
        }
        else if (F5 == "0") {
            Owins()
        }
    }
    else if (F5 == F2 && F5 == F8) {
        if (F5 == "X") {
            Xwins()
        }
        else if (F5 == "0") {
            Owins()
        }
    }
    else if (F5 == F4 && F5 == F6) {
        if (F5 == "X") {
            Xwins()
        }
        else if (F5 == "0") {
            Owins()
        }
    }
    else if (F9 == F3 && F9 == F6) {
        if (F9 == "X") {
            Xwins()
        }
        else if (F9 == "0") {
            Owins()
        }
    }
    else if (F9 == F7 && F9 == F8) {
        if (F9 == "X") {
            Xwins()
        }
        else if (F9 == "0") {
            Owins()
        }
    }
}
function Xwins() {
    document.getElementById("text").innerHTML = "X-gewonnen";
    document.getElementById("text").style.color = "red";
    document.getElementById("text").style.opacity = 1;
}
function Owins() {
    document.getElementById("text").innerHTML = "0-gewonnen";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.opacity = 1;
}