function formatMessage(text, sender) {
    const div = document.createElement("div");
    div.className = `message ${sender}`;
    div.innerHTML = `${text}<div class="timestamp">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>`;
    return div;
  }
  
  function sendFromUser() {
    const input = document.getElementById("userInput");
    const text = input.value.trim();
    if (!text) return;
  
    const userBox = document.getElementById("userMessages");
    const message = formatMessage(text, "user");
    userBox.appendChild(message);
    input.value = "";
    userBox.scrollTop = userBox.scrollHeight;
  
    // Mesajı localStorage vasitəsilə paylaş
    localStorage.setItem("chatMessage", JSON.stringify({ sender: "user", text, timestamp: Date.now() }));
  }
  
  function sendFromAdmin() {
    const input = document.getElementById("adminInput");
    const text = input.value.trim();
    if (!text) return;
  
    const adminBox = document.getElementById("adminMessages");
    const message = formatMessage(text, "admin");
    adminBox.appendChild(message);
    input.value = "";
    adminBox.scrollTop = adminBox.scrollHeight;
  
    // Mesajı localStorage vasitəsilə paylaş
    localStorage.setItem("chatMessage", JSON.stringify({ sender: "admin", text, timestamp: Date.now() }));
  }
  
  // Gələn mesajı qarşı tərəfə göstər
  window.addEventListener("storage", (e) => {
    if (e.key === "chatMessage") {
      const msg = JSON.parse(e.newValue);
      const container = document.getElementById("userMessages") || document.getElementById("adminMessages");
      const message = formatMessage(msg.text, msg.sender);
      container.appendChild(message);
      container.scrollTop = container.scrollHeight;
    }
  });
  