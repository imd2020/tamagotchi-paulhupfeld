import { tree1, tree2, tree3, stump } from "./HTML/p5setup.js";

export default class Tree {
  constructor() {
    this.existing = false;

    this.x = -100;
    this.y = -100;

    this.age = 0;
    this.create = true;
    this.kill = false;
    this.laysDown = false;

    this.tree = tree1;
    this.tree1 = tree1;
    this.tree2 = tree2;
    this.tree3 = tree3;

    this.stump = stump;
  }

  //added randomImage
  giveRandomParameters(r) {
    //random Coordinates
    this.x = random(-50, 640);
<<<<<<< HEAD
    this.y = random(180, 360);
=======
    this.y = random(200, 360);
    // trage in array ein
>>>>>>> parent of e269ad9 (y sorted)

    // if (freies Feld?){
    // takenSpace.push([x, y, Weight, Hight]);
    // }
    // else {
    // giveRandomParameters();
    // }

    //isSpaceFree{
    // for every part of array -> (let i; i++; i < array.length) {} -> takenSpace[i];
    // if (this.x + Weight < x || this.x > x + Weight || this.y + Height < y || this.y > y + Hight ){
    //   return true;
    // } else{
    //   retun false;
    // }

    // }

    //Achtung: vlt ist nicht mehr genug PLatz für alle Items

    //random Image
    r = Math.random();
    if (r < 0.5) {
      this.tree = tree1;
    } else if (r < 0.8) {
      this.tree = tree2;
    } else {
      this.tree = tree3;
    }
  }

  createItem() {
    this.create = true;
  }

  createAutomaticly(r) {
    if (this.existing === false) {
      r = Math.random();
      if ((this.create && r < 0.4) || r < 0.05) {
        this.giveRandomParameters();
        this.laysDown = false;
        this.existing = true;
      }
    }
    this.create = false;
  }

  killItem(r) {
    this.kill = true;
  }

  killAutomaticly(r) {
    r = Math.random();
    if ((this.kill && r < 0.5) || r < 0.003 * this.age) {
      this.laysDown = true;
      this.age = 0;
    }
    this.kill = false;
  }

  getOlder() {
    this.age++;

    if (this.laysDown && this.age === 3) {
      this.existing = false;
      this.age = 0;
    }
  }

  placeItem(x, y, s, i) {
    push();
    translate(x - i.width / 20, y - i.height / 10);
    scale(s);
    image(i, 0, 0);
    pop();
  }

  display() {
    this.getOlder();

    this.killAutomaticly();
    this.createAutomaticly();

    if (this.existing) {
      if (this.laysDown === false) {
        this.placeItem(this.x, this.y, 0.11, this.tree);
      } else {
        //placeItem(); nicht möglich, da this.stump.width viel zu hoch
        push();
        translate(this.x - 6, this.y - 5);
        scale(0.03);
        image(this.stump, 0, 0);
        pop();
      }
    }
  }
}
