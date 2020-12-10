const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint ;
const Body = Matter.Body ;

var engine,world ;
var particles = [];
var plinkos   = [];
var divisions = [];
var divisionHeight = 300 ;

function setup() {

  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,790,480,20);

  for(var k=0 ; k<=width ; k+=80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j=40 ; j<=width ; j+=50){
    plinkos.push(new Plinko(j,75,10));
  }

  //for(var j=15 ; j<=width-10 ; j+=50){
    //plinkos.push(new Plinko(j,175,10));
  //}

  Engine.run(engine);

}

function draw() {

  Engine.update(engine);
  background(0); 

  ground.display();

  for(var j=0 ; j< plinkos.length ; j++){
    plinkos[j].display();
  }

  for(var k=0 ; k< divisions.length ; j++){
    divisions[k].display();
  }

  drawSprites();
}