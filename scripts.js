//remove the mobile hidden class from the menu
//select fa-bars
//listen for a click on the bars

const hamburger = document.querySelector(".fa-bars");
const hiddenUL = document.querySelector("ul");

hamburger.addEventListener("click", function() {
hiddenUL.classList.toggle("is-hidden--mobile");
});
