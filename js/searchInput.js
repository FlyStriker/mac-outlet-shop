let searchInput = document.getElementById("inputSearch");

searchInput.addEventListener("keyup", function (event) {

    let value = event.target.value.trim().toLowerCase();
    
    let products = document.querySelectorAll(".body_item_card");


    products.forEach((product) => {

        let productName = product

        .querySelector("#text_body_card")
        .textContent.trim()
        .toLowerCase();

    if (!productName.includes(value)) {
      product.style.display = "none";
    } else {
      product.style.display = "block";
    }
  });
});
