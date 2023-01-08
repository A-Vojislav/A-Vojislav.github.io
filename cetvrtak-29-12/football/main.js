var playerPosition=document.getElementById('field');
var playerInsert = document.getElementById('player');
let buttonFunction= document.getElementById('stopMoving')
let movementEnabled=true;



function playerPositionHandler (event){
    var x = event.offsetX - 100;
    var y = event.offsetY - 100;
    player.style.top=y+'px';
    player.style.left=x+'px';
}


function buttonHandler(){


    if(movementEnabled){
        playerPosition.removeEventListener('click', playerPositionHandler)
        buttonFunction.textContent='Enable Movement';
        movementEnabled=false
    }else{
        playerPosition.addEventListener('click', playerPositionHandler)
        buttonFunction.textContent='Stop Moving';
        movementEnabled=true
    }
}

buttonFunction.addEventListener('click', buttonHandler)


 if (movementEnabled) {
        playerPosition.addEventListener('click', playerPositionHandler)
    }