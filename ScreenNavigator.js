import Button from "./Button.js";
import Mainscreen from "./Mainscreen.js";

class ScreenNavigator {
  constructor() {
    this.actualScreen = "startscreen";
  }

  startScreen() {
    background(255, 239, 219);

    //Button
    let button = new Button(225, 400, "Start");
    button.display();

    if (
      this.actualScreen === "startscreen" &&
      mouseIsPressed &&
      button.hitTest()
    ) {
      this.actualScreen = "mainscreen";
    }
  }


  
  display() {
    if (this.actualScreen === "startscreen") {
      this.startScreen();
    } else if (this.actualScreen === "mainscreen") {
      mainscreen.displayDraw();
      mainscreen.displayClicked();
    }
  }
}

let screenNavigator = new ScreenNavigator();

function draw() {
  clear();
  // console.log("test");
  //Screens
  screenNavigator.display();

  // boom1.test();
}

function mousePressed() {
  clear();

  buttons.forEach((button) => {
    if (button.hitTest()) {
      button.pressed = !button.pressed;
    }
  });

  mainscreen.displayClicked();
}
