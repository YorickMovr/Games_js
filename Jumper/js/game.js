var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();

bird.src = "img/bird.png";
bg.src = "img/bird.png";
fg.src = "img/bird.png";
pipeUp.src = "img/bird.png";
pipeBottom.src = "img/bird.png";

function draw(){
    ctx.drawImage(bg, 0 , 0);
}

pipeBottom.onload = graw;