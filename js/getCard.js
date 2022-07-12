var products;
fetch("https://shop-items-server.herokuapp.com/")
  .then((response) => response.json())
  .then((data) => {
    products = data;

    createCards(products);
  });

let createCards = (data) => {
  const cards = [];

  for (let item of data) {
    let itemCard = document.createElement("div");
    itemCard.className = "body_item_card";
    itemCard.innerHTML = `
        <img src="./img/${item.imgUrl}" alt="img_card" class="img_card" />
        <div class="item_card_info">
            <h3 class="text_body_card" id="text_body_card">${item.name}</h3>
            <p><img src="./img/icons/check_1.svg"> <b>${item.orderInfo.inStock}</b> left in stock</p>
            <p>Prise: <b>${item.price}$</b></p>
            <button class="card_button" id="card_button">Add to cart</button> 
            <div class="bottom_card" >
                <img src="./img/icons/like_filled.svg" class="bottom_like">
                <p class="bottom_card_text">${item.orderInfo.reviews}% Positive reviews. Above avarage </p>
            </div>
        </div>
    `;
    cards.push(itemCard);
  }

  let container = document.querySelector(".item_cards");
  container.innerHTML = "";
  for (let card of cards) {
    container.appendChild(card);
  }
};
