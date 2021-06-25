import { deko, stone1, stone2 } from "./HTML/p5setup.js";

export default class DayOneNature {
  constructor() {
    this.existing = false;

    this.x = -100;
    this.y = -100;

    this.image = deko;
    this.deko = deko;
    this.stone1 = stone1;
    this.stone2 = stone2;
  }

  giveRandomParameters(r) {
    this.x = random(-50, 640);
    this.y = random(300, 550);

    r = Math.random();

    if (r < 0.2) {
      this.image = deko;
    } else if (r < 0.6) {
      this.image = stone1;
    } else {
      this.image = stone2;
    }
  }

  createAutomaticly() {
    if (this.existing === false) {
      this.giveRandomParameters();

      this.existing = true;
    }
  }

  placeItem(x, y, s, i) {
    push();
    translate(x - i.width / 20, y - i.height / 10);
    scale(s + this.y / 7000);
    rotate(this.rotation);

    image(i, 0, 0);
    pop();
  }

  display() {
    this.createAutomaticly();

    if (this.existing) {
      this.placeItem(this.x, this.y, 0.06, this.image);
    }
  }
}
