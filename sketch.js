let bubbles = [];

function setup(params) {
  createCanvas(400,400)


for(let i = 0 ; i < 100 ; i++){
  bubbles[i] =  {
    x : random(0,width),
    y : random(0,height),
    col:color(200,0,0),
    
    clicked: function mousePressed(params) {
      this.col = color(random(0,255),random(0,255),random(0,255))
    
  },

    display : function name(params) {
      stroke(255)
      fill(this.col)
      ellipse(this.x,this.y,20,20)
    },
  
    move : function name(params){
       this.x = this.x + random(-1,1);
       this.y = this.y + random(-1,1);
    }
  }
  
};


}

function draw(){
   background(0);
   for(let i = 0;i < bubbles.length; i++){
   bubbles[i].display();
   bubbles[i].move();
   }
  } 

  function mousePressed(params) {
    for(i = 0 ; i < bubbles.length;i++){
      bubbles[i].clicked();
    }
  }

  

  

