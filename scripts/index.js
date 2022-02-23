//  navSlide ();

// function submitSlide() {

//   const shooter = document.querySelector(".shooter");
//   const spaceSlide = document.querySelector(".space-container-slide");

//   shooter.addEventListener("click", function () {
//     spaceSlide.classList.toggle("submitActive");
//     spaceSlide.classList.toggle("submitInactive");
//     console.log("im clicked");
//   });
// }
// submitSlide();

// function killerSubmitSlide() {

//   const killer = document.querySelector(".killerIndex");
//   const killerSlide = document.querySelector(".killer-container-slide");

//   killer.addEventListener("click", function () {
//     killerSlide.classList.toggle("killerSubmitActive");
//     killerSlide.classList.toggle("killerSubmitInactive");
//     console.log("im clicked");
//   });
// }
// killerSubmitSlide();

// Space Shooter modal
let shooterSlideModal = document.getElementById("space");

// Get the button that opens the modal
let shooterBtn = document.getElementById("shooterBtn");

// Get the <span> element that closes the modal
let goBack = document.getElementsByClassName("back-to-projects")[0];

// When the user clicks the button, open the modal
shooterBtn.onclick = function () {
  shooterSlideModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
goBack.onclick = function () {
  shooterSlideModal.style.display = "none";
};

// Get the modal
let killerSlideModal = document.getElementById("killer");

// Get the button that opens the modal
let killerBtn = document.getElementById("killerBtn");

// Get the <span> element that closes the modal
let kGoBack = document.getElementsByClassName("kBack-to-projects")[0];

// When the user clicks the button, open the modal
killerBtn.onclick = function () {
  killerSlideModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
kGoBack.onclick = function () {
  killerSlideModal.style.display = "none";
};
