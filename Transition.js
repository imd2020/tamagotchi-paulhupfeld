export default class Transition {
  constructor() {
    this.transparency = 0;
    this.change = "gettingHigher";
  }

  controllTransparency() {
    if (this.transparency >= 140) {
      this.change = "gettingLower";
    }

    if (this.change === "gettingHigher") {
      this.transparency += 10;
    } else if (this.change === "gettingLower") {
      this.transparency -= 10;
    }
  }

  display() {
    clear();
    fill(180, 255, 180, this.transparency);
    rect(0, 0, 600, 600);

    // fill(180, 255, 180, this.transparency * 3);
    // textAlign(CENTER, CENTER);
    // textSize(50);
    // text(mainscreen.year, 300, 310);
    // text("Sommer ) + mainscreen.year, 10, 20);

    this.controllTransparency();
  }
}
