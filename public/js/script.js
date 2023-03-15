var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');

var user = {message:""};

var arrayOfPossibleMessages = [
    {m:"hi", r:"hello"},
    {m:'how are you?', r:"i'm good, how are you?"},
    {m:"what is your name?", r:"I am a chatbot!"}
]

function sendMessage(userMessage){
    var messageElement = document.createElement('div');
    messageElement.style.textAlign = 'right';
    messageElement.style.margin = '10px';

    messageElement.innerHTML = "<span>You: </span>"+
                                 "<span>"+userMessage+"</span>";
    chatContainer.appendChild(messageElement);
}

function chatbotResponse (userMessage){
    var chatbotMessage = "";
    if (userMessage.length > 4 || userMessage == "hi"){
        var result = arrayOfPossibleMessages.filter(val => val.m.includes(userMessage.toLowerCase()));

        if (result.length > 0){
            var response = result[0].r;
            chatbotMessage = response;
        }else{
            chatbotMessage = "Please send another message";
        }
    }else{
        chatbotMessage = "Please send another message";
    }


    var messageElement = document.createElement('div');
    messageElement.style.textAlign = 'left';
    messageElement.style.margin = '10px';

    messageElement.innerHTML = "<span>Chatbot: </span>"+
                                 "<span>"+chatbotMessage+"</span>";

setTimeout(()=> {
    messageElement.animate([{easing:"ease-in", opacity:0.4},{opacity:1}], {duration:1000})
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop  = chatContainer.scrollHeight;
},250)
    //  The above code will be executed 1 second after the code is run. 
}


sendBtn.addEventListener('click', function(e){
    var userMessage = textbox.value;
        if (userMessage == ""){
            alert('Please type something...')
        }else{
            userMessageText = userMessage.trim();
            user.message = userMessageText;
            textbox.value = "";
            sendMessage(userMessage)
            chatbotResponse(userMessage)
        }
})