class Hero  {
    constructor(x, y,width,height) {
      var options = {
        frictionAir:0.005,
        density:1.0
    };
    this.image = loadImage("images/Superhero-01.png");
    this.body = Bodies.rectangle(x, y,250,50, options);
    this.width=width;
    this.height=height;
    World.add(world, this.body);
     
    }

    display(){
      //var angle = this.body.angle;
      //push();
     // translate(this.body.position.x, this.body.position.y);
     // rotate(angle);
     // ellipse(0,0,this.width,this.height)
      //pop();
      var pos= this.body.position;
      imageMode(CENTER);
      this.image.width=1821;
      this.image.height=628; 
      image(this.image,pos.x,pos.y+70,this.width,this.height);
    }
  };
  