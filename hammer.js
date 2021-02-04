class hammer {
    constructor(x, y) {
      var options = {
        density:2,
        friction: 1.0,
        restitution:0.5
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 150;
      this.height = 40;
      World.add(world, this.body);
    }
    display(){
     this.body.position.x = mouseX;
      this.body.position.y = mouseY;
    
      push();
      translate(this.body.position.x, this.body.position.y)
      rotate(this.body.angle)
      fill("yellow")
        strokeWeight(10);
        stroke("white")
        rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
  