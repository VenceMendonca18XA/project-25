class pap
{
    constructor(x,y,r)
    {
       var options={isStatic:false,restitution:0.3,friction:0.5,density:1.5}

      

       this.body=Bodies.circle(x,y,r-7,options);
        this.radius=r;
       this.x=x;
       this.y=y;
       this.image=loadImage("paper.png");

       World.add(world,this.body);
    }
    display()
    {
 var paperpos=this.body.position;
  var angle=this.body.angle;
   push() 
   translate(paperpos.x, paperpos.y);
   rotate(angle);
    imageMode(RADIUS); 
    
    image(this.image,0,0,this.radius,this.radius); 
    pop() 
    }
}

