export const cart = [];
export function addToCart(productId){
    let matchingItem;
    cart.forEach(function(cartItems){
      if(productId === cartItems.productId){
        matchingItem = cartItems;
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
}