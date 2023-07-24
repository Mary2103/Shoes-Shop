import data from './data.js';

const products = document.querySelector(".product .grid_row");

// console.log(new_products);
// console.log(products);

// Format Price
function formatPrice(price) {
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    });
    if(price === "") return "";
    else 
        return formatter.format(price) ;
}

// Showing product
function ham(name,category,img,newPrice,oldPrice) {
    return `<div class="grid_column-3">
                <a href="" class="home__product--item">
                    <div class="home__product-item-img" style="background-image: url(${img});"></div>
                    
                    <h4 class="home__collection-item-heading">${name}</h4>
                    <h4 class="home__collection-category">${category}</h4>
                    <div class="home__collection-item-price">
                        <span class="home__collection-item-currentPrice">${formatPrice(newPrice)}</span>
                        <span class="home__collection-item-oldPrice">${formatPrice(oldPrice)}</span>
                    </div>
                    
                    <div class="home__collection-action">
                        <div class="home__collection-item__rating">
                            <i class="home-collection-item__star-gold fa-solid fa-star"></i>
                            <i class="home-collection-item__star-gold fa-solid fa-star"></i>
                            <i class="home-collection-item__star-gold fa-solid fa-star"></i>
                            <i class="home-collection-item__star-gold fa-solid fa-star"></i>
                            <i class=" fa-solid fa-star"></i>
                        </div>

                        <i class="home__collection-item-navigate-icon fa-solid fa-arrow-up-long"></i>
                        
                    </div>

                    
                    <div href="" class="add-cart--link">
                        <i class="add-cart--icon fa-solid fa-cart-shopping"></i>
                    Add to cart
                    </div>
                </a>
            </div>`



}
let currentArray = [];
const title = (document.querySelector(".product__header-title")).textContent;


if (title === "Men's shoes"){
    const Shoes = data.filter((item) => item.category === "Men's shoes");
    currentArray = Shoes;
    const courses = Shoes.map((item) => ham(item.name,item.category,item.img,item.newPrice,item.oldPrice))
    products.innerHTML = courses.join("");
}


if (title === "Women's shoes"){
    const Shoes = data.filter((item) => item.category === "Women's shoes");
    currentArray = Shoes;
    const courses = Shoes.map((item) => ham(item.name,item.category,item.img,item.newPrice,item.oldPrice))
    products.innerHTML = courses.join("");
}

if (title === "Kids' shoes"){
    const Shoes = data.filter((item) => item.category === "Kids' shoes");
    currentArray = Shoes;
    const courses = Shoes.map((item) => ham(item.name,item.category,item.img,item.newPrice,item.oldPrice))
    products.innerHTML = courses.join("");
}


//Sorting

window.sortingPrice = function() {
    let valueSelect = document.querySelector(".product__header-sort-btn").value;

    currentArray.sort((a, b) => {
        const collator = new Intl.Collator("vi-VN", {numeric: true});
        if (valueSelect === "az") {
            return collator.compare(a.newPrice, b.newPrice);
        } else if (valueSelect === "za") {
            return collator.compare(b.newPrice, a.newPrice);
        } else {
            return;
        }
    });
    const co = currentArray.map((item) => ham(item.name, item.category, item.img, item.newPrice, item.oldPrice));
    products.innerHTML = co.join("");
}








