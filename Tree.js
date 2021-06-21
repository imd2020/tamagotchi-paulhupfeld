export default class Tree {
  constructor() {
    this.existing = false;

    this.x = -100;
    this.y = -100;
    this.age = 0;
    this.laysDown = false;

    this.tree = loadImage("./images/tree1.png");
    this.stump = loadImage("./images/stump.png");
  }

  setUp(r) {
    r = Math.random();
    // console.log("r = " + r);
    if (r < 0.5) {
      this.randomParameters();
      // console.log(r);
      this.existing = true;
    }
  }

  randomParameters() {
    this.x = random(-50, 640);
    this.y = random(160, 400);
  }

  kill(r) {
    r = Math.random();
    console.log("kill");
    if (r < 0.5) {
      this.laysDown = true;
    }
  }

  getOlder() {
    this.age++;
  }

  display() {
    if (this.existing === false) {
      this.setUp();
    }

    push();

    if (this.laysDown === false) {
      translate(this.x - this.tree.width / 20, this.y - this.tree.height / 10);
      scale(0.11);
      image(this.tree, 0, 0);
      // console.log("ganz");
    } else {
      pop();
      push();
      translate(this.x - 6, this.y - 5);
      scale(0.03);
      image(this.stump, 0, 0);
      // console.log("ab");
    }
    pop();
  }
}

let trees = [new Tree(), new Tree(), new Tree(), new Tree(), new Tree()];

function draw() {
  clear();
  trees.forEach((tree) => {
    tree.display();
  });

  if (mouseIsPressed) {
    trees.forEach((tree) => {
      tree.kill();
    });
  }
}
