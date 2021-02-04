const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var particle1



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

  ground1 = new ground(600, 590, 1200, 50)

	hammer1 = new hammer(125, 45)

	stone1 = new stone(300, 500, 70, 70)

  rubber1 = new rubber(550, 500, 50)

  sand1 = new sand(250, 500, 10)

  sand2 = new sand(225, 500, 10)

  sand3 = new sand(325, 500, 10)

  sand4 = new sand(240, 500, 10)

  sand5 = new sand(260, 500, 10)

  sand6 = new sand(270, 500, 10)

  sand7 = new sand(280, 500, 10)

  sand8 = new sand(290, 500, 10)

  sand9 = new sand(310, 500, 10)
  
  sand10 = new sand(320, 500, 10)

  iron1 = new iron(200, 500, 70, 70)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

   
  ground1.display()

  hammer1.display()

  stone1.display()

  rubber1.display();

  sand1.display();

  sand2.display();

  sand3.display();

  sand4.display();

  sand5.display();

  sand6.display();

  sand7.display();

  sand8.display();

  sand9.display()

  sand10.display();

  iron1.display();
}