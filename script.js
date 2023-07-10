img="";
status="";
object=[];



function draw(){
  image(img,0,0,400,300);
}
function setup(){
 canvas=createCanvas(400,300);
 canvas.center();
 objectDetector = ml5.objectDetector("cocossd", modelLoaded);
 document.getElementById("i1").innerHTML="STATUS : Detecting Object"
 
}
function preload(){
img=loadImage("l3.jpg");
}

function modelLoaded(){
    console.log("model loaded succesfully")
    status=true;
    objectDetector.detect(img,gotResult)
}
function gotResult(){
    
}