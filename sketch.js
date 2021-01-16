const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball;
var cube1,cube2,cube3,cube4;
var cube9,cube5,cube6,cube7;
var slingShot;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

ball = new Ball(200,350,10,10);
cube1 = new Cube(400,350,50,10);
cube2 = new Cube(410,350,50,10);
cube3 = new Cube(420,350,50,10);
cube4 = new Cube(430,350,50,10);
cube5 = new Cube(440,350,50,10);
cube6 = new Cube(450,350,50,10);
cube7 = new Cube(460,350,50,10);
cube8 = new Cube(470,350,50,10);
cube9 = new Cube(480,350,50,10);

	engine = Engine.create();
	world = engine.world;
	slingShot = new Rope(ball.body,{x:400,y:600});
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
ball.display();
cube1.display();
cube2.display();
cube3.display();
cube4.display();
cube5.display();
cube6.display();
cube7.display();
slingShot.display();
cube8.display();
cube9.display();
}
function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
	
	}
	function mouseReleased(){
	slingShot.fly();
	}
	
