var ball, ball2;
var database, position;
var position2;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    ball2 = createSprite(250, 400, 10, 10);
    ball2.shapeColor = "blue";

    var ballPosition = database.ref('ball/position');
    ballPosition.on("value", readPosition);

    var ball2Position = database.ref('balla/position');
    ball2Position.on("value", readBallaPosition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-5,0);
    }
    if(keyDown(RIGHT_ARROW)){
        writePosition(5,0);
    }
    if(keyDown(UP_ARROW)){
        writePosition(0,-5);
    }
    if(keyDown(DOWN_ARROW)){
        writePosition(0,+5);
    }

    if(keyDown(65)){
        movePosition(-1,0);
    }
    if(keyDown(68)){
        movePosition(1,0);
    }
    if(keyDown(87)){
        movePosition(0,-1);
    }
    if(keyDown(83)){
        movePosition(0,1);
    }
   
    if(keyDown(32)){
        reset();
    }
    if(keyDown(69)){
        reset2()
    };

    drawSprites();
}

function readPosition(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function readBallaPosition(data){
    position2 = data.val()
    ball2.x = position2.x;
    ball2.y = position2.y;
}

function writePosition(x,y){
    database.ref('ball/position').set({
        x: position.x + x,
        y: position.y + y
    })
}

function movePosition(x,y){
    database.ref('balla/position').set({
        x: position2.x + x,
        y: position2.y + y
    })
}

function reset(){
    database.ref('ball/position').set({
        x: 250,
        y: 250
    })
}

function reset2(){
    database.ref('balla/position').set({
        x: 250,
        y: 400
    })
}
