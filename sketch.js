var dustbinImg,dustS;
var d1,d2,d3;
var g;
var b;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body  = Matter.Body;
const render = Matter.Render;
var back;
function preload()
{
  dustbinImg=loadImage("dustbingreen.png");
  back = loadImage("download.jpg")
}
function setup()
 {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
   g = new ground(500,690,2550,20);
  
   d1 = new dustbin(1110,670,120,20);
   d2 = new dustbin(1050,610,20,190);
   d3 = new dustbin(1170,610,20,190);
   
   dustS=createSprite(1110,600,120,120);
   dustS.addImage("d",dustbinImg);
   dustS.scale=0.5;
    
    b= new pap(100,400,50);

	Engine.run(engine);
  console.log(b);
}

function draw() 
{
  background(back);

  d1.display();
  d2.display();
  d3.display();

  b.display();

  g.display();
 
  Engine.update(engine);

       keyPressed();
  
  drawSprites();
}

function keyPressed()
{
  if(keyDown(UP_ARROW))
  {
   Matter.Body.applyForce(b.body,b.body.position,{x:90,y:-100});
  }
}