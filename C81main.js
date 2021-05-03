canvas=document.getElementById("my_canvas");
ctx= canvas.getContext("2d");
color= "gray";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(400, 200, 30, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",startDrawing);
function startDrawing(e){
mouseX=e.clientX-canvas.offsetLeft;
mouseY=e.clientY-canvas.offsetTop;
console.log("X = " + mouseX + ",Y = " + mouseY);
circle(mouseX , mouseY);
}

function circle(mouseX , mouseY){
    ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouseX, mouseY, 30, 0, 2*Math.PI);
ctx.stroke();

}