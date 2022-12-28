function preload(){
}
function setup(){
Canvas=createCanvas(400,400);
Canvas.position(350,200);
Webcam=createCapture(VIDEO);
Webcam.hide();
tint_color="";
}
function draw(){
image(Webcam, 0, 0, 400, 400);
tint(tint_color);
}
function take_snapshot(){
save('student_name.png');
}
function filter(){
tint_color = document.getElementById("insertcolor").value;
}