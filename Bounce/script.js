let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

canvas.width = 500 * 2;
canvas.height = 500 * 2;
canvas.width = 500 * 2;
canvas.height = 500 * 2;
ctx.scale(2, 2);

particles = [];

function checkCircleCollision(circle1, circle2) {
    const dx = circle2.x - circle1.x;
    const dy = circle2.y - circle1.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    return distance <= (circle1.radius + circle2.radius);
}

function Particle(x, y, vx, vy, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocity = new Vector(vx, vy);
    particles.push(this);
}

Particle.prototype.draw = function(particle) {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius/6, 0, Math.PI * 2);
    ctx.fillStyle = "#ff44ff";
    ctx.fill();
}

Particle.prototype.update = function() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
};

// Vektor-Objekt
function Vector(x, y) {
    this.x = x;
    this.y = y;
}

// Methode, um Vektoren zu addieren
Vector.prototype.add = function(other) {
    this.x += other.x;
    this.y += other.y;
};

// Methode, um einen Vektor mit einem Skalar zu multiplizieren (für Skalierung der Geschwindigkeit)
Vector.prototype.multiply = function(scalar) {
    this.x *= scalar;
    this.y *= scalar;
};

// Berechnung der Länge des Vektors (Betrag der Geschwindigkeit)
Vector.prototype.magnitude = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
};


let b = new Particle(100,100,1,1,10);
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    particles.forEach(particle => {
        particle.update();
        particle.draw(particle);
    });

    requestAnimationFrame(animate);
}
animate();