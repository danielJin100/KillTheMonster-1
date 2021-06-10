class Bee{
    constructor(x, y, width, height) {
        var options = {
            'restitution':1.5,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width/2+10, height/2+10, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("bee1.jpg");
        World.add(world, this.body);
        console.log(this);
      }
      display(){
        var angle = this.body.angle;
        if(frameCount % 360 === 0) {
            this.image = loadImage("bee1.jpg");
        } else if(frameCount % 360 === 180) {
            this.image = loadImage("bee2.jpg");
        }
        /*
        switch(frameCount % 60){
            case 0:
                this.image = this.image1;
            break;
            case 30:
                this.image = this.image2;
            break;
            default:
            }
        */
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        scale(0.5,0.5);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}