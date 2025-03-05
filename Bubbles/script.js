// Vektor-Klasse (Position und Geschwindigkeit)
function Vector(x, y) {
    this.x = x || 0;
    this.y = y || 0;
}

Vector.prototype = {
    set: function(x, y) {
        this.x = x || 0;
        this.y = y || 0;
        return this;
    },

    add: function(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    },

    sub: function(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    },

    scale: function(s) {
        this.x *= s;
        this.y *= s;
        return this;
    }
};

// Partikel-Klasse (Particle)
function Particle(x, y) {
    this.position = new Vector(x, y);
    this.velocity = new Vector(0, 0);  // Geschwindigkeit (anpassen je nach Bedarf)
    this.mass = 1;  // Masse (kann hier angepasst werden)
    this.color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
}

Particle.prototype.update = function() {
    this.position.add(this.velocity);  // Bewegt die Partikel
};

// Funktion zum Erstellen eines neuen Partikels
function createParticle(x, y) {
    let particle = new Particle(x, y);
    particle.velocity.set(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5);
    particles.push(particle);
}

// Canvas Initialisierung
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

canvas.width = 500 * 2;
canvas.height = 500 * 2;
canvas.style.width = "100vmax";
canvas.style.height = "100vmax";

// Array für Partikel
let particles = [];

// Animations-Loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Lösche den vorherigen Frame

    // Update der Partikel
    particles.forEach(function(particle) {
        particle.update();  // Bewege das Partikel
        // Zeichne das Partikel
        ctx.beginPath();
        ctx.arc(particle.position.x, particle.position.y, 20, 0, Math.PI*2);
        ctx.fillStyle = particle.color;
        ctx.fill();
    });

    requestAnimationFrame(animate);  // Nächsten Frame anfordern
}

// Beispiel: Partikel erstellen und Animation starten
setInterval(function() {
    createParticle(Math.random() * canvas.width, Math.random() * canvas.height);  // Neues Partikel
}, 100);  // Alle 500ms ein neues Partikel

animate();  // Starte die Animation
