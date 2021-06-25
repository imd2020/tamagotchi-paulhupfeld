import Button from "./Button.js";
import NextYearButton from "./NextYearButton.js";
import Tree from "./Tree.js";
import DayOneNature from "./DayOneNature.js";
import Animal from "./Animal.js";
import Trash from "./Trash.js";
import Weed from "./Weed.js";
// import YearCounter from "./YearCounter.js";
import { animal } from "./HTML/p5setup.js";

// let yearCounter = new YearCounter();
let startButton = new Button(225, 450, "Start");
let nextYearButton = new NextYearButton(405, 520, "Nächstes Jahr");
let buttons = [
  new Button(45, 465, "Bäume pflanzen"),
  new Button(225, 465, "Müll aufsammeln"),
  new Button(405, 465, "Heu holen"),
  new Button(45, 520, "Bäume roden"),
  new Button(225, 520, "Wild schießen"),
  nextYearButton,
];

class Mainscreen {
  constructor() {
    this.year = 2020;

    this.screen = "startscreen";
  }

  displayBackground() {
    background(176, 226, 255);
    fill(237, 190, 130);
    noStroke();
    ellipse(300, 5000, 9700);
  }

  displayYearCounter() {
    fill(0);
    textFont("Herculanum");
    textAlign(LEFT);
    textSize(22);
    text(this.year, 5, 15);
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
      this.year++;

      this.readButtons();

      this.displayBackground();

      trash.forEach((oneTrash) => {
        oneTrash.display();
      });

      concat1 = concat(animals, weed);
      concat2 = concat(dayOneNature, trees);
      allItems = concat(concat1, concat2);

      // sort by value
      allItems.sort(function (a, b) {
        return a.y - b.y;
      });

      allItems.forEach((item) => {
        item.display();
      });

      // yearCounter.display();
      // yearCounter.animate();

      this.displayYearCounter();
      nextYearButton.newYear = false;
    }
  }

  startscreen() {
    background(255, 239, 219);

    push();
    translate(300, 280);
    scale(0.12);
    imageMode(CENTER);
    image(animal, 0, 0);
    pop();

    textFont("Herculanum");
    textAlign(CENTER);
    textSize(80);
    text("WOODMAN", 300, 100);

    textSize(15);
    text("Du bist Förster: lasse die Natur sprießen und gedeihen!", 300, 530);

    textFont("Helvetica");
    textSize(10);
    text(
      "Deer vector created by macrovector on pnghunter.com – Plant vectors created by macrovector on freepik.com",
      300,
      570
    );

    //Button
    startButton.display();

    if (mouseIsPressed && startButton.hitTest()) {
      this.screen = "mainscreen";
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

  if (startButton.hitTest()) {
    startButton.pressed = !startButton.pressed;
  }
  // animateYear();
}

let start = true;

let trees = [];
let trash = [];
let animals = [];
let weed = [];
let dayOneNature = [];
let concat1 = [];
let concat2 = [];
let allItems = [];

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

    dayOneNature = [
      new DayOneNature(),
      new DayOneNature(),
      new DayOneNature(),
      new DayOneNature(),
      new DayOneNature(),
    ];
    start = false;
  }

  if (mainscreen.screen === "startscreen") {
    mainscreen.startscreen();
  } else {
    mainscreen.displayHotbar();
    mainscreen.refreshScreen();
  }
}

window.draw = draw;
window.mousePressed = mousePressed;
