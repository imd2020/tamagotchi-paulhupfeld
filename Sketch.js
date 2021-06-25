import Button from "./Button.js";
import NextYearButton from "./NextYearButton.js";
import Tree from "./Tree.js";
import DayOneNature from "./DayOneNature.js";
import Animal from "./Animal.js";
import Trash from "./Trash.js";
import Weed from "./Weed.js";
import YearCounter from "./YearCounter.js";
import Mainscreen from "./Mainscreen.js";

let yearCounter = new YearCounter();
let button = new Button(225, 400, "Start");
let nextYearButton = new NextYearButton(405, 520, "Nächstes Jahr");
let buttons = [
  new Button(45, 465, "Bäume pflanzen"),
  new Button(225, 465, "Müll aufsammeln"),
  new Button(405, 465, "Heu holen"),
  new Button(45, 520, "Bäume roden"),
  new Button(225, 520, "Wild schießen"),
  nextYearButton,
];

class Sketch {
  constructor() {
    this.actualScreen = "startscreen";
  }

  startscreen() {
    background(255, 239, 219);

    button.display();

    if (
      this.actualScreen === "startscreen" &&
      mouseIsPressed &&
      button.hitTest()
    ) {
      this.actualScreen = "mainscreen";
    }
  }

  mainscreen() {
    if (start) {
      //   for (let i; i++; i <= 20) {
      //     trees.push(new Tree());
      //   }
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

      trash = [
        new Trash(),
        new Trash(),
        new Trash(),
        new Trash(),
        new Trash(),
        new Trash(),
      ];

      animals = [new Animal(), new Animal()];

      weed = [
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
        new Weed(),
      ];

      dayOneNature = new DayOneNature();
      start = false;
    }

    mainscreen.displayHotbar();
    mainscreen.refreshScreen();
  }

  display() {
    if (this.actualScreen === "startscreen") {
      this.startscreen();
    } else {
      this.mainscreen();
    }
  }
}

let sketch = new Sketch();
let mainscreen = new Mainscreen();

let start = true;

let concat1 = [];
let concat2 = [];
let allItems = [];
let trees = [];
let trash = [];
let animals = [];
let weed = [];
let dayOneNature = [];

function draw() {
  sketch.display();
}

function mousePressed() {
  buttons.forEach((button) => {
    if (button.hitTest()) {
      button.pressed = !button.pressed;
    }
  });
}

window.draw = draw;
window.mousePressed = mousePressed;
