import TObject from "./TObject.js";

export default class TCreature extends TObject {
  constructor(x, y, age, limit) {
    super(0, x, y);
    this.age = age;
    this.limit = limit;
  }

  // getOlder(){}
  // kill){}
  // killRandomly){}
  // place){}
  // placeRandomly){}
  // makeChildren){}
}
