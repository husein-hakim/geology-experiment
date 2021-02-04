class iron{
    constructor(x, y, width, height){
        var options={
            density:13
        }
        
        this.width=width
        this.height=height

        this.body=Bodies.rectangle(x, y, width, height, options)

        World.add(world, this.body)
    }

    display(){

        push();
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)

        strokeWeight(5)
        stroke("black")
        fill("maroon")

        rectMode("CENTER")
        rect(0, 0, this.width, this.height)
        pop();
    }
}