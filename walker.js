class walker{
    constructor(x,y,width,height){
     var options={
     isStatic:true,
     density:10
     }
     this.x=x
     this.y=y
     this.width=width
     this.height=height
     this.animation=loadAnimation("walking1.png,walking2.png,walking3.png,walking4.png,walking5.png,walking6.png,walking7.png,walking8.png,")
        this.body=Bodies.rectangle(this.x,this.y,this.width,this,height,options)
World.add(world,this.body)
    }
    display(){
        var posbody=this.body.position
        var angle=this.body.angle
        push()
        translate(posbody.x,posbody.y)
        rotate(angle)
        imageMode(CENTER)
        animation(this.animation,0,0,this.body.width,this.body.height)
     pop()



    }

}