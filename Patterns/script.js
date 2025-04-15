const W1p1 = [5,6,10,14]; const W1a1 = [1,2,1,2];
const W1p2 = [1,8,12,16]; const W1a2 = [2,1,2,1];
const W1p3 = [1,10,13,16]; const W1a3 = [2,1,2,1];
const W1p4 = [5,8,12,14]; const W1a4 = [2,1,1,2];
const W1p5 = [6,8,10,17]; const W1a5 = [1,2,1,2];
const W1p6 = [5,12,16,17]; const W1a6 = [1,2,1,2];

const W2p1 = [9,12,14,16]; const W2a1 = [1,2,1,2];
const W2p2 = [5,7,12,17]; const W2a2 = [2,1,2,1];
const W2p3 = [1,14,16,17]; const W2a3 = [2,1,2,1];
const W2p4 = [1,6,9,11]; const W2a4 = [2,1,1,2];
const W2p5 = [3,7,11,12]; const W2a5 = [1,1,2,2];
const W2p6 = [3,5,6,16]; const W2a6 = [1,2,1,2];

const W3p1 = [1,2,3,11]; const W3a1 = [2,1,1,2];
const W3p2 = [2,12,14,17]; const W3a2 = [1,1,2,2];
const W3p3 = [2,7,11,12]; const W3a3 = [1,2,2,1];
const W3p4 = [8,11,12,17]; const W3a4 = [1,2,1,2];
const W3p5 = [1,2,3,14]; const W3a5 = [2,1,1,2];
const W3p6 = [3,5,12,14]; const W3a6 = [1,2,1,2];

const W4p1 = [1,5,8,13]; const W4a1 = [1,2,2,1];
const W4p2 = [1,5,13,14]; const W4a2 = [2,2,1,1];
const W4p3 = [8,10,12,18]; const W4a3 = [2,1,2,1];
const W4p4 = [1,8,10,12]; const W4a4 = [1,2,1,2];
const W4p5 = [1,10,14,16]; const W4a5 = [2,1,1,2];
const W4p6 = [5,14,16,18]; const W4a6 = [2,1,2,1];

const W5p1 = [8,9,11,12]; const W5a1 = [1,2,1,2];
const W5p2 = [5,8,9,15]; const W5a2 = [1,1,2,2];
const W5p3 = [8,12,14,15]; const W5a3 = [1,2,1,2];
const W5p4 = [1,10,11,12]; const W5a4 = [1,2,1,2];
const W5p5 = [1,3,12,14]; const W5a5 = [1,2,2,1];
const W5p6 = [1,3,5,10]; const W5a6 = [1,2,1,2];

const W6p1 = [1,5,10,11]; const W6a1 = [1,1,2,2];
const W6p2 = [1,2,6,16]; const W6a2 = [1,2,2,1];
const W6p3 = [1,2,8,11]; const W6a3 = [1,2,1,2];
const W6p4 = [11,15,16,18]; const W6a4 = [2,1,1,2];
const W6p5 = [5,11,15,18]; const W6a5 = [1,2,1,2];
const W6p6 = [6,8,10,15]; const W6a6 = [2,1,2,1];

const W7p1 = []; const W7a1 = [];
const W7p2 = []; const W7a2 = [];
const W7p3 = []; const W7a3 = [];
const W7p4 = []; const W7a4 = [];
const W7p5 = []; const W7a5 = [];
const W7p6 = []; const W7a6 = [];

const W8p1 = []; const W8a1 = [];
const W8p2 = []; const W8a2 = [];
const W8p3 = []; const W8a3 = [];
const W8p4 = []; const W8a4 = [];
const W8p5 = []; const W8a5 = [];
const W8p6 = []; const W8a6 = [];

const W9p1 = []; const W9a1 = [];
const W9p2 = []; const W9a2 = [];
const W9p3 = []; const W9a3 = [];
const W9p4 = []; const W9a4 = [];
const W9p5 = []; const W9a5 = [];
const W9p6 = []; const W9a6 = [];

const W1 = [W1p1, W1p2, W1p3, W1p4, W1p5, W1p6];
const W2 = [W2p1, W2p2, W2p3, W2p4, W2p5, W2p6];
const W3 = [W3p1, W3p2, W3p3, W3p4, W3p5, W3p6];
const W4 = [W4p1, W4p2, W4p3, W4p4, W4p5, W4p6];
const W5 = [W5p1, W5p2, W5p3, W5p4, W5p5, W5p6];
const W6 = [W6p1, W6p2, W6p3, W6p4, W6p5, W6p6];

const Wa1 = [W1a1, W1a2, W1a3, W1a4, W1a5, W1a6];
const Wa2 = [W2a1, W2a2, W2a3, W2a4, W2a5, W2a6];
const Wa3 = [W3a1, W3a2, W3a3, W3a4, W3a5, W3a6];
const Wa4 = [W4a1, W4a2, W4a3, W4a4, W4a5, W4a6];
const Wa5 = [W5a1, W5a2, W5a3, W5a4, W5a5, W5a6];
const Wa6 = [W6a1, W6a2, W6a3, W6a4, W6a5, W6a6];

const W = [W1,W2,W3,W4,W5,W6];
const Wa = [Wa1, Wa2, Wa3, Wa4, Wa5, Wa6];

let WI = 0;

let Feld = [];

function WasClicked(elem) {
    WI = document.getElementById('WorldI').value -1;
    elem.style.backgroundColor = "#333333";
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
                if (!(Feld.includes(W[WI][j][i]))) {if(Wa[WI][j][i] === 1){document.getElementById(`F${W[WI][j][i]}`).style.backgroundColor = "#FF1111";}
            else {document.getElementById(`F${W[WI][j][i]}`).style.backgroundColor = "#ff8833";}}
            }
        }
    }

    setTimeout(() => {
        for (let i = 0; i < Feld.length; i++) {
            document.getElementById(`F${Feld[i]}`).style.backgroundColor = "#333333";
        }
    }, 250);
}
