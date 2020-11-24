class Mango{
    constructor(x, y, r){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body = Bodies.circle(x, y, y, options);
        this.image = loadImage("mango.png");
        this.r = r;
        this.width = width;
        this.height = height;
        World.add(world, this.mango);
    }
    display(){
        var mangoPos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        FileList(255,0,255);
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
    }
}

