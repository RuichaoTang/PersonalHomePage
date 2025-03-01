// script.js
const buttonSpotify = document.getElementById("spotifyButton");
const colabButton = document.getElementById("colabButton");
const webpageButton = document.getElementById("webpageButton");
const HomePgGitHubButton = document.getElementById("HomePgGitHubButton");
const LiveProjectButton = document.getElementById("LiveProjectButton");
const AppintmentHubGitHubButton = document.getElementById(
  "AppintmentHubGitHubButton"
);
const AppointmentHubLiveProjectButton = document.getElementById(
  "AppointmentHubLiveProjectButton"
);

if (AppintmentHubGitHubButton) {
  AppintmentHubGitHubButton.addEventListener("click", function () {
    window.open(
      "https://github.com/RuichaoTang/AppointmentManageHub",
      "_blank"
    );
  });
}

if (AppointmentHubLiveProjectButton) {
  AppointmentHubLiveProjectButton.addEventListener("click", function () {
    window.open("https://appointmentmanagehub.onrender.com", "_blank");
  });
}

if (HomePgGitHubButton) {
  HomePgGitHubButton.addEventListener("click", function () {
    window.open(
      "https://github.com/RuichaoTang/PersonalHomePage/tree/main",
      "_blank"
    );
  });
}

if (LiveProjectButton) {
  LiveProjectButton.addEventListener("click", function () {
    window.open("https://ruichaotang.github.io/PersonalHomePage/", "_blank");
  });
}

if (buttonSpotify) {
  buttonSpotify.addEventListener("click", function () {
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
