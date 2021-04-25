var canvas;
var music;

var movingBox;
var collisionSurface1;
var collisionSurface2;
var collisionSurface3;
var collisionSurface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    
collisionSurface1=createSprite(100,595,200,10);
collisionSurface2=createSprite(300,595,200,10);
collisionSurface3=createSprite(500,595,200,10);
collisionSurface4=createSprite(700,595,200,10);

movingBox=createSprite(400,300,20,20);

collisionSurface1.shapeColor="green";
collisionSurface2.shapeColor="blue";
collisionSurface3.shapeColor="purple";
collisionSurface4.shapeColor="red";

movingBox.shapeColor="black";

}

function draw() {
    background(rgb(169,169,169));
    
if(keyDown("Space"))
{
movingBox.velocityX=5;
movingBox.velocityY=7;
}

if(movingBox.x>800||movingBox.x<0)
{
movingBox.velocityX=movingBox.velocityX*(-1);
}

if(movingBox.y>600||movingBox.y<0)
{
movingBox.velocityY=movingBox.velocityY*(-1);
}

if(collisionSurface1.isTouching(movingBox)&& movingBox.bounceOff(collisionSurface1))
{
movingBox.shapeColor="green";
}

if(collisionSurface2.isTouching(movingBox)&& movingBox.bounceOff(collisionSurface2))
{
movingBox.shapeColor="blue";
}

if(collisionSurface3.isTouching(movingBox)&& movingBox.bounceOff(collisionSurface3))
{
movingBox.shapeColor="purple";
}

if(collisionSurface4.isTouching(movingBox)&& movingBox.bounceOff(collisionSurface4))
{
movingBox.shapeColor="red";
}

    drawSprites();
}

