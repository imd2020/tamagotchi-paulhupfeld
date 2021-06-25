// import Button from "./Button.js";
// import Mainscreen from "./Mainscreen.js";

// let button = new Button(225, 400, "Start");

class Sketch {
  constructor() {
    this.actualScreen = "startscreen";
  }

  startScreen() {
    background(255, 239, 219);

    //Button

    // button.display();

    // if (
    //   this.actualScreen === "startscreen" &&
    //   mouseIsPressed &&
    //   button.hitTest()
    // ) {
    //   this.actualScreen = "mainscreen";
    // }
  }

  display() {
    if (this.actualScreen === "startscreen") {
      this.startScreen();
      console.log("h");
    }
    //  else if (this.actualScreen === "mainscreen") {
    //   mainscreen.displayDraw();
    //   mainscreen.displayNextYear();
    // }
  }
}

let sketch = new Sketch();

// function mousePressed() {
//   // clear();

//   buttons.forEach((button) => {
//     if (button.hitTest()) {
//       button.pressed = !button.pressed;
//     }
//   });
// }

function draw() {
  clear();
  console.log("hi");
  sketch.startScreen();
}
