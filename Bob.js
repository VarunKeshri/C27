class Bob{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:1.0,
            friction:0.2,
            density:0.8
        }
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,(this.r)/2,options)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        strokeWeight(4)
        fill("red")
        ellipse(0,0,this.r,this.r);
        pop()

    }
}