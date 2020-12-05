const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var ground,ball;


function setup() {
  createCanvas(400,400);
  engine=Engine.create();
world=engine.world;

var opt={
  isStatic:true
}

ground=Bodies.rectangle(200,380,400,20,opt);
World.add(world,ground);
  console.log(ground);

  var opts={
    restitution:1.0
  }
  
  ball=Bodies.circle(100,100,20,opts);
  World.add(world,ball);
   
  
}

function draw() {
  background("lightblue");  
  Engine.update(engine);
  fill("green")
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 400,20);

  fill("red")
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,40,40);
}