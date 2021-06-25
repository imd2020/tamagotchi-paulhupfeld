import { animal } from "./HTML/p5setup.js";

export default class Animal {
  constructor() {
    this.existing = false;

    this.x = -100;
    this.y = -100;

    this.age = 0;
    this.kill = false;

    this.animal = animal;
  }

  giveRandomParameters() {
    this.x = random(-50, 640);
    this.y = random(160, 500);
  }

  createAutomaticly(r) {
    if (this.existing === false) {
      r = Math.random();
      if (r < 0.15) {
        this.giveRandomParameters();

        this.age = 0;

        this.existing = true;
      }
    }
  }

  killItem(r) {
    this.kill = true;
  }

  killAutomaticly(r) {
    r = Math.random();
    if (this.kill || r < 0.003 * this.age) {
      this.existing = false;
      this.age = 0;
    }
    this.kill = false;
  }

  getOlder() {
    this.age++;
  }

  placeItem(x, y, s, i) {
    push();
    translate(x - i.width / 20, y + i.height / 10);
    scale(s + this.y / 7000);
    image(i, 0, 0);
    pop();
  }

  display() {
    this.getOlder();

    this.killAutomaticly();
    this.createAutomaticly();

    if (this.existing) {
      this.giveRandomParameters();

      this.placeItem(this.x, this.y, 0.02, this.animal);
    }
  }
}
