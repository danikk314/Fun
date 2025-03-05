let boolStart = false;

let bit1 = 0;
let bit2 = 0;
let bit3 = 0;
let bit4 = 0;
let bit5 = 0;
let bit6 = 0;
let bit7 = 0;
let bit8 = 0;

function buttonclk() {
    boolStart = true;
}

function Piano() {
    if (boolStart) {
        bit1 += 1;
        if (bit1 == 2) {
            bit1 = 0;
            bit2 += 1;
            playNote(783.99); // G5
        }
        if (bit2 == 2) {
            bit2 = 0;
            bit3 += 1;
            playNote(698.46); // F5
        }
        if (bit3 == 2) {
            bit3 = 0;
            bit4 += 1;
            playNote(659.25); // E5
        }
        if (bit4 == 2) {
            bit4 = 0;
            bit5 += 1;
            playNote(587.33); // D5
        }
        if (bit5 == 2) {
            bit5 = 0;
            bit6 += 1;
            playNote(523.25); // C5
        }
        if (bit6 == 2) {
            bit6 = 0;
            bit7 += 1;
            playNote(440.00); // A4
        }
        if (bit7 == 2) {
            bit7 = 0;
            bit8 += 1;
            playNote(392.00); // G4
        }
        if (bit8 == 2) {
            bit8 = 0;
            boolStart = false;
            playNote(293.66); // D4
        }
        
    }

    document.getElementById('Piano').innerHTML = '' + bit8 + bit7 + bit6 + bit5 + ' ' + bit4 + bit3 + bit2 + bit1;
}
setInterval(Piano, 1000);

function playNote(frequency) {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'sine'; // Wellenform (sine klingt wie ein Klavier)
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime); // Lautstärke
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1); // Abklingen lassen

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 1); // Nach 1 Sekunde stoppen
  }