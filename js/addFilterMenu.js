let menuFilter = document.querySelector(".setting_menu");
let menuButton = document.querySelector(".main_button_filter");

let showMenu = () => {
    let filter = menuFilter
    let button = menuButton

    button.addEventListener("click", () => {
        filter.style.display = "block";
        click = true;
    })
};
