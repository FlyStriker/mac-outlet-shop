let menuFilter = document.querySelector(".setting_menu");

let showMenu = () => {
  let filter = menuFilter;

  filter.style.display = filter.style.display === "block" ? "none" : "block";
  click = true;
};

const form = document.forms["filter_form"];
form.addEventListener("change", () => {
  const priceFrom = form.price_from.value;
  const priceTo = form.price_to.value;
  const colors = Array.from(form.color)
    .filter((item) => item.checked)
    .map((item) => item.value);
  const storages = Array.from(form.storage)
    .filter((item) => item.checked)
    .map((item) => item.value);
  const platform = Array.from(form.os)
    .filter((item) => item.checked)
    .map((item) => item.value);
  const size = Array.from(form.display)
    .filter((item) => item.checked)
    .map((item) => item.value);

  let productsToDisplay = products;

  if (priceFrom) {
    productsToDisplay = productsToDisplay.filter(
      (product) => product.price > priceFrom
    );
  }

  if (priceTo) {
    productsToDisplay = productsToDisplay.filter(
      (product) => product.price < priceTo
    );
  }

  if (colors.length > 0) {
    productsToDisplay = productsToDisplay.filter((product) =>
      colors.some((color) => product.color.includes(color))
    );
  }

  
  if(storages.length > 0){
    productsToDisplay = productsToDisplay.filter(product => storages.includes(product.storage))
}

  if(platform.length > 0){
    productsToDisplay = productsToDisplay.filter(product => platform.includes(product.os))
}
  
  if(size.length > 0){
    productsToDisplay = productsToDisplay.filter(product => size.includes(product.display))
}

  createCards(productsToDisplay);
  console.log(productsToDisplay);
});
