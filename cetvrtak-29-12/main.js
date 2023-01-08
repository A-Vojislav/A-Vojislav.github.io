// //task1

let colors = ["Orangered","Blue","Yellow","Green","Orange", "Cyan","DodgerBlue", "Violet"];
let index = 0;
const btnBasic = document.getElementById('button1');
const backgroundBasic= document.getElementById('basicBackground');

function changeColor(){
    if(index > colors.length - 1)
    index = 0;
  backgroundBasic.style.backgroundColor = colors[index++]; 
}

btnBasic.addEventListener('click', changeColor);

// task2

const btnAutoChangeColor= document.getElementById('button2');


function addAutoChangeColor(){
    const autoChangeBackground=document.getElementById('advance')
    autoChangeBackground.classList.add('advance');
}
function cancelAutoChangeColor(){
    const autoChangeBackground=document.getElementById('advance')
    autoChangeBackground.classList.remove('advance');
}

document.getElementById('button2').addEventListener('click', addAutoChangeColor);
document.getElementById('button3').addEventListener('click', cancelAutoChangeColor);

// task3


const chatRoom= document.getElementById('chatRoom');
const chatRoomOutput=document.getElementById('output')
const addMessageChatRoomButton= document.getElementById('submit')
const inputText=document.getElementById('input')
let outputMemory=[];
function addMessageHandler (){
    chatRoomOutput.innerHTML+=`
    <p>${inputText.value}</p>
    `

}

addMessageChatRoomButton.addEventListener('click', addMessageHandler)
