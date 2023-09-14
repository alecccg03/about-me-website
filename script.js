const btnResume = document.querySelector(".btn-resume");
const jsLogo = document.getElementById("js");
const htmlLogo = document.getElementById("html");
const cssLogo = document.getElementById("css");
const reactLogo = document.getElementById("react");
const sliderTexts = document.querySelectorAll(".slider-text");
const links = document.querySelectorAll('a[href^="#"]');
const homeBtn = document.getElementById("home-btn");
const linkedInLogo = document.querySelector(".fa-linkedin-square");
const facebookLogo = document.querySelector(".fa-facebook");
const githubLogo = document.querySelector(".fa-github");
const projectPreviews = document.querySelectorAll(".project-preview");

btnResume.addEventListener("click", function () {
  window.open("finalResume.pdf");
});

linkedInLogo.addEventListener("click", function () {
  window.open(
    "https://www.linkedin.com/in/alec-garcia-b763a3291?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B04ayhIiGRYSFIZnp8s69VA%3D%3D"
  );
});

facebookLogo.addEventListener("click", function () {
  window.open("https://www.facebook.com/profile.php?id=100074628227605");
});

githubLogo.addEventListener("click", function () {
  window.open("https://github.com/alecccg03");
});

projectPreviews.forEach((preview) => {
  preview.addEventListener("click", function (e) {
    if (e.target.classList.contains("project--1")) {
      document.querySelector(".project--1").classList.toggle("hidden");
      document
        .querySelector(".project--description-1")
        .classList.toggle("hidden");
    }
    if (e.target.classList.contains("project--2")) {
      document.querySelector(".project--2").classList.toggle("hidden");
      document
        .querySelector(".project--description-2")
        .classList.toggle("hidden");
    }
    if (e.target.classList.contains("project--3")) {
      document.querySelector(".project--3").classList.toggle("hidden");
      document
        .querySelector(".project--description-3")
        .classList.toggle("hidden");
    }
  });
});

//Adding style to each logo
sliderTexts.forEach((text) => {
  text.addEventListener("mouseover", function (e) {
    if (e.target.innerText === "JavaScript") {
      jsLogo.style.transition = "all 0.5s ease-out";
      jsLogo.style.transform = "scale(1.4)";
    }

    if (e.target.innerText === "HTML") {
      htmlLogo.style.transition = "all 0.5s ease-out";
      htmlLogo.style.transform = "scale(1.4)";
    }

    if (e.target.innerText === "CSS") {
      cssLogo.style.transition = "all 0.5s ease-out";
      cssLogo.style.transform = "scale(1.4)";
    }

    if (e.target.innerText === "React") {
      reactLogo.style.transition = "all 0.5s ease-out";
      reactLogo.style.transform = "scale(1.4)";
    }
  });

  text.addEventListener("mouseout", function (e) {
    jsLogo.style.transform = "scale(1)";
    htmlLogo.style.transform = "scale(1)";
    cssLogo.style.transform = "scale(1)";
    reactLogo.style.transform = "scale(1)";
  });
});

//Implementing smooth-scrolling
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      const offset = targetEl.getBoundingClientRect().top;

      window.scrollBy({
        top: offset,
        left: 0,
        behavior: "smooth",
      });
    }
  });
});

//Scroll back to top when home button is clicked
homeBtn.addEventListener("click", function (e) {
  document.querySelector(".header").scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("scroll", function (e) {
  if (this.window.scrollY > 200) {
    homeBtn.style.display = "block";
  } else {
    homeBtn.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".header-title").classList.add("slide-in-left");
  document.querySelector(".name").classList.add("slide-in-right");
});
