var mouseEvent = "empty";
var last_position_of_x,last_position_of_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "blue";
width_of_line = 1;
canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e){
    color = document.getElementById("color").value ;
    width_of_line = document.getElementById("width_of_the_line").value;
    mouseEvent = "mouseDown";
}
    canvas.addEventListener("mouseUP", mymouseUP);
function mymouseUP(e){
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e){
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e){
    current_position_of_mouse_x = e.clientX-canvas.offsetLeft;
   current_position_of_mouse_y = e.clientY-canvas.offsetTop;
if(mouseEvent == "mouseDown"){
    ctx.beginPath();
    ctx.lineWidth= width_of_line;
    ctx.strokeStyle= color;
    console.log("Last position of x and y coordinates =");
    console.log("x = "+ last_position_of_x + "y = "+ last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);
    console.log("Current position of x and y coordinates =");
    console.log("x = "+ current_position_of_mouse_x + "y = "+ current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
ctx.stroke();
}
last_position_of_x = current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y;
}
function clear_area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
