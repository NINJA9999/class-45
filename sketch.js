var bg;
var player,playerImg,shooting3Img;









function preload(){
    bg = loadImage("assets/bg.jpeg");
    playerImg = loadImage("assets/shooter_2.png");
    shooting3Img = loadImage("assets/shooter_3.png");
}


function setup(){
    createCanvas(windowWidth,windowHeight)

    player = createSprite(windowWidth-1100,windowHeight-300,10,10);
    //player.addImage(playerImg);
}

function draw(){
    background(bg)

    if(keyDown("UP_ARROW")|| touches.length > 0 ){
        player.y = player.y - 20;
        touches = []
    }

    if(keyDown("DOWN_ARROW")|| touches.length > 0 ){
        player.y = player.y + 20;
        touches = []
    }

    if(keyWentDown("SPACE")){
        player.addImage(shooting3Img)
    }
    else if(keyWentUp("SPACE")){
        player.addImage(playerImg)

    }
    drawSprites()
}



















































































