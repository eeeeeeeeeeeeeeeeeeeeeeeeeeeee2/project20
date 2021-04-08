var bg
var cat, mouse;
var catImg1, catImg2, catImg3, mouseImg1, mouseImg2, mouseImg3;
function preload() {
    //load the images here
    bg = loadImage("images/garden.png");

    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");

    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(850,650);
    cat.addAnimation("catStand", catImg1);
    cat.scale = 0.15;

    mouse = createSprite(100,650);
    mouse.addAnimation("mouseStand", mouseImg1);
    mouse.scale = 0.1;
    


}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    text(mouseX + ',' + mouseY, 10, 45);
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("lastImage", catImg3);
        cat.changeAnimation("lastImage");
        cat.scale = 0.2;
        cat.x = 240;

        mouse.addAnimation("lastImageMouse", mouseImg3);
        mouse.changeAnimation("lastImageMouse");
        mouse.scale = 0.1;
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if (keyCode === LEFT_ARROW){
        cat.velocityX =-5
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");

        mouse.addAnimation("mouseTeasing", mouseImg2);
        mouse.changeAnimation("mouseTeasing");
    }

}
