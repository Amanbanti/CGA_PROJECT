var ball = createSprite(200, 200);
ball.setAnimation("ball");
ball.scale = 0.10;
ball.velocityY = 5;
ball.velocityX = 10;
var paddle = createSprite(200, 380);
paddle.setAnimation("paddle");
paddle.width = 200;
var brick1 = createSprite(100, 150);
brick1.setAnimation("brick");
var brick2 = createSprite(300, 75);
brick2.setAnimation("brick");
var star = createSprite(54, 95);
star.setAnimation("redstar");
var star2 = createSprite(302, 25);
star2.setAnimation("redstar");

var edges = createEdgeSprites();
var gameStatus = "play"

var score = 0;
function draw() {

//Call Functions

bg ()
textSize(20)
text("Score:" + score , 50,40)
ballBounce()
brick()
movePaddle ()
collectStar()
gameOver()
replay()
drawSprites();
}

//Create the gameBackground Function
function bg (){
  background("lightblue")
}


//Create the movePaddle Function
  function movePaddle (){
   
    if(keyDown("right")){
      paddle.x += 8
    }
    if(keyDown("left")){
      paddle.x -= 8
    }
    if (ball.isTouching(paddle)) {
    ball.bounceOff(paddle);
  }
  }


//Create the ballBounce Function
function ballBounce() {
  
  ball.bounceOff(edges[0]); // Top edge
  ball.bounceOff(edges[1]); // Right edge
  ball.bounceOff(edges[2]); // Bottom edge
  
   
}


//Create the collectStar Function
 function collectStar() {
  if (ball.isTouching(star)) {
    score += 1;
    star.x = randomNumber(50, 300); // Update star position
    star.y = randomNumber(50, 300);
  }

  if (ball.isTouching(star2)) {
    score += 1;
    star2.x = randomNumber(50, 300); // Update star2 position
    star2.y = randomNumber(50, 300);
  }
}


//bricks
  function brick(){
    ball.bounceOff(brick1);
    ball.bounceOff(brick2); 
    
  }
  
  
//Game over
function gameOver() {
  if (ball.y > 400) {
    background("lightblue");
    textSize(50);
    fill("red");
    text("GAME OVER!", 50, 230);
    textSize(20)
    text("Click 'r' to Play Again! ", 110, 270);
    score=0;
    gameStatus = "over"
   
  }
}


//replay
function replay(){
  if (keyDown('r') && gameStatus=="over"){
    ball.x= 200;
    ball.y= 200;
    ball.velocityY = 5;
    ball.velocityX = 10;
    gameStatus = "play"
  }
}








