class Monster{
	 constructor(i,x, y, width, height){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
}
	this.image = i;
  //this.image = loadImage("images/monster-02.png");
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  
  World.add(world, this.body);
   
  }
  display(){
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y+70,this.width,this.height);
     }
};
