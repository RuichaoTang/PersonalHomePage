// script.js
const buttonSpotify = document.getElementById("spotifyButton");
const colabButton = document.getElementById("colabButton");
const webpageButton = document.getElementById("webpageButton");

if (buttonSpotify) {
  // 给按钮添加点击事件监听器
  buttonSpotify.addEventListener("click", function () {
    // 在新标签页中打开 Spotify 页面
    window.open(
      "https://open.spotify.com/album/5vu7vSSEqhowSwxU8LeyFS?si=04mlaEkHQwOMA8h9BNn97A",
      "_blank"
    );
  });
}

if (colabButton) {
  colabButton.addEventListener("click", function () {
    window.open(
      "https://colab.research.google.com/drive/1BkMP3M7CIYsS6cWHqnRDEhpjrADrQCNr?usp=sharing",
      "_blank"
    );
  });
}

if (webpageButton) {
  webpageButton.addEventListener("click", function () {
    window.open("https://mern-realestate-rpou.onrender.com", "_blank");
  });
}

// ---

document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".skill");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  skills.forEach((skill) => observer.observe(skill));
});
