const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var platform,block1,block2,block3,block4,block4,block5,block6,block7,block8,block9,slingg,polygon21;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
platform = new Ground(400,300,300,20);
block1 = new Box (350,235,30,40);
block2 = new Box (380,235,30,40);
block3 = new Box (410,235,30,40);
block4 = new Box(440,235,30,40)
block5 = new Box (470,235,30,40);
block6 = new Box (360,195,30,40);
block7 = new Box (390,195,30,40);
block8 = new Box (420,195,30,40)
block9 = new Box (390,155,30,40);
polygon21 = Bodies.circle(50,200,20);
World.add(world,polygon21);
slingg = new SlingShot (this.polygon21,{x:100 , y:200 });
}

function draw() {
  background("red");  
  Engine.update(engine);
  platform.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  slingg.display();
  ellipseMode(RADIUS);
  ellipse(this.polygon21.position.x,this.polygon21.position.y,20,20)
  drawSprites();
}
function mouseDragged () {
  Matter.Body.setPosition(this.polygon21, {x:mouseX , y:mouseY});
}

function mouseReleased(){
  slingg.fly();
}
function keyPressed(){
if(keyCode === 32){
slingg.attach(this.polygon21);
}
}