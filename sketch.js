const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var tree, stone, ground, launcher;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11;
var world, boy;
var launchingForce=100;

function preload()
{
	boy = loadImage("Boy.png");
//	tree = loadImage("Tree.png");
}

function setup() {
	var canvas = createCanvas(800, 700);

	ground = new Ground(600,height,800,20);
	tree = createSprite(650,570,400,500);
	launcher = new launcher({x:200,y:100});

	stone = new Stone(235,420,30);

	mango1 = new Mango(1100,100,30);
	mango2 = new Mango(1170,130,30);
	mango3 = new Mango(1010,140,30);
	mango4 = new Mango(1000,70,30);
	mango5 = new Mango(1100,70,30);
	mango6 = new Mango(1000,230,30);
	mango7 = new Mango(900,230,40);
	mango8 = new Mango(1140,150,40);
	mango9 = new Mango(1100,230,40);
	mango10 = new Mango(1200,200,40);
	mango11 = new Mango(1120,50,40);
	mango12 = new Mango(900,160,40);

	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.create(options);
  background(230);

  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);

  ground.display();
  tree.display();
  launcher.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();  

  drawSprites();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone, {x:mouseX, y:mouseY});
}

function mouseReleased(){
	launcher.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.body.setPosition(stone.body, {x:235,y:420});
		launcher.attach(stone.body);
	}
}

function detectCollision(stone,mango){
	mangoBodyPosition=lmango.body.posotion;
	stoneBodyPosition=lstone.body.position;

	var distance = dist(mangoBodyPosiiton.x, mangoBodyPosition.y, stoneBodyPosition.x, stoneBodyPosition.y);

	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body, false);
	}
}
