import Button from "./Button.js";

export default class NextYearButton extends Button {
  constructor(x, y, message) {
    super(x, y, message);
    this.x = x;
    this.y = y;
    this.message = message;
    this.pressed = false;
  }

  display() {
    if (this.pressed === false) {
      fill(44, 149, 44);
    } else {
      mainscreen.year++;
      mainscreen.nextYear = true;

      buttons.forEach((button) => {
        if (button.message === "Bäume roden" && button.pressed) {
          trees.forEach((tree) => {
            tree.kill();
            console.log("kill");
          });
        }
      });

      buttons.forEach((button) => {
        button.pressed = false;
      });
    }
    noStroke();
    rect(this.x, this.y, 150, 40);
    fill(0);
    textSize(18);
    textAlign(CENTER, CENTER);
    text(this.message, this.x + 75, this.y + 22);
  }
}
