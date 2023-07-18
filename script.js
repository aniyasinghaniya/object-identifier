 img="";
status="";
object=[];



function draw(){
  image(img,0,0,400,300);
  if (status != ""){
    for(i=0 ; i<object.length;i++){
      document.getElementById("status").innerHTML="Object-detected";
      fill("blue");
      percent=Math.floor(object[i].confidence*100);
      text(object[i].label+" "+percent + "%",object[i].x +15,object[i].y +15);
      noFill( );
      stroke("blue")
      rect(object[i].x,object[i].y,object[i].width,object[i].height)
    }
  }
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
function gotResult(error,results){
  if(error){
    console.log(error);
  }
    else{
      console.log(results)
      object=results
    }


}
