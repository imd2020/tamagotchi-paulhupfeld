export default class TObject {
  constructor(layer, x, y) {
    this.layer = layer;
    this.x = x;
    this.y = y;
  }

  grafikStart() {
    push();
    translate(this.x, this.y);
  }

  grafikEnd() {
    pop();
  }

  // display(){}
}
