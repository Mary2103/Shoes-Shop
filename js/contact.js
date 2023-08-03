function showContent2(id) {
    let button = document.querySelector(".contact__item-btn");
    let icon = button.querySelector("i");

    let contactWrap = document.getElementsByClassName("contact__item--content-wrap");
    let isActive = false;
    
    let contact = document.getElementById(id);
    // Kiểm tra nếu phần tử đang hiển thị
    if (contact.style.display === "block") {
      // Ẩn phần tử đó
      contact.style.display = "none";
    } else {
      // Ngược lại, ẩn tất cả các phần tử khác
      for (let i = 0; i < contactWrap.length; i++) {
        contactWrap[i].style.display = "none";
      }
      // Hiển thị phần tử đó
      contact.style.display = "block";
   
         if (icon.classList.contains('fa-plus')) {
           icon.classList.remove('fa-plus');
           icon.classList.add('fa-minus');
         } else {
           icon.classList.remove('fa-minus');
           icon.classList.add('fa-plus');
         }
         
    
  
   
    }
  
   
} 