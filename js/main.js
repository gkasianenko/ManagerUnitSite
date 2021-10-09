const button = document.querySelector(".toggle-menu__middle");
const buttonParent = button.closest(".button-round");

buttonParent.addEventListener("click", function() {
    button.classList.toggle("toggle-menu__middle--active");
});