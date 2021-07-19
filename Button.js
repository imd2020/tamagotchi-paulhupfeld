export default class Button {
  constructor(x, y, message) {
    this.x = x;
    this.y = y;
    this.message = message;
    this.pressed = false;
  }

  display() {
    if (this.pressed === false) {
      fill(215, 143, 73);
    } else {
      fill(165, 93, 23);
    }
    noStroke();
    rect(this.x, this.y, 150, 40);
    fill(0);
    textFont("Helvetica");
    textSize(18);
    textAlign(CENTER, CENTER);
    text(this.message, this.x + 75, this.y + 22);
  }

  hitTest() {
    if (
      mouseX > this.x &&
      mouseX < this.x + 150 &&
      mouseY > this.y &&
      mouseY < this.y + 45
    ) {
      return true;
    } else {
      return false;
    }
  }
}
