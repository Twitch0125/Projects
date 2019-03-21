//Model
class Phantom {
  constructor() {
    this.x = 400;
    this.y = 350;
    this.width = 100;
    this.height = 100;
    this.maxspeed = 6;
    this.velX = 0;
    this.friction = 0.93;
    this.direction = "";
    this.frame = 0;
    this.animation = [0, 1, 2, 3];
    this.states = {
      standing: 0,
      walkingright: 1,
      walkingleft: 2
    };
    this.currentState = this.states.standing;
  }
  update() {
    let n = 10;
    this.frame += frames % n === 0 ? 1 : 0;
    this.frame %= this.animation.length;

    if (this.direction === "right" && this.x < stageRight) {
      if (this.velX < this.maxspeed) {
        this.velX++;
      }
    }
    if (this.direction === "left" && this.x > stageLeft) {
      if (this.velX > -this.maxspeed) {
        this.velX--;
      }
    }

    this.velX *= this.friction;
    this.x += this.velX;
  }
  draw() {
    renderingContext.save();

    let n = this.animation[this.frame];

    if (this.currentState === this.states.standing) {
      phantomSprite.draw(renderingContext, this.x, this.y);
    }
    if (this.currentState === this.states.walkingright) {
      phantomWalkRight[n].draw(renderingContext, this.x, this.y);
    }
    if(this.currentState === this.states.walkingleft){
      phantomWalkLeft[n].draw(renderingContext, this.x, this.y);
    }
    renderingContext.restore();
  }
}

let myPhantom = new Phantom();

class Guard {
  constructor() {
    this.x = 400;
    this.y = 350;
    this.width = 100;
    this.height = 100;
  }
  update() {
    this.y -= Math.ceil(Math.random() * 5);
    this.x += Math.random() * 10 * (Math.random() * -10);
  }
  draw() {
    guardSprite.draw(renderingContext, this.x, this.y);
  }
}

let myGuard = new Guard();
