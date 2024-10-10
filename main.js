
//^ =============== navbar menu ===============

const menuBtn = document.getElementById("humbergur");
const menuList = document.getElementById("menu-ul");
let menu = document.getElementById("menu")

menuBtn.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
    if (menu.classList.contains("fa-bars")) {
        menu.classList.remove("fa-bars"); 
        menu.classList.add("fa-xmark"); 
    } else {
        menu.classList.remove("fa-xmark"); 
        menu.classList.add("fa-bars"); 
    }
});


// ^ ================ navbar sticky color background ==============

const navbar = document.querySelector("header");

window.addEventListener("scroll" , ()=>{
    if (window.scrollY > 100) {
        navbar.classList.add("bg-color-primary-dark");
        navbar.classList.add("border-b");
        navbar.classList.add("border-color-gray");
    } else {
        navbar.classList.remove("bg-color-primary-dark");
        navbar.classList.remove("border-b");
        navbar.classList.remove("border-color-gray");
    }
})



// ^ ============= arrow up ===============
const arrowUp = document.querySelector(".up");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 400) {
        arrowUp.classList.add("opacity-100");
        arrowUp.classList.remove("opacity-0");
    } else {
        arrowUp.classList.add("opacity-0");
        arrowUp.classList.remove("opacity-100");
    }
});


// ^ ============== testimonails ===============

const userPics = document.querySelectorAll(".user-pic");
const userTexts = document.querySelectorAll(".user-text");

userPics.forEach((pic, index) => {
    pic.addEventListener("click", (e) => {

        userPics.forEach(element => {
            element.classList.remove("active-pic");
        });

        
        e.target.classList.add("active-pic");

    
        userTexts.forEach(text => {
            text.classList.remove("active-text");
        });

    
        userTexts[index].classList.add("active-text");
    });
});
