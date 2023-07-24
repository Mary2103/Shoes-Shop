let videoPlay = document.querySelector(".video__loop");
let button = document.querySelector(".introduce__play-btn");
let text = button.querySelector("span");
let icon = button.querySelector("i");

function playVideo() {
  if (videoPlay.paused) {
    videoPlay.play();
    text.textContent = "Pause";
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
    
} else {
    videoPlay.pause();
    text.textContent = "Play";
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");

  }
}