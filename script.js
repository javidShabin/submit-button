let popup = document.getElementById("popup");
let openBtn = document.querySelector(".btn");
let closeBtn = document.querySelector(".closeBtn");



openBtn.addEventListener("click", () => {
    popup.classList.add("open-popup")
})

closeBtn.addEventListener("click", () => {
    popup.classList.remove("open-popup")
})