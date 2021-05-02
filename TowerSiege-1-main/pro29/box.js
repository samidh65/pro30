class box{

constructor(x,y,width,height){
var options = {
    'restitution':0.8,
    'friction':1.0,
    'density':1.0

}

this.body = bodies.rectangle(x,y,width,height,options)
this.width = width
this.height = height
World.add(world,this.add)





}
display(){
var pos  = this.body.position
rectMode(CENTER)
rect(pos.x,pos.y,width,height)







}
























}