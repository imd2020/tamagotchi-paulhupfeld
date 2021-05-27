import TPlant from "./TPlant.js";

export default class TTree extends TPlant {
  constructor(x, y, age, limit, size, alive, pests) {
    super(x, y, age, limit, size, alive);

    this.size = size;
    this.alive = alive;
  }

  //healOfPests(){}
  // display(){}

  //grafic:
  trunk() {
    stroke(66, 33, 0);
    strokeWeight(12);
    line(50, 340, 50, 310);
  }

  fir() {
    stroke(53, 104, 45);
    strokeWeight(7);
    fill(53, 104, 45);
    triangle(10, 310, 90, 310, 50, 290);
    triangle(17, 290, 83, 290, 50, 270);
    triangle(23, 270, 77, 270, 50, 250);
    triangle(30, 250, 70, 250, 50, 230);
  }

  // this.x = x - 50;
  // this.y = y - 345;

  grafik() {
    this.grafikStart();
    this.trunk();
    this.fir();
    this.grafikEnd();
  }
}
