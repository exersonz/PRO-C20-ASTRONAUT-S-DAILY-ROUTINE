var bath, bathImg;
var brush, brushImg;
var sleep, sleepImg;
var drink, drinkImg;
var eat, eatImg;
var gym, gymImg;
var move, moveImg;
var astronaut;
var space_Wallpaper, space_WallpaperImg;

function preload()
{
  bathImg = loadAnimation("bath1.png", "bath2.png");
  brushImg = loadImage("brush.png");
  eatImg = loadAnimation("eat1.png", "eat2.png");
  gymImg = loadAnimation("gym1.png", "gym2.png");
  moveImg = loadAnimation("move.png", "move1.png");
  sleepImg = loadImage("sleep.png");
  drinkImg = loadAnimation("drink1.png", "drink2.png");
  space_WallpaperImg = loadImage("iss.png");
}

function setup()
{
  createCanvas(800,400);

  edges = createEdgeSprites();
  
  space_Wallpaper = createSprite(400,200);
  space_Wallpaper.addImage(space_WallpaperImg);
  space_Wallpaper.scale = 0.2;

  astronaut = createSprite(300,230);
  astronaut.addImage(sleepImg);
  astronaut.scale = 0.1;
  astronaut.velocityX = 2;
  astronaut.velocityY = -2;
  astronaut.setCollider("rectangle",0,0,1200,2500);
  astronaut.debug = false;

}

function draw() 
{
  background(255,255,255);  
  drawSprites();

  astronaut.bounceOff(edges);

  textSize(20)
  fill("white");
  text("Intructions: ", 20, 20);

  textSize(15)
  fill("white");
  text("Up Arrow = Brushing", 20, 40);

  fill("white");
  text("Down Arrow = Gymming", 20, 60);

  fill("white");
  text("Left Arrow = Eating", 20, 80);

  fill("white");
  text("Right Arrow = Bathing", 20, 100);

  fill("white");
  text("m key = Change Moving Direction", 20, 395);

  if(keyDown("up_arrow"))
  {
    astronaut.addAnimation("brushing", brushImg);
    astronaut.changeAnimation("brushing");

    astronaut.setCollider("rectangle",-250,100, 1200, 2600);
    astronaut.debug = false;

    fill("yellow");
    text("Up Arrow = Brushing", 20, 40);
  }

  if(keyDown("down_arrow"))
  {
    astronaut.addAnimation("gymming", gymImg);
    astronaut.changeAnimation("gymming");

    astronaut.setCollider("rectangle",0,0, 2000, 2200);
    astronaut.debug = false;

    fill("yellow");
    text("Down Arrow = Gymming", 20, 60);
  }

  if(keyDown("left_arrow"))
  {
    astronaut.addAnimation("eating", eatImg);
    astronaut.changeAnimation("eating");

    astronaut.setCollider("rectangle",-100,-100, 1800, 2200);
    astronaut.debug = false;

    fill("yellow");
    text("Left Arrow = Eating", 20, 80);
  }

  if(keyDown("right_arrow"))
  {
    astronaut.addAnimation("bathing", bathImg);
    astronaut.changeAnimation("bathing");

    astronaut.setCollider("rectangle",0,0, 1300, 2700);
    astronaut.debug = false;

    fill("yellow");
    text("Right Arrow = Bathing", 20, 100);
  }

  if(keyDown("m"))
  {
    astronaut.velocityX = Math.round(random(-2,2));
    astronaut.velocityY = Math.round(random(-2,2));

    fill("yellow");
    text("m key = Change Moving Direction", 20,395);
  }
}