const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".side-nav");
const sidebar_background = document.querySelector(".black");
const close = document.querySelector(".close");
const sidebar_list = document.querySelectorAll(".side-nav a");

window.addEventListener("scroll", function() {
    if (window.scrollY > 40) {
        nav.classList.add("active")
    } else {
        nav.classList.remove("active")
    }
})

menu.addEventListener("click", function() {
    sidebar.classList.add("active_sidebar");
    sidebar_background.classList.add("active_black");
})
close.addEventListener("click", function() {
    sidebar.classList.remove("active_sidebar");
    sidebar_background.classList.remove("active_black");
})
sidebar_background.addEventListener("click", function() {
    sidebar.classList.remove("active_sidebar");
    sidebar_background.classList.remove("active_black");
})

for (let i = 0; i < sidebar_list.length; i++) {
    sidebar_list[i].addEventListener("click", function(e) {
        sidebar.classList.remove("active_sidebar");
        sidebar_background.classList.remove("active_black");
    })
}