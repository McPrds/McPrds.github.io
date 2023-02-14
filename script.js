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
  const videoUrl = "https://www.youtube.com/embed/mM6uyKzMdng";
  const videoHtml = `<iframe width="315" height="560" src="${videoUrl}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  const container = document.querySelector(".container");
  container.innerHTML = videoHtml;
}
