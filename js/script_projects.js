// script.js
const buttonToHome = document.getElementById("backToHome");
const goToPage = document.getElementById("goToPage");
const picture = document.getElementById("webScreenShot");

if (buttonToHome) {
  buttonToHome.addEventListener("click", function () {
    window.location.href = "./";
  });
}

if (goToPage) {
  goToPage.addEventListener("click", function () {
    window.open("https://mern-realestate-rpou.onrender.com", "_blank");
  });
}

if (picture) {
  picture.addEventListener("click", function () {
    window.open("https://mern-realestate-rpou.onrender.com", "_blank");
  });
}
