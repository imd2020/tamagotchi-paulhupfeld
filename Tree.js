import { tree, stump } from "./HTML/p5setup.js";

export default class Tree {
  constructor() {
    this.existing = false;

    this.x = -100;
    this.y = -100;
    this.age = 0;
    this.laysDown = false;

    this.tree = tree;
    this.stump = stump;
  }

  setUpNewTrees(r) {
    r = Math.random();
    if (r < 0.5) {
      this.giveRandomParameters();
      this.existing = true;
    }
  }

  giveRandomParameters() {
    this.x = random(-50, 640);
    this.y = random(160, 360);

    // trage in array ein
  }

  killTrees(r) {
    r = Math.random();
    if (r < 0.5) {
      this.laysDown = true;
    }
  }

  // getOlder() {
  //   this.age++;
  // }

  placeItem(x, y, s, i) {
    push();
    translate(x - i.width / 20, y - i.height / 10);
    scale(s);
    image(i, 0, 0);
    pop();
  }

  display() {
    if (this.existing === false) {
      this.setUpNewTrees();
    }

    push();

    if (this.laysDown === false) {
      if (this.tree) {
        translate(
          this.x - this.tree.width / 20,
          this.y - this.tree.height / 10
        );

        scale(0.11);

        image(this.tree, 0, 0);
        pop();
      }
    } else {
      push();
      translate(this.x - 6, this.y - 5);
      scale(0.03);
      image(this.stump, 0, 0);
      // console.log("ab");
    }
    pop();
  }
}
