//  navSlide ();

function navSlide() {
  // retrieving elements
  const burger = document.querySelector(".burger");
  const navBar = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  //Toggle Nav
  //  as soon as someone clicks on the burger evrything inside the curly brackets will run a function
  burger.addEventListener("click", function () {
    console.log("you clicked me");
    navBar.classList.toggle("nav-active");

    //  animated links
    // for loop
    for (let i = 0; i < navLinks.length; i++) {
      // if i is less than the length of navLink, do this...
      console.log("i :", i, "current link: ", navLinks[i]); // ...log what value i currently as well as the current link
      let link = navLinks[i]; // save the current link in a variable

      if (link.style.animation) {
        // if the current link has any animation...
        link.style.animation = ""; // ...reseting the animation back to its original state
      } else {
        // otherwise...
        link.style.animation = `navLinkFade 0.5 ease forwards ${i / 1.2}s`; // ...set it to the keyframe "navLinkFade"
        // 0.5 = with a duration of 0.5 seconds
        // ease = make it ease in
        // forwards = don't know what forwards does, or if it is needed
        // ${ i / 0.6 }s = with a delay (I think) of i / 0.6 seconds. Since i will be different every loop, the delay will be different for all of the links.

        // I think it would be good if you googled or youtubed "template strings". the `` (template strings) makes it possible to use javascript code or variables within a string and the syntax for that is ${nameOfVariable}.
      }
    }
    // burger animation x
    burger.classList.toggle("toggle");
  });
}
navSlide();

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

// Get the modal
let ottoSlideModal = document.getElementById("otto");

// Get the button that opens the modal
let ottoBtn = document.getElementById("ottoBtn");

// When the user clicks the button, open the modal
ottoBtn.onclick = function () {
  ottoSlideModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
