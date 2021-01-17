class rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{
                x:this.offsetX,
                y:this.offsetY,
            }
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4);
        var bodyAX=pointA.x;
        var bodyAY=pointA.y;
        var bodyBX=pointB.x+this.offsetX;
        var bodyBY=pointB.y+this.offsetY
        line(bodyAX, bodyAY, bodyBX, bodyBY);
    }
    
}