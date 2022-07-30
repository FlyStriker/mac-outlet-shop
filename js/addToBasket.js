var cartProducts = [];

const existedProducts = localStorage.getItem("cart_items");
if (existedProducts) {
  cartProducts = JSON.parse(existedProducts);
  renderCart();
}

let showBasket = () => {
  let basket = document.querySelector(".basket_container");

  basket.style.display = basket.style.display === "block" ? "none" : "block";
  click = true;
};

function addToCartHandlers() {
  const cartButtons = document.querySelectorAll(".card_button");

  cartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const productId = +event.target.getAttribute("aria-value");
      let product = { ...products.find((p) => p.id === productId) };

      let existedProduct = cartProducts.find((p) => p.id === product.id);
      if (existedProduct) {
        existedProduct.qty += 1;
      } else {
        product.qty = 1;
        cartProducts.push(product);
      }

      renderCart();
      localStorage.setItem("cart_items", JSON.stringify(cartProducts));
    });
  });
}

function addItemQuantityHandlers() {
  const pluses = document.querySelectorAll(".plus");
  const minuses = document.querySelectorAll(".minus");

  pluses.forEach((plus) => {
    plus.addEventListener("click", (event) => {
      const productId = +event.target.getAttribute("aria-value");
      const existedProduct = cartProducts.find((p) => p.id === productId);
      existedProduct.qty = existedProduct.qty + 1;
      localStorage.setItem("cart_items", JSON.stringify(cartProducts));
      renderCart();
    });
  });

  minuses.forEach((minus) => {
    minus.addEventListener("click", (event) => {
      const productId = +event.target.getAttribute("aria-value");
      const existedProduct = cartProducts.find((p) => p.id === productId);
      console.log(event);

      if (existedProduct.qty === 1) {
        event.target.classList.add("disabled-qty-btn");
      } else {
        existedProduct.qty = existedProduct.qty - 1;
      }
      localStorage.setItem("cart_items", JSON.stringify(cartProducts));
      renderCart();
    });
  });
}

function addDeleteButtonsHandlers() {
  const deleteButtons = document.querySelectorAll(
    ".basket_product_button_delete button"
  );
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = +event.target.getAttribute("aria-value");
      cartProducts = cartProducts.filter((product) => product.id !== id);
      localStorage.setItem("cart_items", JSON.stringify(cartProducts));
      renderCart();
    });
  });
}

function renderCart() {
  const changeText = document.querySelector(".basket_number");
  changeText.innerHTML = cartProducts.length;

  const container = document.querySelector(".basket_body");
  container.innerHTML = "";

  cartProducts.forEach((product) => {
    const productWrapper = document.createElement("div");
    productWrapper.innerHTML = `
        <div class="basket_item">
         <img src="./img/${
           product.imgUrl
         }" alt="product_image" class="basket_product_image">
         <div class="basket_product_info">
          <p class="basket_product_info_name">${product.name}</p>
          <a href="#" class="basket_product_info_prise" value=${
            product.price
          }>$${product.price}</a>
         </div>
           <div class="basket_product_number">
               <button aria-value="${product.id}" class="minus" ${
      product.qty === 1 ? "disabled" : ""
    } ><</button>
                <p class="basket_product_number_text">${product.qty}</p>
               <button aria-value="${product.id}" class="plus">></button>
           </div>
         <div class="basket_product_button_delete">
          <button aria-value="${product.id}">x</button> 
         </div>
        </div>
        `;
    container.append(productWrapper);
  });
  addItemQuantityHandlers();
  addDeleteButtonsHandlers();
}

function totalValue() {
  const totalValue = document.querySelector(".basket_total_value");
  totalValue = sum(cartProducts.price);
  let totalPrice = 0;
  cartProducts.forEach((product) => {
    totalPrice += product.price;
  });
  totalValue.innerHTML = totalPrice;
}
