const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const objectSize = 50;
let gameIsRunning = false;
let Mode = "1";

function isColliding(obj1, obj2) {
  const rect1 = obj1.getBoundingClientRect();
  const rect2 = obj2.getBoundingClientRect();
  return !(
    rect1.top > rect2.bottom ||
    rect1.right < rect2.left ||
    rect1.bottom < rect2.top ||
    rect1.left > rect2.right
  );
}

const objects = [];
const speed = 3;

function createObject(type) {
  const elem = document.createElement('div');

  elem.classList.add(type);  

  const x = Math.random() * (screenWidth - objectSize);
  const y = Math.random() * (screenHeight - objectSize);
  elem.style.left = x + 'px';
  elem.style.top = y + 'px';

  elem.vx = Math.random() < 0.5 ? speed : -speed;
  elem.vy = Math.random() < 0.5 ? speed : -speed;

  document.body.appendChild(elem);
  
  objects.push({
    type: type,
    element: elem
  });
}

function updateMovement(obj) {
  const elem = obj.element;
  let x = parseFloat(elem.style.left);
  let y = parseFloat(elem.style.top);

  x += elem.vx;
  y += elem.vy;

  if (x <= 0 || x >= screenWidth - objectSize) {
    elem.vx = -elem.vx;

    x = Math.max(0, Math.min(x, screenWidth - objectSize));
  }
  if (y <= 0 || y >= screenHeight - objectSize) {
    elem.vy = -elem.vy;
    y = Math.max(0, Math.min(y, screenHeight - objectSize));
  }

  elem.style.left = x + 'px';
  elem.style.top = y + 'px';
}

function determineWinner(type1, type2) {
  if (type1 === type2) return 'draw';
  if ((type1 === "Stone" && type2 === "Scissors") ||
      (type1 === "Scissors" && type2 === "Paper") ||
      (type1 === "Paper" && type2 === "Stone")) {
    return type1;
  }
  return type2;
}

function gameLoop() {
  objects.forEach(obj => updateMovement(obj));

  for (let i = 0; i < objects.length; i++) {
    for (let j = i + 1; j < objects.length; j++) {
      const obj1 = objects[i];
      const obj2 = objects[j];

      if (isColliding(obj1.element, obj2.element)) {
          const winner = determineWinner(obj1.type, obj2.type);
          const rect1 = obj1.element.getBoundingClientRect();
          const rect2 = obj2.element.getBoundingClientRect();
          if (winner === 'draw') {
            if (!(rect1.top > rect2.bottom || rect1.bottom < rect2.top)) {
            obj1.element.vx = -obj1.element.vx;
            obj2.element.vx = -obj2.element.vx;
          }
          if (!(rect1.right < rect2.left || rect1.left > rect2.right)) {
            obj1.element.vy = -obj1.element.vy;
            obj2.element.vy = -obj2.element.vy;
          }
            continue;
          } else {

            if (Mode == "1") {
            if (obj1.type !== winner) {
              obj1.element.remove();
              objects.splice(i, 1);
              j--;
              i--;
              break;
            } else if (obj2.type !== winner) {
              obj2.element.remove();
              objects.splice(j, 1);
              j--;
            }
            }
            else if (Mode == "2") {
              if (!(rect1.top > rect2.bottom || rect1.bottom < rect2.top)) {
                obj1.element.vx = -obj1.element.vx;
                obj2.element.vx = -obj2.element.vx;
              }
              if (!(rect1.right < rect2.left || rect1.left > rect2.right)) {
                obj1.element.vy = -obj1.element.vy;
                obj2.element.vy = -obj2.element.vy;
              }
              if (obj1.type !== winner) {
                obj1.element.classList.remove(obj1.type);  
                obj1.type = winner;
                obj1.element.classList.add(winner);       
              } else if (obj2.type !== winner) {
                obj2.element.classList.remove(obj2.type);
                obj2.type = winner;
                obj2.element.classList.add(winner);
              }
            }
          }
      }
    }
  }
  requestAnimationFrame(gameLoop);
}

function startGame() {
    objects.forEach(obj => obj.element.remove());
    objects.length = 0;

  const startInput = document.getElementById("StartValue");
  let startCount = parseInt(startInput.value) || 0;

  for (let i = 0; i < startCount; i++) {
    createObject("Stone");
    createObject("Scissors");
    createObject("Paper");
  }
  if (!gameIsRunning) { 
    requestAnimationFrame(gameLoop);
    gameIsRunning = true;
  }
}

document.getElementById("startButton").addEventListener("click", startGame);


let root = document.documentElement;

root.style.setProperty("--stone", "url('Images/stone.png')");
root.style.setProperty("--paper", "url('Images/paper.png')");
root.style.setProperty("--scissors", "url('Images/scissors.png')");

function changeTextures(elem) {
    let root = document.documentElement;

    if (elem.value === "Minecraft") {
        root.style.setProperty("--stone", "url('Images/Mstone.png')");
        root.style.setProperty("--paper", "url('Images/Mpaper.png')");
        root.style.setProperty("--scissors", "url('Images/Mscissors.png')");
    } 
    else if (elem.value === "Normal") {
        root.style.setProperty("--stone", "url('Images/stone.png')");
        root.style.setProperty("--paper", "url('Images/paper.png')");
        root.style.setProperty("--scissors", "url('Images/scissors.png')");
    }
}

function changeMode(elem) {
  Mode = elem.value;
}