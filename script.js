const nameInput = prompt("Enter your Name:");
const senderInput = prompt("Enter your Boyfriend Name?");

const nameSpan = document.getElementById("name");
nameSpan.textContent = nameInput;

const senderSpan = document.getElementById("sender");
senderSpan.textContent = senderInput;

const surpriseButton = document.getElementById("surprise");
surpriseButton.addEventListener("click", showSurprise);

function showSurprise() {
  const surpriseMessage = "MAHAL KITA ARAW - ARAW!";
  alert(surpriseMessage);
  const videoUrl = "C:/Users/User/Desktop/HTML/VDay/video.mp4";
  const videoHtml = `
    <video width="315" height="560" controls>
      <source src="${videoUrl}" type="video/mp4">
    </video>
  `;
  const container = document.querySelector(".container");
  container.innerHTML = videoHtml;
}