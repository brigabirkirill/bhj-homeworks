const productQuantityControlDec = document.querySelectorAll(".product__quantity-control_dec");
const productQuantityControlInc = document.querySelectorAll(".product__quantity-control_inc");
const productAdd = document.querySelectorAll(".product__add");
const cartProducts = document.querySelector(".cart__products");


Array.from(productQuantityControlDec).forEach(elem => {
  elem.addEventListener("click", () => {
    if (elem.nextElementSibling.innerText > 1) {
      elem.nextElementSibling.innerText-= 1
    }
  });
});
 

Array.from(productQuantityControlInc).forEach(elem => {
  elem.addEventListener("click", () => {
    elem.previousElementSibling.innerText = Number(elem.previousElementSibling.innerText) + 1
  });
});
 
Array.from(productAdd).forEach(elem => elem.addEventListener("click", () => {
  let id = (elem.closest(".product")).dataset.id;
  let img = (elem.closest(".product")).querySelector(".product__image").src;
  let counterForcartProducts = (elem.closest(".product")).querySelector(".product__quantity-value").textContent;
  if (cartProducts.querySelector('.cart__product')) {
      if (Array.from(cartProducts.querySelectorAll(".cart__product")).find( product => product.dataset.id === id)) {
        (Array.from(cartProducts.querySelectorAll(".cart__product")).find( product => product.dataset.id === id)).querySelector(".cart__product-count").textContent = Number((Array.from(cartProducts.querySelectorAll(".cart__product")).find( product => product.dataset.id === id)).querySelector(".cart__product-count").innerText) + Number(counterForcartProducts);
      } else {
        cartProducts.innerHTML+= `
          <div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src="${(img)}">
            <div class="cart__product-count">${counterForcartProducts}</div>
          </div>
        `;
      }
  } else  {
      cartProducts.innerHTML+= `
        <div class="cart__product" data-id="${id}">
          <img class="cart__product-image" src="${(img)}">
          <div class="cart__product-count">${counterForcartProducts}</div>
        </div>
      `;
  }
  (elem.closest(".product")).querySelector(".product__quantity-value").textContent = 1;
}));