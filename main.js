song1="";
song2="";

function preload(){
 song1=loadSound("song1.mp3");
 song2=loadSound("song2.mp3");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoded);
}
function draw(){
    image(video,0,0,300,300);
    }
