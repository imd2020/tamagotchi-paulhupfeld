import Button from "./Button.js";

export default class NextYearButton extends Button {
  constructor(x, y, message) {
    super(x, y, message);
    this.x = x;
    this.y = y;
    this.message = message;
    this.pressed = false;
    this.newYear = false;
  }

  display() {
    if (this.pressed === false) {
      fill(44, 149, 44);
    } else {
      this.newYear = true;
    }
    noStroke();
    rect(this.x, this.y, 150, 40);
    fill(0);
    textSize(18);
    textAlign(CENTER, CENTER);
    text(this.message, this.x + 75, this.y + 22);
  }
}
