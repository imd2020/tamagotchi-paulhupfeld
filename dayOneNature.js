import { deko, stone1, stone2, sun } from "./HTML/p5setup.js";

export default class DayOneNature {
  constructor() {
    this.existing = false;

    this.x = -100;
    this.y = -100;

    this.image = image;

    this.deko = deko;
    this.stone1 = stone1;
    this.stone2 = stone2;
    this.sun = sun;
  }

  giveRandomParameters(r) {
    this.x = random(-50, 640);
    this.y = random(300, 500);

    //random image
    r = Math.random();
    if (r < 0.25) {
      this.image = this.deko;
    } else if (r < 0.5) {
      this.image = this.stone1;
    } else if (r < 0.75) {
      this.image = this.stone2;
    } else {
      this.image = this.sun;
    }
  }

  createAutomaticly() {
    if (this.existing === false) {
      this.giveRandomParameters();
      this.existing = true;
    }
  }

  placeItem(x, y, s, r) {
    push();

    translate(x - this.image.width / 20, y - this.image.height / 10);
    rotate(r);
    scale(s);

    image(this.image, 0, 0);
    pop();
  }

  display() {
    this.createAutomaticly();

    if (this.existing) {
      // console.log("display");

      this.placeItem(this.x, this.y, 0, this.image);
    }
  }
}
