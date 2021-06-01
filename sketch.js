var rect1, rect2;



function setup() {
  createCanvas(800,400);
  
  rect1 = createSprite(200,200,100,50);
  rect1.shapeColor = "green";
  rect2 = createSprite(100,100,50,100);
  rect2.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  
  rect2.x = World.mouseX;
  rect2.y = World.mouseY;


  if(rect2.x-rect1.x <= rect2.width/2 + rect1.width/2
    && 
    rect1.x-rect2.x<=rect2.width/2+rect1.width/2
    &&
    rect2.y - rect1.y <= rect2.height/2 + rect1.height/2 
    &&
    rect1.y - rect2.y <= rect1.height/2 + rect2 .height/2 ){
    rect2.shapeColor = "red";
    rect1.shapeColor = "red";
  }else{
    rect2.shapeColor = "green";
    rect1.shapeColor = "green";
  }
  drawSprites();
}