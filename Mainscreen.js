import Button from "./Button.js";
import NextYearButton from "./NextYearButton.js";
import Tree from "./Tree";

let buttons = [
  new Button(45, 465, "Bäume pflanzen"),
  new Button(225, 465, "Müll aufsammeln"),
  new Button(405, 465, "Rasen mähen"),
  new Button(45, 520, "Bäume roden"),
  new Button(225, 520, "Jäger holen"),
  new NextYearButton(405, 520, "Nächstes Jahr"),
];

class Mainscreen {
  constructor() {
    this.year = 2021;
  }

  
  landscape() {
    background(176, 226, 255);
    fill(237, 190, 130);
    noStroke();
    ellipse(300, 5000, 9700);
  }

  actualYear() {
    fill(0);
    textAlign(LEFT);
    textSize(22);
    text(mainscreen.year, 10, 20);
  }

  nextYear() {
    mainscreen.displayClicked();
    mainscreen.displayClicked();
    console.log("here");
  }

  hotbar() {
    fill(255, 239, 219);
    stroke(1);
    rect(30, 452, 540, 121, 8);
    buttons.forEach((button) => {
      button.display();
    });
  }

  displayClicked() {
    console.log("clicked");
    this.landscape();

    trees.forEach((tree) => {
      tree.display();
    });

    this.hotbar();
    this.actualYear();
  }

  displayDraw() {
    this.hotbar();
  }
}

let mainscreen = new Mainscreen();

function mousePressed() {
  clear();

  buttons.forEach((button) => {
    if (button.hitTest()) {
      button.pressed = !button.pressed;
    }
  });

  // trees.forEach((tree) => {
  //   console.log("is " + tree.laysDown);
  // });

  mainscreen.displayClicked();
  mainscreen.displayClicked();
}

function draw() {
  mainscreen.displayDraw();

  // if (mouseIsPressed) {
  //   trees.forEach((tree) => {
  //     tree.kill();
  //   });
  // }
}


