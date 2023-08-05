const searchButton = document.querySelector(".search--btn");

const modal = document.querySelector(".search__modal");

const closeButton = document.querySelector(".search__close");

const modalBody = document.querySelector(".search__modal--body");
function showSearch() {
    modal.classList.add('active');
}

function closeSearch() {
    modal.classList.remove('active');

}

searchButton.addEventListener('click', showSearch);
closeButton.addEventListener('click', closeSearch);

modal.addEventListener('click', closeSearch);

modalBody.addEventListener('click', function (event) {
    event.stopPropagation();
});


