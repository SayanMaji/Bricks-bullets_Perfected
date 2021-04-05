var bullet,wall;
var speed,weight,thickness;
var deform;

function setup() {
  createCanvas(1200,400);
bullet=createSprite(50,200,100,20);
bullet.shapeColor="white";
thickness=Math.round(random(22,83));
wall=createSprite(1000,200,thickness,height/2);
wall.shapeColor=color(80,80,80);
speed=Math.round(random(220,320));
  weight=Math.round(random(30,52));
 
}
function draw() {
  background("blue");  

  

bullet.velocityX=speed;

if(collided(bullet,wall)){

  bullet.velocityX=0;
  damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);

  if(damage>10){

    wall.shapeColor=color(255,0,0);
  }

  else if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}


  drawSprites();
}

function collided(striker,barrier){
  if(striker.x+striker.width>=barrier.x){
    return true;
  }
  else {
    return false;
  }
}