class Tree{
    constructor(x, y){
        this.x=x;
        this.y=y;
        this.dustbinWidth=450;
        this.dustbinHeight=600;
        this.wallThickness=10;

        this.image = loadImage("images/Tree.png");
        this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, thiswallThickness, {isStatic:true});
        this.leftWallBody = Bodies.rectangle(0, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:false});
        this.rightWallBody = Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight);

        World.add(world, this.bottomBody);
        World.add(world, this.leftWallBody);
        World.add(world, this.rigthWallBody);

    }
    display(){
        var posBottom = this.bottomBody.position;
        push();
        translate(posBottom.x, posBottom.y+10);
        fill(255);
        imageMode(CENTER);
        image(this.image, 0, -this.dustbinHeight/2, this.dustbinWidth, this.dustbinHeight);
        pop();
    }
}