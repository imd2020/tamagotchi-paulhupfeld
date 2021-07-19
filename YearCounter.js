// import gsap from "./gsap.min.js";

export default class YearCounter {
  constructor() {
    this.x = 10;
    this.y = 10;
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.scale = 1;
  }

  display() {
    push();
    translate(this.x, this.y);
    scale(this.scale);

    fill(this.a, this.b, this.c);

    textSize(18);
    textAlign(LEFT, TOP);
    text("2020", 0, 0);

    pop();
  }

  animate() {
    console.log("h");
    gsap.to(this, {
      duration: 0.2,
      ease: "yoyo",
      scale: 1.7,
      a: 80,
      b: 155,
      c: 80,

      onComplete: () => {
        gsap.to(this, {
          duration: 0.4,
          ease: "yoyo",
          scale: 1,
          a: 0,
          b: 0,
          c: 0,
        });
      },
    });
  }
}
