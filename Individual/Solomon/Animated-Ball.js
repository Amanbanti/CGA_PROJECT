var ball1 = createSprite(150, 150,20,20);
ball1.shapeColor=("red");
ball1.velocityX=(-5)
ball1.velocityY=(-6)

var ball2 = createSprite(250, 150,20,20);
ball2.shapeColor=("green");
ball2.velocityX=(-5)
ball2.velocityY=(-6)

var ball3 = createSprite(150, 250,20,20);
ball3.shapeColor=("orange");
ball3.velocityX=(-5)
ball3.velocityY=(-6)

var ball4 = createSprite(250, 250,20,20);
ball4.shapeColor=("black");
ball4.velocityX=(-5)
ball4.velocityY=(-6)

function draw() {
  background("white");
  drawSprites();
  createEdgeSprites();
  ball1.bounceOff(edges);
  ball2.bounceOff(edges);
  ball3.bounceOff(edges);
  ball4.bounceOff(edges);
}
