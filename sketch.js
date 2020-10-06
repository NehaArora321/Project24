
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,dustLeft,dustBottom,dustRight,paper;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground=new Dustbin(width/2,370,width,20,"yellow");

	dustLeft=new Dustbin(width-300,290,20,100,"white");
	dustBottom=new Dustbin(width-200,350,200,20,"white");
	dustRight=new Dustbin(width-100,290,20,100,"white");

	paper=new Paper(100,100,20);
	Engine.run(engine);
  
}


function draw() {
  background(0);

  ground.display();
  dustLeft.display();
  dustBottom.display();
  dustRight.display();

  paper.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-75});
  
	}
}




