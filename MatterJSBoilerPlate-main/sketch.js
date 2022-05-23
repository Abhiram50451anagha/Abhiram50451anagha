
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var radius=40;
var ground,leftside,rightside

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false ,
		restituiton:0.3,
		density:1.2,
		friction:0,
		
	
	}
	ball=Bodies.circle(100,100,radius/2,ball_options)
	World.add(world,ball);
	ground=new Ground(width/2,670,width,20);
	leftside=new Ground(1100,600,20,120);
	rightside= new Ground (1350,600,20,120);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius);
  ground.display();
  leftside.display();
  rightside.display();
  
  drawSprites();
 
}
function keyPressed () {
	if(keyCode==UP_ARROW) {
		Matter.Body.applyForce (ball,ball.position,{x:95,y:-95})
	}
}



