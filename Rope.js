class Rope {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.04,
      // length: 1
    };
    // this.pointB = pointB
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
  }

  fly() {
    this.sling.bodyA = null;
  }

  attach(mang){
    this.sling.bodyA=mang;
}
  display() {
    if (this.sling.bodyA) {
      var pointA = this.sling.bodyA.position;
      var pointB = this.sling.pointB;

      strokeWeight(8);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
}