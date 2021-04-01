
var bullet;
var wall;
var speed;
var weight;
var thickness;

function setup() {
  createCanvas(1600, 400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 50, 10);
  bullet.velocity.x = 0;
  wall = createSprite(1200, 200, thickness, height/2);

  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  if(hasCollided(bullet, wall)){
    bullet.velocity.x = 0;

    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage>10){
      bullet.shapeColor = color(255, 0, 0);
      wall.shapeColor = color(255, 0, 0);
    }

    if(damage<10){
      bullet.shapeColor = color(0, 255, 0);
      wall.shapeColor = color(0, 255, 0);
    }
  }
  drawSprites();
}

function hasCollided(lbullet, lwall){
   bullet.RightEdge = lbullet.x + lbullet.width;
   wallLeftEdge  = lwall.x;
   if (bullet.RightEdge>=wall.LeftEdge){
      return true
   }
   return false; 
}