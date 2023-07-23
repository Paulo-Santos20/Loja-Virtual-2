let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

//Open Cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};

//Close Cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};

//Making Add to cart
//Cart Working JS

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// Making Function
function ready() {
  //Remove Item From Cart
  var removeCartButtons = document.getElementsByClassName("cart-remove");
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  //Quantity Change
  var QuantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < QuantityInputs.length; i++) {
    var input = QuantityInputs[i];
    input.addEventListener("change", QuantityChanged);
  }
}

// Remove Cart Item
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
}

//Quantity Cart Item
function QuantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
}

//Update Total
function updatetotal(){
    var cartContent = document.getElementsByClassName('cart-context')
}