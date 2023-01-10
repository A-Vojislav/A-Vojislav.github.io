const staticMario=document.getElementById('staticMario');
const movingMario=document.getElementById('movingMario');
const backGround=document.getElementById('superMario')
let xPos = 0;
let yPos = "0px";

function marioHandler (){
    let e=window.event
    if(e.keyCode==39){
    staticMario.style.display='none';
    movingMario.style.display='block';
    backGround.style.backgroundPosition = xPos+"px " + yPos;
    xPos-=20;
    }

}
function reverMario(){

    staticMario.style.display='block';
    movingMario.style.display='none';
}


document.addEventListener('keydown', marioHandler);
document.addEventListener('keyup',reverMario);
