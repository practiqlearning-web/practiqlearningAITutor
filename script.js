const chatBox = document.getElementById("chatBox");

const input = document.getElementById("userInput");

const sendBtn = document.getElementById("sendBtn");

function sendMessage(){

const text = input.value.trim();

if(text==="") return;

chatBox.innerHTML +=
`<div class="user-message">${text}</div>`;

chatBox.innerHTML +=
`<div class="bot-message">
Thank you for your question.

This is the MVP version of Practiq AI Tutor.

Soon this will be connected with an AI model that can answer your questions intelligently.
</div>`;

input.value="";

chatBox.scrollTop = chatBox.scrollHeight;

}

sendBtn.addEventListener("click",sendMessage);

input.addEventListener("keypress",function(e){

if(e.key==="Enter"){

sendMessage();

}

});
