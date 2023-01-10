const playerBox=document.getElementById('field');
const player = document.getElementById('player');
const button= document.getElementById('stopMoving')
let movementEnabled=true;



function playerPositionHandler (event){
    let x = event.offsetX - 100;
    let y = event.offsetY - 100;
    player.style.top=y+'px';
    player.style.left=x+'px';
}


function buttonHandler(){


    if(movementEnabled){
        playerBox.removeEventListener('click', playerPositionHandler)
        button.textContent='Enable Movement';
        movementEnabled=false
    }else{
        playerBox.addEventListener('click', playerPositionHandler)
        button.textContent='Stop Moving';
        movementEnabled=true
    }
}

button.addEventListener('click', buttonHandler)
playerBox.addEventListener('click', playerPositionHandler)
