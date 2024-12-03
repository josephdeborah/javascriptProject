const menu = document.querySelector("#menu")
const navBar = document.querySelector("#navBar")
menu.addEventListener("click",menuFunc)
function  menuFunc() {
    navBar.style.transition="all .8s ease-in-out"
    navBar.style.top="0";
}


const close = document.querySelector("#closeIcon")
close.addEventListener("click",closeFunc)
function closeFunc() {
    navBar.style.top="-500px";

    
}