var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var gameState;
var PLAY=1;
var END=0;
function preload() {
monkey_running = loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}

function setup(){
monkey=createSprite(50,160,20,50);
monkey.velocityX=5;
monkey.scale=0.5;
monkey.addAnimation(monkey_running);
monkey.addAnimation("running", monkey_running);


ground=createSprite(200,180,400,20);
ground.velocityX=-4;



fruitGroups=createGroup();
obstacleGroups=createGroup();
}

function draw(){
background("white");
text(
if(keyDown("space")&&monkey.y>=100){
monkey.velocityY=-4; 
monkey.velocityY=monkey.velocityY+0.8;
}
if(ground.x>0){
ground.x=ground.width/2; 
}
if(gameState===PLAY){
monkey=createSprite(50,160,20,50);
monkey.velocityX=5;
monkey.scale=0.5;
monkey.addAnimation(monkey_running);
monkey.addAnimation("running", monkey_running);
monkey.addAnimation("collided", monkey_collided);
ground=createSprite(200,180,400,20);
ground.velocityX=-4;
ground.addImage(groundImage);
}
if(gameState===END){
 
}
if(monkey.isTouching(obstacle)){
obstacle.destroyEach();  
}

drawSprites();
}

function obstacale(){
if(frameCount%100===0){
obstacle=createSprite(600,160,400,30);
obstacle.scale=0.3;
obstacleGroups.add(obstacle);
}
}
function fruit(){
if(frameCount%100===0){
banana.x=Math.round(random(80,120));
banana=createSprite(600,160,400,30);
banana.addImage(bananaImage);
banana.scale=0.3;
banana.lifetime=100;
fruitGroups.add(banana);
}
}
