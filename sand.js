class sand{
    constructor(x, y, r){
        var options = {
            restitution:1.3,
            friction:5,
            density:1
        }
        this.x=x
         this.y=y
         this.r=r
         
         this.body=Bodies.circle(x,y,this.r/2, options)

         World.add(world, this.body)
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        rectMode("CENTER")

        strokeWeight(1)
        stroke("black")
        fill("red")

        ellipse(0, 0, this.r, this.r)
        pop();

    }
}