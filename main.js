function preload(){
}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video, 10, 10, 540, 380);
    fill(34,139,34);
    rect(10, 10, 540, 55);
    rect(10, 10, 55, 381);
    rect(540, 10, 55, 381);
    rect(10, 381, 580, 55);
    fill(255,99,71);
    circle(35, 20, 70);
    circle(562, 25, 70);
    circle(35, 400, 70);
    circle(562, 400, 70);
}
function take_snapshot()
{
    save('picture.png');
}
