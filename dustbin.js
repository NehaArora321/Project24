class Dustbin{
    constructor(x,y,width,height,color){
        var dust_options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,dust_options);
        this.width=width;
        this.height=height;
        this.color=color;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill(this.color);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height)
    }
}