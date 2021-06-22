import Button from "./Button.js";
import NextYearButton from "./NextYearButton.js";
import Tree from "./Tree.js";
import DayOneNature from "./DayOneNature.js";

let nextYearButton = new NextYearButton(405, 520, "Nächstes Jahr");

let buttons = [
  new Button(45, 465, "Bäume pflanzen"),
  new Button(225, 465, "Müll aufsammeln"),
  new Button(405, 465, "Rasen mähen"),
  new Button(45, 520, "Bäume roden"),
  new Button(225, 520, "Jäger holen"),
  nextYearButton,
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

  yearCounter() {
    fill(0);
    textAlign(LEFT);
    textSize(18);
    text("Aktuelles Jahr: " + mainscreen.year, 10, 20);
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
      // console.log(this.nextYear);
      this.landscape();

      trees.forEach((tree) => {
        tree.display();
      });

      dayOneNature.display();

      this.hotbar();
      this.yearCounter();
      this.nextYear = false;
    }
  }

  resetScreen() {
    if (nextYearButton.newYear) {
      screen.year++;
      screen.nextYear = true;

      buttons.forEach((button) => {
        if (button.message === "Bäume roden" && button.pressed) {
          trees.forEach((tree) => {
            tree.kill();
            // console.log("kill");
          });
        }
      });

      buttons.forEach((button) => {
        button.pressed = false;
      });

      this.landscape();

      trees.forEach((tree) => {
        tree.display();
      });

      dayOneNature.display();

      this.yearCounter();

      nextYearButton.newYear = false;
    }
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

let start = true;

let trees;
let dayOneNature;

function draw() {
  if (start) {
    trees = [new Tree(), new Tree(), new Tree(), new Tree(), new Tree()];
    dayOneNature = new DayOneNature();
    start = false;
  }
  mainscreen.hotbar();
  mainscreen.displayNextYear();

  mainscreen.resetScreen();
}

window.draw = draw;
window.mousePressed = mousePressed;
