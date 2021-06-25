function setup() {
  let canvas = createCanvas(600, 595);
  // canvas.parent("sketch-holder");
  frameRate(30);
}
window.setup = setup;
/*
new p5();
var width = windowWidth;
var height = windowHeight;
*/

let tree1;
let tree2;
let tree3;
let animal;
let trash;
let weed1;
let weed2;
let weed3;
let weed4;
let stump;
let deko;
let stone1;
let stone2;

function preload() {
  tree1 = loadImage("./images/tree1.png");
  tree2 = loadImage("./images/tree2.png");
  tree3 = loadImage("./images/tree3.png");
  animal = loadImage("./images/animal.png");
  trash = loadImage("./images/trash.png");
  weed1 = loadImage("./images/weed1.png");
  weed2 = loadImage("./images/weed2.png");
  weed3 = loadImage("./images/weed3.png");
  weed4 = loadImage("./images/weed4.png");
  stump = loadImage("./images/stump.png");
  deko = loadImage("./images/deko.png");
  stone1 = loadImage("./images/stone1.png");
  stone2 = loadImage("./images/stone2.png");
}

export {
  tree1,
  tree2,
  tree3,
  animal,
  trash,
  weed1,
  weed2,
  weed3,
  weed4,
  stump,
  deko,
  stone1,
  stone2,
};

window.preload = preload;
