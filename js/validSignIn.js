
const fieldEls = document.querySelectorAll(".field");
const formEl = document.querySelector(".loginForm");


fieldEls.forEach((field) => {
  const fieldItemEl = field.querySelector(".field__item");

  fieldItemEl.addEventListener("invalid", (event) => {
    const el = event.target;
    // Đặt content " " thì sẽ tắt được tooltip mặc định của html
    el.setCustomValidity(" ");
  });

  fieldItemEl.addEventListener("input", (event) => {
    const el = event.target;
    // Nếu không đặt lại thành "" khi nhập
    // thì khi bấm submit xong báo lỗi field
    // sau đó quay lại nhập đầy đủ thì nó cứ invalid mãi
    el.setCustomValidity("");
  });
});

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("OK");
});

