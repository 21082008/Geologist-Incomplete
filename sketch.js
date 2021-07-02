const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, rubber, plane;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,20,1200,20)
    
    hammer = new Hammer(10,100);
    rubber = new Rubber(30,100);

  


}

function draw(){
    background("lightgreen");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();

    
 
}