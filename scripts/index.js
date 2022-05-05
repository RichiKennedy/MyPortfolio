function navSlide() {
  const burger = document.querySelector(".burger");
  const navBar = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", function () {
    // console.log("you clicked me");
    navBar.classList.toggle("nav-active");

    for (let i = 0; i < navLinks.length; i++) {
      let link = navLinks[i];
      console.log("i :", i, "current link: ", navLinks[i]);

      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5 ease forwards ${i / 1.05}s`;
      }
    }
    // burger animation x
    burger.classList.toggle("toggle");
  });
}

navSlide();

let shooterSlideModal = document.getElementById("space");

let shooterBtn = document.getElementById("shooterBtn");

shooterBtn.onclick = function () {
  shooterSlideModal.style.display = "block";
};

let killerSlideModal = document.getElementById("killer");

let killerBtn = document.getElementById("killerBtn");

killerBtn.onclick = function () {
  killerSlideModal.style.display = "block";
};

let ottoSlideModal = document.getElementById("otto");

let ottoBtn = document.getElementById("ottoBtn");

ottoBtn.onclick = function () {
  ottoSlideModal.style.display = "block";
};
