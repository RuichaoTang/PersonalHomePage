document.addEventListener("DOMContentLoaded", () => {
  const buttonSpotify = document.getElementById("spotifyButton");
  const colabButton = document.getElementById("colabButton");
  const NestLandWebButton = document.getElementById("NestLandWebButton");
  const NestLandGitHubButton = document.getElementById("NestLandGitHubButton");
  const HomePgGitHubButton = document.getElementById("HomePgGitHubButton");
  const LiveProjectButton = document.getElementById("LiveProjectButton");
  const AppintmentHubGitHubButton = document.getElementById(
    "AppintmentHubGitHubButton"
  );
  const AppointmentHubLiveProjectButton = document.getElementById(
    "AppointmentHubLiveProjectButton"
  );
  const HydrogenGitHubButton = document.getElementById("HydrogenGitHubButton");
  const HydrogenLiveProjectButton = document.getElementById(
    "HydrogenLiveProjectButton"
  );
  if (HydrogenGitHubButton) {
    HydrogenGitHubButton.addEventListener("click", () => {
      window.open(
        "https://github.com/RuichaoTang/MedicalAestheticsPlatform",
        "_blank"
      );
    });
  }

  if (HydrogenLiveProjectButton) {
    HydrogenLiveProjectButton.addEventListener("click", () => {
      window.open("https://medicalaestheticsplatform.onrender.com", "_blank");
    });
  }

  if (AppintmentHubGitHubButton) {
    AppintmentHubGitHubButton.addEventListener("click", () => {
      window.open(
        "https://github.com/RuichaoTang/AppointmentManageHub",
        "_blank"
      );
    });
  }

  if (AppointmentHubLiveProjectButton) {
    AppointmentHubLiveProjectButton.addEventListener("click", () => {
      window.open("https://appointmentmanagehub.onrender.com", "_blank");
    });
  }

  if (HomePgGitHubButton) {
    HomePgGitHubButton.addEventListener("click", () => {
      window.open(
        "https://github.com/RuichaoTang/PersonalHomePage/tree/main",
        "_blank"
      );
    });
  }

  if (LiveProjectButton) {
    LiveProjectButton.addEventListener("click", () => {
      window.open("https://ruichaotang.github.io/PersonalHomePage/", "_blank");
    });
  }

  if (buttonSpotify) {
    buttonSpotify.addEventListener("click", () => {
      window.open(
        "https://open.spotify.com/album/5vu7vSSEqhowSwxU8LeyFS?si=04mlaEkHQwOMA8h9BNn97A",
        "_blank"
      );
    });
  }

  if (colabButton) {
    colabButton.addEventListener("click", () => {
      window.open(
        "https://colab.research.google.com/drive/1BkMP3M7CIYsS6cWHqnRDEhpjrADrQCNr?usp=sharing",
        "_blank"
      );
    });
  }

  if (NestLandGitHubButton) {
    NestLandGitHubButton.addEventListener("click", () => {
      window.open("https://github.com/RuichaoTang/MERN-realEstate", "_blank");
    });
  }
  if (NestLandWebButton) {
    NestLandWebButton.addEventListener("click", () => {
      window.open("https://mern-realestate-rpou.onrender.com", "_blank");
    });
  }

  // Animate skills section
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
