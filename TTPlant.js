import TCreature from "./TCreature.js";

export default class TTree extends TCreature {
  constructor(x, y, age, limit, size, alive) {
    super(x, y, age, limit);

    this.size = size;
    this.alive = alive;
  }

  //grow(){}
  //layDown(){}
}
