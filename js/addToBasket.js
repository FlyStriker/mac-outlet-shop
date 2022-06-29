const buttonCard = document.querySelector(".slideText_button");
const changeText = document.querySelector(".basket_number");

let click = 0;
buttonCard.addEventListener("click", () => {
    click+=1
    changeText.innerHTML = click;
    localStorage.setItem("Add item to basket", click);
})


