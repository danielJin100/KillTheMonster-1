const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var backgroundImg;
var backgroundShift = 0;
var bee, messy;
var sling;
var brickArray = [];

var ground;

function preload() {
  engine = Engine.create();
  world = engine.world;

  backgroundImg = loadImage("GamingBackground.png");

  Engine.run(engine);
}

function setup() {
  createCanvas(3000, 800);
  ground = new Ground(1000,600,1500,50);
  bee = new Bee(1500,300,480,270);
  messy = new Messy(700, 300, 480, 270);
  for(var i = 0; i < 5; i++){
    for(var j = 0; j < 5; j++){
      brickArray.push(new Brick(i*50+1000,j));
    }
  }
  sling = new Sling(messy.body,{x: 700, y: 300});
}

function draw() {
  background(0);
  image(backgroundImg, 0-backgroundShift, 0, 6000, 800);
  if(mouseIsPressed){
    Body.setPosition(messy.body,{x: mouseX, y: mouseY});
  }
  length = brickArray.length;
  backgroundShift += 10;
  backgroundShift = backgroundShift % 2800;
  Engine.update(engine);
  ground.display();
  bee.display();
  messy.display();
  for(var i = 0; i < length; i++){
    brickArray[i].display();
  }

}

