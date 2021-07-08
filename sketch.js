var road;
var person;
var invisible_wall1;
var invisible_wall2;
function preload(){
  //pre-load images
  person_running = loadAnimation("Runner-1.png","Runner-2.png");
  road1 = loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  // person = createSprite(300,200,50,50);
  // person.addAnimation("running",person_running);
  // person.scale=0.1

  road = createSprite (200,200,6,6);
  road.addImage("path",road1);
  road.velocityY=4;
  road.scale=1.2;

  invisible_wall1 = createSprite (35,200,20,400);
  invisible_wall1.visible = false;

  invisible_wall2 = createSprite (365,200,20,400);
  invisible_wall2.visible = false;


  person = createSprite(300,200,50,50);
  person.addAnimation("running",person_running);
  person.scale=0.1
  //person.x = World.mouseX;

}

function draw() {
  background(0);
  if (road.y>400) {
    road.y = height/2;
  }
  person.x = World.mouseX
  person.collide(invisible_wall1);
  person.collide(invisible_wall2);
  drawSprites();
}


