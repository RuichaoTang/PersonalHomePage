// script.js
const buttonToHome = document.getElementById("backToHome");
const goToPage = document.getElementById("goToPage");

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
