var navList = document.querySelector(".nav-list");

function ativarMenu() {
    if ( navList.style.display == "block") {
    navList.style.display = "none"
    appenChild()
    }else {
            navList.style.display = "block"
    } 
};
