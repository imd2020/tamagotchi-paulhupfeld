import { weed1, weed2, weed3, weed4, weed5 } from "./HTML/p5setup.js";

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
    this.weed5 = weed5;
  }

  //added randomImage
  giveRandomParameters(r) {
    //random Coordinates
    this.x = random(-50, 640);
    this.y = random(220, 600);
    // trage in array ein

    //random Image
    r = Math.random();
    if (r < 0.2) {
      this.weed = weed2;
    } else if (r < 0.4) {
      this.weed = weed2;
    } else if (r < 0.6) {
      this.weed = weed3;
    } else if (r < 0.8) {
      this.weed = weed4;
    } else {
      this.weed = weed5;
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
    translate(x - i.width / 20, y - i.height / 10);
<<<<<<< HEAD
<<<<<<< HEAD
    scale(s + this.y / 7000);
=======
    scale(s);
>>>>>>> parent of e269ad9 (y sorted)
=======
    scale(s + this.y / 10000);
>>>>>>> parent of e8cde04 (kinda wrong)
    image(i, 0, 0);
    pop();
  }

  display() {
    this.killAutomaticly();
    this.createAutomaticly();

    if (this.existing) {
<<<<<<< HEAD
<<<<<<< HEAD
      this.placeItem(this.x, this.y, 0.02, this.weed);
=======
      this.placeItem(this.x, this.y, 0.07, this.weed);
>>>>>>> parent of e269ad9 (y sorted)
=======
      this.placeItem(this.x, this.y, 0.03, this.weed);
>>>>>>> parent of e8cde04 (kinda wrong)
    }
  }
}
