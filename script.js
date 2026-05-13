




const getSettingsButton = document.getElementById("getSettings");

getSettingsButton.onclick = async function () {
    const idInstance =
        document.getElementById("idInstance").value;

    const apiTokenInstance =
        document.getElementById("apiTokenInstance").value;
    const url =
        `https://api.green-api.com/waInstance${idInstance}/getSettings/${apiTokenInstance}`;

    const response = await fetch(url);

    const data = await response.json();

    const responseField = document.getElementById("response");

    responseField.value =
        JSON.stringify(data, null, 2);

}




const getStateInstanceButton = document.getElementById("getStateInstance");

getStateInstanceButton.onclick = async function () {
    const idInstance =
        document.getElementById("idInstance").value;

    const apiTokenInstance =
        document.getElementById("apiTokenInstance").value;
    const url =
        `https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`;

    const response = await fetch(url);

    const data = await response.json();

    const responseField = document.getElementById("response");

    responseField.value =
        JSON.stringify(data, null, 2);

}





const sendMessageButton = document.getElementById("sendMessage");

sendMessageButton.onclick = async function () {
    
    const idInstance =
        document.getElementById("idInstance").value;

    const apiTokenInstance =
        document.getElementById("apiTokenInstance").value;
    
    const chatIdMessage =
        document.getElementById("chatIdMessage").value;
    
    const message =
        document.getElementById("message").value;

    const url =
        `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;
    
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chatId: chatIdMessage,
            message: message
        })
    });


    const data = await response.json();

    const responseField = document.getElementById("response");

    responseField.value =
        JSON.stringify(data, null, 2);

    
}


const sendFileByUrlButton = document.getElementById("sendFileByUrl");

sendFileByUrlButton.onclick = async function () {
    
    const idInstance =
        document.getElementById("idInstance").value;

    const apiTokenInstance =
        document.getElementById("apiTokenInstance").value;
    
    const chatIdFile =
        document.getElementById("chatIdFile").value;
    
    const urlFile =
        document.getElementById("urlFile").value;

    const fileName =
        document.getElementById("fileName").value;
    
    const caption =
        document.getElementById("caption").value;

    
    const url =
        `https://api.green-api.com/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`;
    
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chatId: chatIdFile,
            urlFile: urlFile,
            fileName: fileName,
            caption: caption
        })
    });

    const data = await response.json();

    const responseField = document.getElementById("response");

    responseField.value =
        JSON.stringify(data, null, 2);

    
}