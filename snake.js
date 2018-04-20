var food;
function Snake() {//this is the snake constructor
  this.x = 0;//value of x
  this.y = 0;//value of y
  this.xspeed = 1;//start snake travel to the right
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  
  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;// when the distance between the snake and food is less than 1 pixel add one to total
      document.getElementById('score').innerHTML = this.total;
      eat.soundVolume(1000.0);
      eat.play();
      return true;
    }
    else {
      return false;
    }
  }
  
  this.dir = function(x,y) {
    this.xspeed = x;// sets the vertical speed as the value of x
    this.yspeed = y;// sets the horizontal speed as the value of y
  }
  
  this.death = function() {
    if ((this.x < 0) || (this.y < 0) || (this.x > 480) || (this.y > 480))  {
      this.tail = [];
      this.total = 0;
      document.getElementById('score').innerHTML="YOU DIED";
      noLoop();
    }
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1){
      this.tail = [];
      this.total = 0;
      document.getElementById('score').innerHTML="YOU DIED";
      noLoop();
        }
  }
}
  
  this.update = function() {
    for (var i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    
    if (this.total >= 1) {
      this.tail[this.total - 1] = createVector(this.x, this.y);
    }
    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;
    //this.x = constrain(this.x, 0, width - scl);
    //this.y = constrain(this.y, 0, height - scl);
  }
  this.show = function() {
    fill(80,125,249); //this is the color of the snake
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x,this.y,scl,scl); // start at 0,0 and move outwards evenly toward the value of scl
  }
  
}
function REload() {
  location.reload();
}