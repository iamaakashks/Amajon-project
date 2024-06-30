import {cart} from '../data/cart.js';
let productsHTML = "";
products.forEach(function(products){
    productsHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${products.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${products.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${products.rating.stars*10}.png" />
            <div class="product-rating-count link-primary">
              ${products.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(products.priceCents/100).toFixed(2)}
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

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${products.id}">
            Add to Cart
          </button>
        </div>`;
})
let amazongird = document.querySelector(".js-products-grid").innerHTML = productsHTML;
let addToCart = document.querySelectorAll(".js-add-to-cart");
addToCart.forEach(function(button){
  button.addEventListener("click", function(){
    const productId = button.dataset.productId;
    let matchingItem;
    cart.forEach(function(items){
      if(productId === items.productId){
        matchingItem = items;
      }
    });
    if(matchingItem){
      matchingItem.quantity += 1;
    }else{
      cart.push({
        productId, //when we use key and value name same we donot need to specify key:value
        quantity:1
      });
    }
    
    let cartQuantity = 0;
    cart.forEach(function(items){
      cartQuantity += items.quantity;
    })

    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
  })
})

