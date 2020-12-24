var thickness,wall;
var speed,weight,bullet;

function setup() {
  createCanvas(1400,400);
 

wall=createSprite(1200,200,thickness,canvas.height/2);
wall.shapeColor=(80,80,80);

bullet=createSprite(50,200,50,5);

bullet.shapeColor=color(255);

speed=random(223,321);
weight=random(30,52,1500);

thickness=random(22,83);



}

function draw() {
  background("teal");  
  bullet.veloxityX=9;

  if(hascolllided(bullet, wall)){

    bullet.veloxityX=0;
    var damage=0.5*weight*speed*speed/(thickness * thickness * thickness);
    if(damage>10){
      wal.shapeColor=color(255,0,0);
    }

  if(damage<10){
  
  wall.shapeColor=color(0.255,0);
  }

  
  }
  
  
 
 
  drawSprites();
}

function hascolllided(lbullet, lwall){



   bulletRightEdge=lbullet.x +lbullet.width;
   wallLeftEdge=lwall.x;
   if(bulletRightEdge>=wallLeftEdge){
     return true;
   }
   return false;
}



