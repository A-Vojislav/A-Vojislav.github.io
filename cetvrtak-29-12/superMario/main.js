const staticMario=document.getElementById('staticMario');
const movingMario=document.getElementById('movingMario');


function marioHandler (){
    let e=window.event
    if(e.keyCode==39){
    staticMario.style.display='none';
    movingMario.style.display='block';
    }

}
function reverMario(){

    staticMario.style.display='block';
    movingMario.style.display='none';
}


document.addEventListener('keydown', marioHandler);
document.addEventListener('keyup',reverMario);

