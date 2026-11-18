import { cart, addTocart } from '../data/cart.js';
import { products } from '../data/products.js';

// combine string together 
let productsHtml = '';

products.forEach((product) => {
    productsHtml += `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                src="images/ratings/rating-${product.rating.stars * 10}.png">
                <div class="product-rating-count link-primary">
                ${product.rating.count}
                </div>
            </div>

            <div class="product-price">
                ${(product.priceCents/100).toFixed(2)}$
            </div>

            <div class="product-quantity-container">
                <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary js-add-tocard " data-product-id="${product.id}">
                Add to Cart
            </button>
            </div>
    `;
}) 


document.querySelector('.js-products-grid')
    .innerHTML = productsHtml;

function updateCardquantity(){
    // calculate the total quantity to the cart 
        let totalcart = 0; 
        cart.forEach((cardItem)=>{
            totalcart += cardItem.quantity;
        });
        
        document.querySelector('.cart-quantity')
            .innerHTML = totalcart;
}


// SELECTED all the add to card tbn, loop it , event ; when click then do somthing(fn)
document.querySelectorAll('.js-add-tocard')
    .forEach((button) => {

    // when user click add to cart (base on prduct name)
    button.addEventListener('click',() => {
        const productId = button.dataset.productId;
        addTocart(productId);
        updateCardquantity();

    });
});
