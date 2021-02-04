class stone {
  constructor(x, y, width, height) {
    var options = {
      // mass and density both are same (weight) 
        density:10
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
   
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    strokeWeight(5)
        stroke("white")
        fill("black")
    // for CENTER no ""
        rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  }
}
