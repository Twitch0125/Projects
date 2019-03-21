//Control
let width = 900;
let height = 500;
let canvas;
let renderingContext;
let frames = 0;
let stageRight = 725;
let stageLeft = 125;

(() => {
  main();
})();

function main() {
  canvasSetup();
  document.getElementById("mycanvas").appendChild(canvas);
  document.addEventListener("keydown", mykeypress);
  document.addEventListener("keyup", unpress);
  loadGraphics();
}

function mykeypress(event) {
  switch (event.key) {
    case "ArrowRight":
      myPhantom.direction = "right";
      myPhantom.currentState = myPhantom.states.walkingright;
      break;
    case "ArrowLeft":
      myPhantom.direction = "left";
      myPhantom.currentState = myPhantom.states.walkingleft;
      break;
  }
}

function unpress() {
  myPhantom.currentState = myPhantom.states.standing;
  myPhantom.direction = "";
}

function canvasSetup() {
  canvas = document.createElement("canvas");
  canvas.style.border = "1px solid black";
  canvas.width = width;
  canvas.height = height;
  renderingContext = canvas.getContext("2d");
}

function loadGraphics() {
  let img = new Image();
  img.src = "SpriteSheet.png";
  img.onload = function() {
    initSprites(this);
    gameLoop();
  };
}

function gameLoop() {
  render();
  update();
  frames++;
  //   move();
  window.requestAnimationFrame(gameLoop);
}

function move(event) {
  //detect key pressed
  switch (event.key) {
  }
}

function update() {
  myGuard.update();
  myPhantom.update();
}

function render() {
  backgroundSprite.draw(renderingContext, 0, 0);
  myPhantom.draw();
  myGuard.draw();
}
