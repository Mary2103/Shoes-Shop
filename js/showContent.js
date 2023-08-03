function showContent(id) {
  let contentWrap = document.getElementsByClassName("headquarters__note");
  
  let content = document.getElementById(id);
  // Kiểm tra nếu phần tử đang hiển thị
  if (content.style.display === "block") {
    // Ẩn phần tử đó
    content.style.display = "none";
  } else {
    // Ngược lại, ẩn tất cả các phần tử khác
    for (let i = 0; i < contentWrap.length; i++) {
        contentWrap[i].style.display = "none";
    }
    // Hiển thị phần tử đó
    content.style.display = "block";
  
  }

}