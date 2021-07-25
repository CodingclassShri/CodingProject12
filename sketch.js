var  runner, runner_running
var pathImg, path
var left_boundary, right_boundary

function preload(){
  //pre-load images
  runner_running = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
  
  runner = createSprite(200, 340, 50, 100);
  runner.addAnimation("running", runner_running);
  
  
  left_boundary = createSprite(0, 300, 100, 600);
  right_boundary = createSprite(390,300,80,60);
  
  left_boundary.visible = false;
  right_boundary.visible = false;
}

function draw() {
  background(0);

    runner.x = World.mouseX;
    
    console.log(runner.x);
    
    edges = createEdgeSprites();
    runner.collide(left_boundary);
    runner.collide(right_boundary);
    runner.collide(edges[3]);
    
    //code to reset background
    if(path.y > 400 ){
      path.y = height/2;
    }
  
    drawSprites();
}
