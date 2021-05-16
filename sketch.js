
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	crumpledball.createSprite(200,200,20,20);
	crumpledball.World
	(World.addcrumpledball)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  {if(keywentdown(uparrowkey)
	crumpledball.y=-3)}
  drawSprites();
 
  
}



