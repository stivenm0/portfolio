// import {inicioCarrusel, proyecto, onLeft, onRight}  from "./carrusel.js";




// console.log(proyecto.children)




let menu = document.getElementById("menu");
let close = document.getElementById("close");
let list= document.getElementById("list");



function openMenu(){
    list.classList.toggle("animate__zoomIn");
    list.classList.toggle("hide")

    menu.classList.toggle("animate__rotateIn");

    close.classList.toggle("hide");
    close.classList.toggle("animate__rotateIn");


    setTimeout(()=>{
        menu.classList.toggle("hide");
    }, 200);
}

