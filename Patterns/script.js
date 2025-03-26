const p1 = [5, 8, 12, 14];
const p2 = [1, 10, 14, 16];
const p3 = [5, 12, 16, 17];
const p4 = [3, 7, 11, 12];
const p5 = [1, 14, 16, 17];

const p = [p1, p2, p3, p4, p5];
let Feld = [];

function WasClicked(elem) {
    elem.style.backgroundColor = "#cc2222";
    elem.classList.add("flipped");

    

    let FID = parseInt(elem.id.match(/\d+/)[0], 10);
    if (!Feld.includes(FID)) {
        Feld.push(FID);
    }

    for (let j = 0; j < p.length; j++) {
        for (let i = 0; i < p[j].length; i++) {
            if (!(Feld.includes(p[j][i]))) {document.getElementById(`F${p[j][i]}`).style.backgroundColor = "aliceblue";}
        }
    }

    for (let j = 0; j < p.length; j++) {
        if (Feld.every(item => p[j].includes(item))) {
            for (let i = 0; i < p[j].length; i++) {
                if (!(Feld.includes(p[j][i]))) {document.getElementById(`F${p[j][i]}`).style.backgroundColor = "#cccc22";}
            }
        }
    }

    setTimeout(() => {
        for (let i = 0; i < Feld.length; i++) {
            document.getElementById(`F${Feld[i]}`).style.backgroundColor = "#cc2222";
        }
    }, 250);
}
