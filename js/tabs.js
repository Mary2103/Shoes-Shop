

function tabs(evt, categoryName) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(categoryName).style.display = "block";
  evt.currentTarget.className += " active";
}

  window.onload = function () {
    // Gọi hàm tabs với event và categoryName bằng với id của phần tử "defaultOpen"
    document.getElementById("defaultOpen").click();
   

  };


  