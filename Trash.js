import { trash } from "./HTML/p5setup.js";

export default class Trash {
  constructor() {
    this.existing = false;

    this.x = -100;
    this.y = -100;

    this.rotation = 0;

    this.trash = trash;
  }

  giveRandomParameters(r) {
    this.x = random(-50, 640);
    this.y = random(350, 550);

    r = random(-2, 2);
    this.rotation = r;
  }

  createAutomaticly(r) {
    if (this.existing === false) {
      r = Math.random();
      if (r < 0.03) {
        this.giveRandomParameters();

        this.existing = true;
      }
    }
  }

  killItem(r) {
    this.existing = false;
  }

  placeItem(x, y, s, i) {
    push();

    translate(x - (i.width * s) / 2, y - i.height * s);
    scale(s + this.y / 8000);
    rotate(this.rotation);

    image(i, 0, 0);
    pop();
  }

  display() {
    this.createAutomaticly();

    if (this.existing) {
      this.placeItem(this.x, this.y, 0, this.trash);
    }
  }
}
