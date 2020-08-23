const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var  bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var BobD = 20;
	var BobX = width/2;
    var BobY = height/4 + 500;

    roof = new Roof(width/2, height/4, width/5, 20);
	bob1 = new Bob(BobX-BobD*2,BobY,BobD);
	bob2 = new Bob(BobX-BobD,BobY,BobD);
	bob3 = new Bob(BobX,BobY,BobD);
	bob4 = new Bob(BobX+BobD,BobY,BobD);
	bob5 = new Bob(BobX+BobD*2,BobY,BobD);
	rope1 = new Rope(bob1.body,roof.body, -BobD*2,0);
	rope2 = new Rope(bob2.body,roof.body, -BobD*1,0);
	rope3 = new Rope(bob3.body,roof.body, 0, 0);
	rope4 = new Rope(bob4.body,roof.body, BobD*1,0);
	rope5 = new Rope(bob5.body,roof.body, BobD*2,0);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);

  background(255);
  
   roof.display();
   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();
   rope1.display();
   rope2.display();
   rope3.display();
   rope4.display();
   rope5.display();

  drawSprites();
 
}



