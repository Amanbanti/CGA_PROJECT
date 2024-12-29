var gun = createSprite(200, 350);
gun.setAnimation("gun");
gun.scale = 0.5;

var bowl = createSprite(200, 20);
bowl.setAnimation("bowl_1");
bowl.scale = 0.5;

var bx = 3; 
bowl.velocityX = bx;

var bullets = [];
var score = 0; 

function draw() {
  background("skyblue");

  textSize(20);
  fill("black");
  text("Score: " + score, 10, 20);

  // Reverse bowl direction when it reaches theedges
  if (bowl.x > 390) {
    bowl.velocityX = -bx;
  }
  if (bowl.x < 10) {
    bowl.velocityX = bx;
  }

  // Move the gun left and right with arrow keys
  if (keyDown("left") && gun.x > 20) {
    gun.x -= 5;
  }
  if (keyDown("right") && gun.x < 380) {
    gun.x += 5;
  }

  
  if (keyWentDown("space")) {
    var bullet = createSprite(gun.x, gun.y); 
    bullet.setAnimation("bullet");
    bullet.scale = 0.4;
    bullet.velocityY = -5; 
    bullets.push(bullet); 
  }

  // Update bullets
  for (var i = bullets.length - 1; i >= 0; i--) {
    if (bullets[i] && dist(bullets[i].x, bullets[i].y, bowl.x, bowl.y) < (bullets[i].width / 2 + bowl.width / 2)) {
      bullets[i].remove(); 
      bullets.splice(i, 1);

      // Increment the score
      score++;

      bowl.x = randomNumber(10, 390);
    }

    // Remove bullets
    if (bullets[i] && bullets[i].y < 0) {
      bullets[i].remove();
      bullets.splice(i, 1);
    }
  }

  drawSprites();
}
