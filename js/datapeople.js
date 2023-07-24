import people from './people.js';

const leader = document.querySelector(".leadership__wrapper .grid_row");

function dataPeople(name,img,position) {
    return `<div class="grid_column-4">
                <div class="leadership__item">
                    <div class="leadership__item-img" style="background-image: url(${img});"></div>
                    <span class="leadership__name">${name}</span>
                    <span class="leadership__title">${position}</span>
                </div>
            </div>`

}
    const lead = people.map((item) => dataPeople(item.name,item.img,item.position))
    leader.innerHTML = lead.join("");

