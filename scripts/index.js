// Space Shooter modal
let shooterSlideModal = document.getElementById("space");

// Get the button that opens the modal
let shooterBtn = document.getElementById("shooterBtn");

// Get the <span> element that closes the modal

// When the user clicks the button, open the modal
shooterBtn.onclick = function () {
  shooterSlideModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal

// Get the modal
let killerSlideModal = document.getElementById("killer");

// Get the button that opens the modal
let killerBtn = document.getElementById("killerBtn");

// Get the <span> element that closes the modal
// let kGoBack = document.getElementsByClassName("kBack-to-projects")[0];

// When the user clicks the button, open the modal
killerBtn.onclick = function () {
  killerSlideModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
// kGoBack.onclick = function () {
//   killerSlideModal.style.display = "none";
// };

// Get the modal
let zodiacSlideModal = document.getElementById("zodiac");

// Get the button that opens the modal
let zodiacBtn = document.getElementById("zodiacBtn");

// Get the <span> element that closes the modal
let zGoBack = document.getElementsByClassName("zBack-to-projects")[0];

// When the user clicks the button, open the modal
zodiacBtn.onclick = function () {
  zodiacSlideModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
zGoBack.onclick = function () {
  zodiacSlideModal.style.display = "none";
};
