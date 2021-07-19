// import gsap from "./gsap.min.js";

let year = {
  x: 10,
  y: 10,
  a: 0,
  b: 0,
  c: 0,
  scale: 1,
};

function displayYearCounter() {
  background(160);

  push();
  translate(year.x, year.y);
  scale(year.scale);

  fill(year.a, year.b, year.c);

  textSize(18);
  textAlign(LEFT, TOP);
  text("2020", 0, 0);

  pop();
}

function animateYear() {
  gsap.to(year, {
    duration: 0.2,
    ease: "yoyo",
    scale: 1.7,
    a: 80,
    b: 155,
    c: 80,

    onComplete: () => {
      gsap.to(year, {
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

function draw() {
  displayYearCounter();
}

function mouseClicked() {
  animateYear();
}
