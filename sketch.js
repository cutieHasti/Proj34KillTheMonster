const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var monster1,monster2;
var m1Img,m2Img;

function preload(){
 m1Img = loadImage("images/monster-01.png");
 m2Img = loadImage("images/monster-02.png")
}


function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,600,1200,20);

   
    box1 = new Box(900,100,70,70);
    box2 = new Box(900,100,70,70);
    box3 = new Box(900,100,70,70);
    box4 = new Box(900,100,70,70);
    box5 = new Box(900,100,70,70);
    box6 = new Box(900,100,70,70);

    box7 = new Box(800,100,70,70);
    box8 = new Box(800,100,70,70);
    box9 = new Box(800,100,70,70);
    box10 = new Box(800,100,70,70);
    box11 = new Box(800,100,70,70);
    box12 = new Box(800,100,70,70);

    box13 = new Box(700,100,70,70);
    box14 = new Box(700,100,70,70);
    box15 = new Box(700,100,70,70);
    box16 = new Box(700,100,70,70);
    box17 = new Box(700,100,70,70);
    box18 = new Box(700,100,70,70);
    box19 = new Box(700,100,70,70);
    box20 = new Box(700,100,70,70);

    hero = new Hero(200,200,280,100);

    monster1 = new Monster(m1Img,1100,200,200,100);
    monster2 = new Monster(m2Img,1200,300,200,100); 

    rope = new Rope(hero.body,{x:500,y:50})
    

    }

    

function draw(){
   
        background(0);
    
      
    
    Engine.update(engine);
   
    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();

    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
 
    hero.display();

    monster1.display();
    monster2.display();
    
    rope.display();

   
}

function mouseDragged(){
   
     Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
    }




