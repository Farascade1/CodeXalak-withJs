let menuBtn = document.querySelector("#menuBtn")
let list = document.querySelector("#list")
let closeBtn = document.querySelector("#closeBtn")

menuBtn.addEventListener("click", function () {
    list.style.display = "flex"
    menuBtn.style.display = "none"
    closeBtn.style.display = "block"
})

closeBtn.addEventListener("click", function () {
    menuBtn.style.display = "flex"
    closeBtn.style.display = "none"
    list.style.display = " none"
})

