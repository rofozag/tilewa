// WhatsApp number from user input
const whatsappNumber = "+2349019211656";

// Elements
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

yesBtn.addEventListener("click", () => {
  // Redirect to WhatsApp chat with the specified number
  window.location.href = `https://wa.me/${whatsappNumber}`;
});

noBtn.addEventListener("click", () => {
  // Show a minimal popup message
  alert("Ogbeni say yes joor...");
});
