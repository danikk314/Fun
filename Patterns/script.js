const W1p1 = [5,6,10,14];
const W1p2 = [1,8,12,16];
const W1p3 = [1,13,10,16];
const W1p4 = [8,14,5,12];
const W1p5 = [8,10,17,6];
const W1p6 = [5,12,16,17];

const W2p1 = [14,16,9,12];
const W2p2 = [7,5,12,17];
const W2p3 = [1,14,16,17];
const W2p4 = [1,9,11,6];
const W2p5 = [7,3,11,12];
const W2p6 = [3,5,6,16];

const W3p1 = [1,2,3,11];
const W3p2 = [14,2,17,12];
const W3p3 = [2,7,11,12];
const W3p4 = [8,11,12,17];
const W3p5 = [1,2,3,14,];
const W3p6 = [14,3,5,12];

const W4p1 = [1,13,8,5];
const W4p2 = [1,13,14,5];
const W4p3 = [8,10,12,18];
const W4p4 = [1,8,10,12];
const W4p5 = [1,14,16,10];
const W4p6 = [14,16,18,5];

const W5p1 = [8,9,11,12];
const W5p2 = [8,9,15,5];
const W5p3 = [8,14,15,12];
const W5p4 = [1,12,11,10];
const W5p5 = [1,3,14,12];
const W5p6 = [1,3,5,10];

const W6p1 = [1,5,10,11];
const W6p2 = [1,2,6,16];
const W6p3 = [1,2,8,11];
const W6p4 = [11,18,16,15];
const W6p5 = [5,11,18,15];
const W6p6 = [8,15,10,6];

const W7p1 = [];
const W7p2 = [];
const W7p3 = [];
const W7p4 = [];
const W7p5 = [];
const W7p6 = [];

const W8p1 = [];
const W8p2 = [];
const W8p3 = [];
const W8p4 = [];
const W8p5 = [];
const W8p6 = [];

const W9p1 = [];
const W9p2 = [];
const W9p3 = [];
const W9p4 = [];
const W9p5 = [];
const W9p6 = [];

const W1 = [W1p1, W1p2, W1p3, W1p4, W1p5, W1p6];
const W2 = [W2p1, W2p2, W2p3, W2p4, W2p5, W2p6];
const W3 = [W3p1, W3p2, W3p3, W3p4, W3p5, W3p6];
const W4 = [W4p1, W4p2, W4p3, W4p4, W4p5, W4p6];
const W5 = [W5p1, W5p2, W5p3, W5p4, W5p5, W5p6];
const W6 = [W6p1, W6p2, W6p3, W6p4, W6p5, W6p6];

const W = [W1,W2,W3,W4,W5,W6];

let WI = 0;

let Feld = [];

function WasClicked(elem) {
    WI = document.getElementById('WorldI').value -1;
    elem.style.backgroundColor = "#cc2222";
    elem.classList.add("flipped");

    

    let FID = parseInt(elem.id.match(/\d+/)[0], 10);
    if (!Feld.includes(FID)) {
        Feld.push(FID);
    }

    for (let j = 0; j < W[WI].length; j++) {
        for (let i = 0; i < W[WI][j].length; i++) {
            if (!(Feld.includes(W[WI][j][i]))) {document.getElementById(`F${W[WI][j][i]}`).style.backgroundColor = "aliceblue";}
        }
    }

    for (let j = 0; j < W[WI].length; j++) {
        if (Feld.every(item => W[WI][j].includes(item))) {
            for (let i = 0; i < W[WI][j].length; i++) {
                if (!(Feld.includes(W[WI][j][i]))) {document.getElementById(`F${W[WI][j][i]}`).style.backgroundColor = "#cccc22";}
            }
        }
    }

    setTimeout(() => {
        for (let i = 0; i < Feld.length; i++) {
            document.getElementById(`F${Feld[i]}`).style.backgroundColor = "#cc2222";
        }
    }, 250);
}
