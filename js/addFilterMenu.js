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
    .map((item) => +item.value);
  const platforms = Array.from(form.os)
    .filter((item) => item.checked)
    .map((item) => item.value);
  const displaySizes = Array.from(form.display)
    .filter((item) => item.checked)
    .map((item) => {
      const min = item.getAttribute("aria-valuemin");
      const max = item.getAttribute("aria-valuemax");

      return {
        min: min ? +min : undefined,
        max: max ? +max : undefined,
      };
    });

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

  if (storages.length > 0) {
    productsToDisplay = productsToDisplay.filter((product) =>
      storages.includes(product.storage)
    );
  }

  if (platforms.length > 0) {
    productsToDisplay = productsToDisplay.filter((product) =>
      platforms.includes(product.os)
    );
  }

  if (displaySizes.length > 0) {
    productsToDisplay = productsToDisplay.filter((product) =>
      displaySizes.some((size) => {
        if (size.min && size.max) {
          return product.display >= size.min && product.display <= size.max;
        }
        if (!size.max && size.min) {
          return product.display >= size.min;
        }
      })
    );
  }
  console.log(productsToDisplay);
  createCards(productsToDisplay);
});
