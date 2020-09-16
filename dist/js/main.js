const _humburger = document.querySelector(".humburger");
const _nav_open = document.querySelector(".nav_item")

_humburger.addEventListener("click", function () {
    _humburger.classList.toggle("open");
    _nav_open.classList.toggle("open");
})