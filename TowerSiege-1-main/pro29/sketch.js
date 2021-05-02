
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);

	//Create the Bodies Here.
    box1 = new box(200,200,50,20)
    box2 = new box(150,150,20,20)
    box3 = new box(100,100,20,20)
    box4 = new box(70,70,20,20)
    box4= new box(210,210,50,20)
    box5 = new box(150,150,20,20)
    box6= new box(100,100,20,20)
    box7 = new box(70,70,20,20)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  text(mouseX+","+mouseY,200,50)
  
  drawSprites(); 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();


 
}



