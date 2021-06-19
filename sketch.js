const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var playerPaddle,playerImg,computerPaddle,ComputerImg,ball,ballImg,cone1,cone2,
cone3,cone4,cone5,cone6;
//bgImg = "background.png";
var score=0;
var edges;
function preload(){
  //Adding Animations In the Preload Funct...
 ballImg = loadAnimation("fooball3.png")
}
function setup() {
  createCanvas(900,300);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  //Creation Of Objects
 playerPaddle = createSprite(100,200,10,10);
cone1 = new Cone(200,200,10,10);

 ball = createSprite(100,100,60,60);
ball.addAnimation("BALL",ballImg);
ball.scale=0.04;

}
function draw() {
  background("blue");
  Engine.update(engine);
  edges= createEdgeSprites();
if(keyWentUp(UP_ARROW)){
  playerPaddle.velocityX=2;
}
if(playerPaddle.velocityX > 450){
  playerPaddle.velocityX=0;
}
 cone1.display();

 cone1.bounceOff(edges);


 text("SCORE : "+score,750,40);
drawSprites();
}

  


 
