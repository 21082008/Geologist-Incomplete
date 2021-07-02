class Rubber{
	constructor(x,y,r)
	{
		var options = {
			restitution	:0.3,
			friction:5,
			density:1
		}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		this.Body=Bodies.circle(x, y, r, options) 
		this.r =r
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			ellipseMode(RADIUS)
			pop()
	}

}