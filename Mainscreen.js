import Button from "./Button.js";
import NextYearButton from "./NextYearButton.js";
import Tree from "./Tree";
import DayOneNature from "./DayOneNature";

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
    this.nextYear = true;
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

  displayNextYear() {
    if (this.nextYear) {
      this.landscape();

      trees.forEach((tree) => {
        tree.display();
      });

      dayOneNature.display();

      this.hotbar();
      this.actualYear();
      this.nextYear = false;
    }
  }

  displayDraw() {
    this.hotbar();
  }
}

let mainscreen = new Mainscreen();

function mousePressed() {
  // clear();

  buttons.forEach((button) => {
    if (button.hitTest()) {
      button.pressed = !button.pressed;
    }
  });

  // trees.forEach((tree) => {
  //   console.log("is " + tree.laysDown);
  // });
}

function draw() {
  mainscreen.displayDraw();

  mainscreen.displayNextYear();

  // console.log(mainscreen.nextYear);
}
