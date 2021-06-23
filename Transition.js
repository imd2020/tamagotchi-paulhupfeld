class Transition {
  constructor() {
    this.transparency = 0;
    this.change = "gettingHigher";
  }

  controllTransparency() {
    if (this.transparency >= 255) {
      this.change = "gettingLower";
    }

    if (this.change === "gettingHigher") {
      this.transparency += 20;
    } else if (this.change === "gettingLower") {
      this.transparency -= 20;
    }
  }

  stopTransition() {}

  display() {
    clear();
    fill(180, 255, 180, this.transparency);
    rect(0, 0, 600, 600);

    fill(180, 255, 180, this.transparency * 3);

    textAlign(LEFT, LEFT);

    textSize(50);

    text("Sommer 2020", 250, 280, 100, 300);
    // text("Sommer ) + mainscreen.year, 10, 20);

    this.controllTransparency();
  }
}

let transition = new Transition();

function draw() {
  transition.display();
}
