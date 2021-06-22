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
  }

  displayBackground() {
    background(176, 226, 255);
    fill(237, 190, 130);
    noStroke();
    ellipse(300, 5000, 9700);
  }

  displayYearCounter() {
    fill(0);
    textAlign(LEFT);
    textSize(18);
    text("Aktuelles Jahr: " + mainscreen.year, 10, 20);
  }

  displayHotbar() {
    fill(255, 239, 219);
    stroke(1);
    rect(30, 452, 540, 121, 8);
    buttons.forEach((button) => {
      button.display();
    });
  }

  readButtons() {
    buttons.forEach((button) => {
      //Bäume pflanzen
      if (button.message === "Bäume pflanzen" && button.pressed) {
        trees.forEach((tree) => {
          tree.plantTrees();
        });
      }

      //Bäume roden
      if (button.message === "Bäume roden" && button.pressed) {
        trees.forEach((tree) => {
          tree.killTrees();
        });
      }
    });

    buttons.forEach((button) => {
      button.pressed = false;
    });
  }

  refreshScreen() {
    if (nextYearButton.newYear) {
      this.year++;

      this.readButtons();

      this.displayBackground();

      trees.forEach((tree) => {
        tree.display();
      });

      dayOneNature.display();

      this.displayYearCounter();

      nextYearButton.newYear = false;
    }
  }
}

let mainscreen = new Mainscreen();

function mousePressed() {
  buttons.forEach((button) => {
    if (button.hitTest()) {
      button.pressed = !button.pressed;
    }
  });
}

let start = true;

let trees;
let dayOneNature;

function draw() {
  if (start) {
    // for (let i; i++; i <= 20) {
    //   trees.push(new Tree());
    // }
    trees = [
      new Tree(),
      new Tree(),
      new Tree(),
      new Tree(),
      new Tree(),
      new Tree(),
      new Tree(),
      new Tree(),
      new Tree(),
      new Tree(),
      new Tree(),
      new Tree(),
      new Tree(),
      new Tree(),
      new Tree(),
      new Tree(),
      new Tree(),
      new Tree(),
      new Tree(),
      new Tree(),
    ];
    dayOneNature = new DayOneNature();
    start = false;
  }

  mainscreen.displayHotbar();
  mainscreen.refreshScreen();
}

window.draw = draw;
window.mousePressed = mousePressed;
