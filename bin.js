class Bin extends BaseClass {
    constructor(x,y,width,height) {
      
super(x,y,width,height);
this.image = loadImage("dustbingreen.png");

    
    }
    display(){
      //var pos =this.body.position;
      //rectMode(CENTER);
      //fill("green");
      //rect(pos.x, pos.y, this.width, this.height);
    super.display();
    }
  };