const product = document.querySelectorAll(".product");
const cartProducts = document.querySelector(".cart__products");

product.forEach((item) =>
  item.addEventListener("click", (event) => {
    const id = event.target.closest(".product");
    const quantityValue = id.querySelector(".product__quantity-value");

    if (event.target.classList.contains("product__quantity-control_inc")) {
      quantityValue.textContent++;
    }
    if (
      event.target.classList.contains("product__quantity-control_dec") &&
      quantityValue.textContent > 1
    ) {
      quantityValue.textContent--;
    }

    if (event.target.classList.contains("product__add")) {
      const cart = document.querySelector(`.cart__product[data-id = "${id.dataset.id}"]`);
      const add = `<div class="cart__product" data-id="${id.dataset.id}">
                  <img class="cart__product-image" src="${id.querySelector(".product__image").src}">
                   <div class="cart__product-count">${quantityValue.textContent}</div>
                   </div>`;
      if (cart === null) {
        cartProducts.insertAdjacentHTML("beforeend", add);
      } else {
        cartProducts
          .querySelector(`.cart__product[data-id = "${id.dataset.id}"]`)
          .querySelector(".cart__product-count").textContent =
          Number(
            cartProducts
              .querySelector(`.cart__product[data-id = "${id.dataset.id}"]`)
              .querySelector(".cart__product-count").textContent
          ) + Number(quantityValue.textContent);
      }
    }
  })
);