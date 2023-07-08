const header = document.querySelector(".header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll >= 5) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});

function toggle (){

  let button = document.getElementsByClassName(".filter__bar--wrapper");

  if (button.style.display === "none") {
    // Nếu là none, thì đổi thành block
    button.style.display = "block";
  } else {
    // Nếu không phải none, thì đổi thành none
    button.style.display = "none";
  }
}
