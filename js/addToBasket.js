const buttonCard = document.querySelector(".slideText_button");
const changeText = document.querySelector(".basket_number");

let click = 0;
buttonCard.addEventListener("click", () => {
    console.log(click);
    click += 1
    changeText.innerHTML = click;
    localStorage.setItem("Add item to basket", click);
})

let menuBasket = document.querySelector(".basket_container");

let showBasket = () => {
    let basket = menuBasket

    basket.style.display = basket.style.display === "block" ? "none" : "block";
    click = true;
};
 