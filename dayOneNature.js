import { deko, stone1, stone2, sun } from "./HTML/p5setup.js";

export default class DayOneNature {
  constructor() {
    this.deko = deko;
    this.stone1 = stone1;
    this.stone2 = stone2;
    this.sun = sun;
  }

  placeItem(x, y, s, r, i) {
    push();

    translate(x - i.width / 20, y - i.height / 10);
    rotate(r);
    scale(s);

    image(i, 0, 0);
    pop();
  }

  neverDyingItems() {
    this.placeItem(540, 400, 0.15, 0, this.deko);
    this.placeItem(150, 420, 0.06, 0, this.stone1);
    this.placeItem(20, 540, 0.08, 0, this.stone1);
    this.placeItem(375, 485, 0.07, 0, this.stone1);
    this.placeItem(400, 390, 0.08, 0, this.stone2);
    this.placeItem(500, 610, 0.1, 0, this.stone2);
    this.placeItem(500, 320, 0.35, -1.7, this.sun);
  }

  display() {
    this.neverDyingItems();
  }
}

let dayOneNature = new DayOneNature();

function draw() {
  dayOneNature.display();
  // console.log("hi");
}
