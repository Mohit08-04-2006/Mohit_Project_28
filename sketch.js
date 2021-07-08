
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var wall1,wall2;
var paper;
var dustbin_img;

function preload(){
   //loading image
   dustbin_img = loadImage("dustbin.png");
	
}

function setup() {
	var canvas = createCanvas(800, 650);

	engine = Engine.create();
	world = engine.world;

	//Creating Bodies
  	ground = new Ground(width/2,600);
    paper = new Paper(100,500);
    wall1 = new VerticalWall(575,525,10,125);
    wall2 = new VerticalWall(725,525,10,125);

    rope = new Rope(paper.body,{x:100,y:400});
	
  	Engine.run(engine);
  
}

function draw() {
  background("lightgrey");
  Engine.update(engine);

  // creating Image of dustbin.
  imageMode(CENTER);
  image(dustbin_img,650,515,150,150);

  // Ground and Paper
  ground.display();
  paper.display();

  // Walls
  wall1.display();
  wall2.display();

  rope.display();

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(paper.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
  rope.fly();
}