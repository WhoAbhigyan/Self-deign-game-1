/** @format */
var playerTank;
var enemyTank1, enemyTank2;
var backgroundImg;

function preload() {
  playerTank = loadImage("assets/player.png");
  enemyTank1 = loadImage("assets/enemy.png");
  enemyTank2 = loadImage("assets/enemy2.png");
  backgroundImg = loadImage("assets/background.png");
  Blast = loadSound("assets/Blast.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(backgroundImg);
  drawSprites();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
