/*eslint-env browser*/
/*eslint no-console:0*/
/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red while the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)

*/

var puck_x = 210;
var puck_y = 210;
puck.style.top = puck_y + 'px';
puck.style.left = puck_x + 'px';
var speed = 50

function logCoordinates(){
    console.log('x=' + puck_x + 'y=' + puck_y);
}

function checkCollision(){
    //collision detection
    if (puck_x >= 250 && puck_x <= 350 && puck_y >= 150 && puck_y <= 250) {
        console.log("collision!");
        turnGapRed();
    }
    else {
        turnGapWhite();
    }
    if (puck_x <= 0) {
        puck_x = 560;
        puck.style.left = puck_x + 'px';
    }
    if (puck_x >= 600) {
        puck_x = 10;
        puck.style.left = puck_x + 'px';
    }
    if (puck_y <= 0) {
        puck_y = 360;
        puck.style.top = puck_y + 'px';
    }
    if (puck_y >= 400) {
        puck_y = 10;
        puck.style.top = puck_y + 'px';
    }
}

function turnGapRed(){
    document.getElementById('gap').style.backgroundColor = "#FF0000";
}

function turnGapWhite(){
    document.getElementById('gap').style.backgroundColor = "#FFFFFF";
}

document.getElementById('left').addEventListener('click', () => {
    puck_x -= speed;
    puck.style.left = puck_x + 'px';
    logCoordinates();
    checkCollision();
});

document.getElementById('right').addEventListener('click', () => {
    puck_x += speed;
    puck.style.left = puck_x + 'px';
    logCoordinates();
    checkCollision();
});

document.getElementById('up').addEventListener('click', () => {
    puck_y -= speed;
    puck.style.top = puck_y + 'px';
    logCoordinates();
    checkCollision();
});

document.getElementById('down').addEventListener('click', () => {
    puck_y += speed;
    puck.style.top = puck_y + 'px';
    logCoordinates();
    checkCollision();
});