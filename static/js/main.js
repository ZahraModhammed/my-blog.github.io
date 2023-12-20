let nav = document.querySelector("nav.navbar");
     menBtn = document.querySelector(".phone-menu")
     menu = document.querySelector(".navbar .navbar__container>ul")


document.addEventListener("scroll", (e) => {
    let pageScroll = document.scrollingElement.scrollTop,
        navPosition = nav.offsetTop;

    if(pageScroll > navPosition + 0.5) {
        nav.classList.add("nav--show");
    } else{
        nav.classList.remove("nav--show")
    }
});


menBtn.addEventListener("click", function(){
    menu.classList.toggle("show-list")
})