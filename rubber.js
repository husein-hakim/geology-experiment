class rubber{
	constructor(x,y,r)
	{
		var options={
			restitution:0.3,
			friction:5,
			density:1
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(x,y,this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			push()
			translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle)
			rectMode(CENTER)
      // for 3 no "" remember for values always no qoutes
		   strokeWeight(3)
        stroke("black")
        fill("darkblue")
// there is no circle mode ,if you want four aruguments then we use ellipse, it works similar to rect but with diff shape  because in circle we use radius in ellipse we use diameter (it will work if u display in circle also) 
			ellipse(0,0,this.r, this.r);
			pop()
	}

}