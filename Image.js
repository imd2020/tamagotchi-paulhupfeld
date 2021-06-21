export default class Image {
  constructor(x, y, symbol) {
    this.x = x;
    this.y = y;
    this.symbol = symbol;
    // this.version = 1;

    this.tree = loadImage("./images/tree1.png");
    this.bush = loadImage("./images/bush1.png");
    this.animal = loadImage("./images/animal.png");
    this.trash = loadImage("./images/trash.png");
    this.weed = loadImage("./images/weed.png");
    this.stump = loadImage("./images/stump.png");
    this.log = loadImage("./images/log.png");
    this.deko = loadImage("./images/deko.png");
    this.stone1 = loadImage("./images/stone1.png");
    this.stone2 = loadImage("./images/stone2.png");
  }

  startCommands() {
    push();
    translate(this.y, this.y);
  }

  //function überarbeiten
  display() {
    if (this.symbol === 1) {
      this.displayTree();
    } else if (this.symbol === 2) {
      this.displayBush();
    } else if (this.symbol === 3) {
      this.displayAnimal();
    } else if (this.symbol === 4) {
      this.displayTrash();
    } else if (this.symbol === 5) {
      this.displayWeed();
    } else if (this.symbol === 6) {
      this.displayStump();
    } else if (this.symbol === 7) {
      this.displayLog();
    } else if (this.symbol === 8) {
      this.displayDeko();
    } else if (this.symbol === 9) {
      this.displayStone();
    }
  }

  displayTree() {
    this.startCommands();
    scale(0.11);
    image(this.tree, 10, 10);
    pop();
  }

  displayBush() {
    this.startCommands();
    scale(0.08);
    image(this.bush, 10, 10);
    pop();
  }

  displayAnimal() {
    this.startCommands();
    scale(0.05);
    image(this.animal, 10, 10);
    pop();
  }

  displayTrash() {
    this.startCommands();
    scale(0.04);
    image(this.trash, 10, 10);
    pop();
  }

  displayWeed() {
    this.startCommands();
    scale(0.05);
    image(this.weed, 10, 10);
    pop();
  }

  displayStump() {
    this.startCommands();
    scale(0.08);
    image(this.stump, 10, 10);
    pop();
  }

  displayLog() {
    this.startCommands();
    scale(0.12);
    image(this.log, 10, 10);
    pop();
  }

  displayDeko() {
    this.startCommands();
    scale(0.15);
    image(this.deko, 10, 10);
    pop();
  }

  displayStone() {
    this.startCommands();
    scale(0.08);
    image(this.stone1, 10, 10);
    pop();
  }
}
