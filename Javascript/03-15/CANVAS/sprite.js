//Sprite
let phantomSprite;
let backgroundSprite;
let guardSprite;
let phantomWalkRight;
let phantomWalkLeft;

class Sprite {
  constructor(img, x, y, width, height) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  draw(renderingContext, x, y) {
    renderingContext.drawImage(
      this.img,
      this.x,
      this.y,
      this.width,
      this.height,
      x,
      y,
      this.width,
      this.height
    );
  }
}

function initSprites(img) {
  phantomSprite = new Sprite(img, 22, 254, 47, 95);
  phantomWalkRight = [
    new Sprite(img, 23, 724, 60, 106),
    new Sprite(img, 80, 724, 60, 106),
    new Sprite(img, 140, 724, 60, 106),
    new Sprite(img, 200, 724, 60, 106)
  ];
  phantomWalkLeft = [
    new Sprite(img, 23, 837, 60, 106),
    new Sprite(img, 80, 837, 60, 106),
    new Sprite(img, 140, 837, 60, 106),
    new Sprite(img, 200, 837, 60, 106)
  ];
  guardSprite = new Sprite(img, 22, 130, 47, 95);
  backgroundSprite = new Sprite(img, 100, 0, 900, 500);
}
