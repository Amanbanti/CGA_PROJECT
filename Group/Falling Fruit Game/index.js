var basket = createSprite(200, 350);
basket.setAnimation("basket");
basket.scale = 0.8;

var score = 0;
var health = 3;

var fruits = [];
var rocks = [];

function draw() {
  background("skyblue");

  fill("green");
  rect(0, 380, 400, 20);

  if (keyDown("left") && basket.x > 30) {
    basket.x -= 5;
  }
  if (keyDown("right") && basket.x < 370) {
    basket.x += 5;
  }

  if (frameCount % 60 === 0) {
    var fruit = createSprite(randomNumber(20, 380), 0);
    fruit.setAnimation("fruit");
    fruit.scale = 0.5;
    fruit.velocityY = randomNumber(3, 6);
    fruits.push(fruit);

    if (randomNumber(1, 3) === 1) {
      var rock = createSprite(randomNumber(20, 380), 0);
      rock.setAnimation("rock_1");
      rock.scale = 0.4;
      rock.velocityY = randomNumber(3, 6);
      rocks.push(rock);
    }
  }

  for (var i = fruits.length - 1; i >= 0; i--) {
    if (basket.isTouching(fruits[i])) {
      score++;
      fruits[i].destroy();
      fruits.splice(i, 1);
    } else if (fruits[i].y > 400) {
      health--;
      fruits[i].destroy();
      fruits.splice(i, 1);
    }
  }

  for (var j = rocks.length - 1; j >= 0; j--) {
    if (basket.isTouching(rocks[j])) {
      health--;
      rocks[j].destroy();
      rocks.splice(j, 1);
    } else if (rocks[j].y > 400) {
      rocks[j].destroy();
      rocks.splice(j, 1);
    }
  }

  textSize(20);
  fill("white");
  text("Score: " + score, 20, 20);
  text("Health: " + health, 300, 20);

  if (health <= 0) {
    background("black");
    fill("red");
    textSize(40);
    text("Game Over!", 100, 200);
    noLoop();
  }

  drawSprites();
}
