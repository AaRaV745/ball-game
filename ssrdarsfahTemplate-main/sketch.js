var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(1000,600);

    block1 = createSprite(900,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(650,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(150,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(400,580,200,30);
    block4.shapeColor = "yellow";


    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX = 8;
    ball.velocityY = 8;
    
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        //music.play();
    }

     //write code to bounce off ball from the block1 
     if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        //music.play();
    }

     //write code to bounce off ball from the block1 
     if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
       // music.play();
    }
 //write code to bounce off ball from the block1 
 if(block4.isTouching(ball) && ball.bounceOff(block4)){
    ball.shapeColor = "yellow";
    //music.play();
}




    
    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}
