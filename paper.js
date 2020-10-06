class Paper{
    constructor(x,y,radius){
        var ball_options={
            restitution:0.8,
            density:1.2
        }
        this.body=Bodies.circle(x,y,radius,ball_options);
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}