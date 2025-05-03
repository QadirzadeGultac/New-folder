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
  function getLocation() {
    const locationInput = document.getElementById("accident-location");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                // Reverse geocoding: koordinatlardan adresə keçmək (OpenStreetMap API ilə)
                const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                const data = await response.json();
                const address = data.display_name || `${latitude}, ${longitude}`;

                locationInput.value = address;
            },
            (error) => {
                locationInput.value = "Yerləşmə alınmadı!";
                console.error("Error getting location:", error);
            }
        );
    } else {
        locationInput.value = "Brauzer GPS-i dəstəkləmir!";
    }
}
