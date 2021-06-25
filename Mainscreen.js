import Button from "./Button.js";
import NextYearButton from "./NextYearButton.js";
import Tree from "./Tree.js";
import DayOneNature from "./DayOneNature.js";
import Animal from "./Animal.js";
import Trash from "./Trash.js";
import Weed from "./Weed.js";
import YearCounter from "./YearCounter.js";

let nextYearButton = new NextYearButton(405, 520, "Nächstes Jahr");

let buttons = [
  new Button(45, 465, "Bäume pflanzen"),
  new Button(225, 465, "Müll aufsammeln"),
  new Button(405, 465, "Heu holen"),
  new Button(45, 520, "Bäume roden"),
  new Button(225, 520, "Wild schießen"),
  nextYearButton,
];

let yearCounter = new YearCounter();

class Mainscreen {
  constructor() {}

  displayBackground() {
    background(176, 226, 255);
    fill(237, 190, 130);
    noStroke();
    ellipse(300, 5000, 9700);
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
          tree.createItem();
        });
      }

      //Müll aufsammeln
      if (button.message === "Müll aufsammeln" && button.pressed) {
        trash.forEach((oneTrash) => {
          oneTrash.killItem();
        });
      }

      //Heu holen
      if (button.message === "Heu holen" && button.pressed) {
        weed.forEach((oneWeed) => {
          oneWeed.killItem();
        });
      }

      //Bäume roden
      if (button.message === "Bäume roden" && button.pressed) {
        trees.forEach((tree) => {
          tree.killItem();
        });
      }

      //Jäger holen
      if (button.message === "Wild schießen" && button.pressed) {
        animals.forEach((animal) => {
          animal.killItem();
        });
      }
    });

    buttons.forEach((button) => {
      button.pressed = false;
    });
  }

  refreshScreen() {
    if (nextYearButton.newYear) {
      yearCounter.year++;

      this.readButtons();

      this.displayBackground();

      concat1 = concat(animals, weed);
      concat2 = concat(trees, trash);
      allItems = concat(concat1, concat2);

      // sort by value
      allItems.sort(function (a, b) {
        return a.y - b.y;
      });

      allItems.forEach((item) => {
        item.display();
      });

      dayOneNature.display();

      yearCounter.display();

      // yearCounter.animateYear();

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

let concat1 = [];
let concat2 = [];
let allItems = [];
let trees = [];
let trash;
let animals;
let weed;

let dayOneNature;

function draw() {
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

window.draw = draw;
window.mousePressed = mousePressed;
