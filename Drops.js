class Drops{
    constructor(x,y){
        var options = {
            friction:0.001,
            restitution:0.1
        }
        this.body = Bodies.circle(x,y,5,options);
    World.add(world,this.body);
    }

    update(){
if(this.body.position.y>height){
    Matter.Body.setPosition(this.body, {x:random(0,400)}, {y:random(0,400)})
}
    }

    display(){
        ellipseMode(CENTER);
        fill("blue");
       ellipse(this.body.position.x, this.body.position.x,5,5);
    }
}