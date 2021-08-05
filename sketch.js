var ufoImg,ufo



function preload(){
marsImg=loadImage("mars background.jpg")
ufoImg=loadImage("ufo.png")
meteor00=loadImage("meteor2.jpg")
}

function setup() {
  createCanvas(1700,750)

 ufo=createSprite(50,400,10,10)
 ufo.addImage(ufoImg)
 ufo.scale=0.2

 mars=createSprite(850,400,2000,1000)
 mars.addImage(marsImg)
 mars.scale=2.5
// mars.velocityX=-6
 mars.depth=ufo.depth
 ufo.depth=mars.depth+1
 
}

function draw() {
 background(0);

// if (mars.x< 300){
//  mars.x = mars.width/2;
//}

if(keyDown(38)){
  ufo.y=ufo.y-4
}

if(keyDown(37)){
  ufo.y=ufo.y+4
}

if(keyDown(32)){
  reset();
}

  meteors();
  drawSprites();
}

function meteors(){
  if(frameCount%100===0){
  var meteor=createSprite(1600,10,20,20)
  meteor.addImage(meteor00)
  meteor.x = Math.round(random(1000,1600));
  meteor.scale=0.2
  meteor.velocityX=-8;
  meteor.velocityY=10;
  meteor.lifetime=800;
}
}
