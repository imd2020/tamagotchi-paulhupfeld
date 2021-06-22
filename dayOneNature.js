export default class DayOneNature {
  constructor() {
    this.deko = loadImage("./images/deko.png");
    this.stone1 = loadImage("./images/stone1.png");
    this.stone2 = loadImage("./images/stone2.png");
  }

  placeItem(x, y, s, i) {
    push();
    translate(x - i.width / 20, y - i.height / 10);
    scale(s);
    image(i, 0, 0);
    pop();
  }

  neverDyingItems() {
    this.placeItem(540, 400, 0.15, this.deko);
    this.placeItem(150, 420, 0.06, this.stone1);
    this.placeItem(20, 540, 0.08, this.stone1);
    this.placeItem(375, 485, 0.07, this.stone1);
    this.placeItem(400, 390, 0.08, this.stone2);
    this.placeItem(500, 610, 0.1, this.stone2);
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
