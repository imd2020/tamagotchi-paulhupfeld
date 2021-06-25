import Button from "./Button.js";
// import Mainscreen from "./Mainscreen.js";

let button = new Button(225, 400, "Start");

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
    background(0);
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
// let mainscreen = new Mainscreen();

function draw() {
  sketch.display();
  //   console.log(sketch.actualScreen);
}

window.draw = draw;
window.mousePressed = mousePressed;
