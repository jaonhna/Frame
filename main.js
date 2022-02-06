function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    
    video =createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    image(video, 50, 50, 540, 400);
    tint(tint_color);
    fill(165, 42, 42, );
  stroke(165, 42, 42);
    rect(20, 130, 30, 320);
    rect(590, 40, 30, 310);
    rect(100, 20, 520, 30);
    rect(20, 440, 520, 30);
   
    fill(0, 0, 255, );
  stroke(0, 0, 255);
  translate(60, 90);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 30, 100);
    rotate(PI/5);
    
  }
  translate(520, 310);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 30, 100);
    rotate(PI/5);
    
  }

}

function take_snapshot(){
    save('student_name.png');
}


