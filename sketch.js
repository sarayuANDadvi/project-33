const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var backgroundImg;
var girlImg,girl;
var snow,snowImg;
var wind,windSound;

function preload(){
   backgroundImg = loadImage("snow1.jpg");
   girlImg = loadImage("girl.png");
   windSound = loadSound("wind-1.mp3");
}

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  girl = createSprite(400, 200, 50, 50);
  image(girlImg,0,0,800,50);

  snow = new Snow(200,50);
}

function draw() {
  background(backgroundImg);
  drawSprites();

  snow.display();
}