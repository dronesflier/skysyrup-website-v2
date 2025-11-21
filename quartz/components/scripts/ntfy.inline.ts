function sendNotification() {
    const ntfyInput = document.getElementById("nfty-input") as HTMLInputElement | null;
    const ntfyButton = document.getElementById("ntfy-send");
    
    if (!ntfyInput || ntfyInput.value.length <= 0) {
        return; 
    }
    
    const currentTime = new Date();
    fetch('https://ntfy.skysyrup.dev/pushFromWebsiteYayyyyy', {
        method: 'POST',
        body: "sent at " + currentTime,
        headers: { 'Title': ntfyInput.value }
    })
    .then(function(response) {
        if (response.ok) {
            ntfyInput.value = "";
            if (ntfyButton) {
                ntfyButton.textContent = "[sent]";
            }
            console.log("sent ntfy :3");
        } else {
            if (ntfyButton) {
                ntfyButton.textContent = "[sending failed >~<]";
            }
        }
    })
    .catch(function(error) {
        console.error("Error:", error);
        if (ntfyButton) {
            ntfyButton.textContent = "[sending failed >~<]";
        }
    });
}

const ntfySendButton = document.getElementById("ntfy-send");
if (ntfySendButton) {
    ntfySendButton.addEventListener("click", sendNotification);
    
    // Also allow sending with Enter key
    const ntfyInput = document.getElementById("nfty-input");
    if (ntfyInput) {
        ntfyInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                sendNotification();
            }
        });
    }
}
