function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  createSprite(400, 250, 50, 50);
  createSprite(400, 300, 50, 50);
  createSprite(350, 200, 50, 50);
  createSprite(350, 250, 50, 50);
  createSprite(350, 300, 50, 50);
  createSprite(300, 200, 50, 50);
  createSprite(300, 250, 50, 50);
  createSprite(300, 300, 50, 50);
  createSprite(263, 200, 35, 130);
  createSprite(263, 270, 35, 110);
  createSprite(433, 200, 35, 130);
  createSprite(433, 270, 35, 110);

}

function draw() {
  background(255,255,255);  
  drawSprites();
}