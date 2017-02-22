function setup() {
  createCanvas(800,600);
  strokeWeight(2);
}

function draw() {

  
  //Head
  
  
  fill(0,0,0)
  ellipse(360,240,100,100)
  
  
  
  fill(255,255,255)
  ellipse(380,240,40,40)
  
   fill(0,0,0)
  ellipse(380,240,10,10)
  
  fill(255,255,255,70)
  ellipse(350,240,15,15)
  ellipse(405,250,6,6)
  ellipse(400,220,10,10)
  
  
  //Antennas
  line(320,190,350,220)
  line(390,120,370,200)
  line(410,250,430,253)
  
  //Neck
  line(360,290,360,350)
  line(345,270,345,350)
  line(375,270,375,350)
  
  
  //Body
  
  fill(128,128,128)
  noStroke()
  ellipse(350,480,80,80)
  
  fill(0,0,0)
  noStroke()
  rect(300,350,100,130)
  
  fill(255,255,255,70)
  rect(300,360,100,10)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}