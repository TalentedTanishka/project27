
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine , world;
var bob1  ,  bob2 , bob3 , bob4 , bob5 ;
var roof  ;
var rope1 , rope2 , rope3 , rope4 , rope5  ;
var bobDiameter;

function setup() {
  createCanvas(800, 700);
  rectMode(CENTER)


	engine = Engine.create();
  world = engine.world;

  bobDiameter = 30;

  bobPositionX = width/50;
  bobPositionY = height/5+100;
  
  bob1= new Bob(bobPositionX - bobDiameter*2 , bobPositionY , bobDiameter );
  bob2= new Bob(bobPositionX - bobDiameter , bobPositionY , bobDiameter );
  bob3= new Bob(bobPositionX, bobPositionY , bobDiameter );
  bob4= new Bob(bobPositionX + bobDiameter , bobPositionY , bobDiameter );
  bob5= new Bob(bobPositionX + bobDiameter*2 , bobPositionY , bobDiameter );


  roof = new Roof(400,100,200,30);

  rope1 = new Rope(bob1.body , roof.body , -bobDiameter*2,0);
  rope2 = new Rope(bob2.body , roof.body , -bobDiameter*1,0);
  rope3 = new Rope(bob3.body , roof.body , 0,0);
  rope4 = new Rope(bob4.body , roof.body , bobDiameter*1,0);
  rope5 = new Rope(bob5.body , roof.body , bobDiameter*2,0);


	Engine.run(engine);
  

}
function draw() {
  
Engine.update(engine);
  background("yellow");

  roof.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  
 
 
}

function keyPressed()
{

  if(keyCode == UP_ARROW)
  {

    Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-60 , y:-45});

  }
  

  



}
  

  


   function drawLine(constraint)
   {
   
   BobBodyPosition = constraint.bodyA.position
   RoofBodyPosition = constraint.bodyA.position
   
   RoofBodyOffset = constraint.pointB;
   
   RoofBodyX = RoofBodyPosition.x + RoofBodyOffset.x
   RoofBodyY = RoofBodyPosition.y + RoofBodyOffset.y
   
   line(BobBodyPosition.x , BobBodyPosition.y ,RoofBodyX , RoofBodyY)
   }
   
   



