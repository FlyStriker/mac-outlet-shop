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
      const product = products.find((product) => product.id === productId);
      cartProducts.push(product);

      renderCart();
      localStorage.setItem("cart_items", JSON.stringify(cartProducts));
    });
  });
}

function changeNumberItems() {
  const plus = document.querySelector(".plus");
  const minus = document.querySelector(".minus");
  const numberText = document.querySelector(".basket_product_number_text");

  let count = 1;
  plus.onclick = function () {
    count += 1;
    numberText.innerHTML = count;
  };
  minus.onclick = function () {
    count -= 1;
    numberText.innerHTML = count;
  };
}

function deleteItem() {
  const deleteButtons = document.querySelectorAll(".basket_product_button_delete");
  const itemProd = document.querySelector(".basket_item");
  
  deleteButtons.onclick = function () {
    itemProd.remove();
    renderCart()
    // localStorage.removeItem("cart_items");
  };

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
         <img src=${product.imgUrl} alt="product_image" class="basket_product_image">
         <div class="basket_product_info">
          <p class="basket_product_info_name">${product.name}</p>
          <a href="#" class="basket_product_info_prise" value=${product.price}>$${product.price}</a>
         </div>
           <div class="basket_product_number">
               <button class="minus" ><</button>
                <p class="basket_product_number_text">1</p>
               <button class="plus">></button>
           </div>
         <div class="basket_product_button_delete">
          <button>x</button> 
         </div>
        </div>
        `;
    console.log(product.imgUrl);
    container.append(productWrapper);
    changeNumberItems();
    deleteItem();
  });
}

function totalValue() {
  const totalValue = document.querySelector(".basket_total_value");
  totalValue = sum (cartProducts.price);
  let totalPrice = 0;
  cartProducts.forEach((product) => {
    totalPrice += product.price;
  });
  totalValue.innerHTML = totalPrice;
}
