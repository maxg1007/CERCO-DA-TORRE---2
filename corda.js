class Corda{
    constructor(bodyA,pointB){

     this.corda = Constraint.create({
         bodyA:bodyA,
         pointB:pointB,
         stiffness:0.05,
         length:1
     })
     World.add(world,this.corda)
    this.pointB=pointB
    }
    display(){

        if(this.corda.bodyA){

        var pontoA = this.corda.bodyA.position;
        line(pontoA.x,pontoA.y,this.pointB.x,this.pointB.y)
        }
    }

    Soltar(){

        this.corda.bodyA = null
    }
    
    prender(body){

        this.corda.bodyA = body
    }
    
}