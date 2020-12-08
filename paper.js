class Paper{
    constructor(x,y){
        var options = {
            'isStatic': false,
            'friction': 0.2,
            'density': 1.44,
            'restitution': 0.8
        }
        this.paper = Bodies.circle(x,y,20,options);
        World.add(world,this.paper);
        this.width = 20;
        this.height = 20;
        
    }
    display(){
        
        push();
        ellipseMode(RADIUS);
        
        fill("white");
        
        stroke("skyblue");
        strokeWeight(3);
        ellipse(this.paper.position.x,this.paper.position.y,this.width,this.height);
        pop();
        
    }
}