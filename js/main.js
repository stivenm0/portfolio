let nav = document.getElementById("navbar")



window.addEventListener("scroll", ()=>{
    if(window.scrollY>10){
        nav.classList.add("navbar_bg")
    }else{
        nav.classList.remove("navbar_bg")
    }
})


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



function contacto(e){
    e.preventDefault();
    console.log(e.target.nombre.value)
}


let sobre = document.getElementById("sob")

const observer = new IntersectionObserver((objetos)=>{
    if(objetos[0].isIntersecting){
        objetos[0].target.classList.remove("full");
    }
    console.log(objetos)
},{

});

observer.observe(sobre);