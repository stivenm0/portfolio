let nav = document.getElementById("navbar")
let error = document.getElementById("error")

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

function cleanData(str){
    str
}


function contacto(e){
    e.preventDefault();

    error.innerHTML= "";
    for(let i=0; i<4; i++){
        if(e.target[i].value.trim() === ""){
            error.innerHTML += 	"• esta vacio el campo "+ e.target[i].name +"<br>"  
        }
    }

    if(error.innerHTML === ""){
        console.log(e.target[0].value)

    }
}



