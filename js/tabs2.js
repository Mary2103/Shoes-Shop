

function tabs2(evt, categoryName) {
  let i, tabcontent2, tablinks2;

  tabcontent2 = document.getElementsByClassName("tabcontent2");

  for (i = 0; i < tabcontent2.length; i++) {
    tabcontent2[i].style.display = "none";
  }

  tablinks2 = document.getElementsByClassName("tablinks2");

  for (i = 0; i < tablinks2.length; i++) {
    tablinks2[i].className = tablinks2[i].className.replace("active", "");
  }

  document.getElementById(categoryName).style.display = "block";
  evt.currentTarget.className += " active";
}


window.onload = function () {
  // Gọi hàm tabs với event và categoryName bằng với id của phần tử "defaultOpen"
  document.getElementById("default").click();
};



