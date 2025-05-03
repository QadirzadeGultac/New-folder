// script.js (for future interactivity)

document.addEventListener("DOMContentLoaded", () => {
    const chatButton = document.querySelector(".chat-input button");
    const chatInput = document.querySelector(".chat-input input");
    const chatArea = document.querySelector(".chat-area");
  
    if (chatButton && chatInput && chatArea) {
      chatButton.addEventListener("click", () => {
        const message = chatInput.value.trim();
        if (message !== "") {
          const userBubble = document.createElement("div");
          userBubble.className = "chat-bubble user";
          userBubble.textContent = message;
          chatArea.appendChild(userBubble);
          chatInput.value = "";
          chatArea.scrollTop = chatArea.scrollHeight;
        }
      });
    }
  });