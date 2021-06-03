class Stone {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.9,
          'density':12
      }
      this.body = Bodies.rectangle(x, y, 90, 90, options);
      this.width = 90;
      this.height = 90;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(5);
      stroke("black")
      fill("darkGrey");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };