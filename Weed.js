import { weed1, weed2, weed3, weed4 } from "./HTML/p5setup.js";

export default class Weed {
  constructor() {
    this.existing = false;

    this.x = -100;
    this.y = -100;

    this.age = 0;
    this.kill = false;

    this.weed = weed1;
    this.weed1 = weed1;
    this.weed2 = weed2;
    this.weed3 = weed3;
    this.weed4 = weed4;
  }

  giveRandomParameters(r) {
    this.x = random(-50, 640);
    this.y = random(220, 600);

    //random Image
    r = Math.random();
    if (r < 0.25) {
      this.weed = weed2;
    } else if (r < 0.5) {
      this.weed = weed2;
    } else if (r < 0.75) {
      this.weed = weed3;
    } else {
      this.weed = weed4;
    }
  }

  createAutomaticly(r) {
    if (this.existing === false) {
      r = Math.random();
      if ((this.create && r < 0.4) || r < 0.05) {
        this.giveRandomParameters();
        this.laysDown = false;
        this.existing = true;
      }
    }
    this.create = false;
  }

  killItem(r) {
    this.kill = true;
  }

  killAutomaticly(r) {
    r = Math.random();
    if (this.kill || r < 0.003 * this.age) {
      this.age = 0;
      this.existing = false;
    }
    this.kill = false;
  }

  getOlder() {
    this.age++;
  }

  placeItem(x, y, s, i) {
    push();
    translate(x - (i.width * s) / 2, y - i.height * s);
    scale(s + this.y / 7000);

    image(i, 0, 0);
    pop();
  }

  display() {
    this.killAutomaticly();
    this.createAutomaticly();

    if (this.existing) {
      this.placeItem(this.x, this.y, 0.02, this.weed);
    }
  }
}
