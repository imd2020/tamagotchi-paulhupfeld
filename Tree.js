import { tree, stump } from "./HTML/p5setup.js";

export default class Tree {
  constructor() {
    this.existing = false;

    this.x = -100;
    this.y = -100;

    this.age = 0;
    this.create = true;
    this.kill = false;
    this.laysDown = false;

    this.tree = tree;
    this.stump = stump;
  }

  giveRandomParameters() {
    this.x = random(-50, 640);
    this.y = random(160, 360);

    // trage in array ein
  }

  createItem() {
    this.create = true;
  }

  createAutomaticly(r) {
    if (this.existing === false) {
      r = Math.random();
      if ((this.create && r < 0.4) || r < 0.05) {
        this.giveRandomParameters();

        this.laysDown = false;
        this.age = 0;

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
    if ((this.kill && r < 0.5) || r < 0.003 * this.age) {
      this.laysDown = true;
      this.age = 0;
    }
    this.kill = false;
  }

  getOlder() {
    this.age++;

    if (this.laysDown && this.age === 3) {
      this.existing = false;
    }
  }

  placeItem(x, y, s, i) {
    push();
    translate(x - i.width / 20, y - i.height / 10);
    scale(s);
    image(i, 0, 0);
    pop();
  }

  display() {
    this.getOlder();

    this.killAutomaticly();
    this.createAutomaticly();

    if (this.existing) {
      if (this.laysDown === false) {
        this.placeItem(this.x, this.y, 0.11, this.tree);
      } else {
        //placeItem(); nicht möglich, da this.stump.width viel zu hoch
        push();
        translate(this.x - 6, this.y - 5);
        scale(0.03);
        image(this.stump, 0, 0);
        pop();
      }
    }
  }
}
