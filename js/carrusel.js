import { proyectos} from "./proyectos.js";

let project = document.getElementById("proyecto");
let p_img = document.getElementById("project_img");
let p_details = document.getElementById("project_details");
let contador = 0;

function onCarrusel(position=0){
    p_img.src = proyectos[position].image;
    console.log(p_details.children)
    p_details.children[0].innerText = proyectos[position].description;
    p_details.children[1].href = proyectos[position].github;
    p_details.children[2].href = proyectos[position].demo;
}


function onLeft(position){
    project.classList.add("animate__bounceOutRight");
    setTimeout(() => {
        project.classList.remove("animate__bounceOutRight");
   
        onCarrusel(position)

        project.classList.add("animate__bounceInLeft");

    }, 200);

    setTimeout(() => {
        project.classList.remove("animate__bounceInLeft");
    }, 500);
       
}


function onRight(position){
    project.classList.add("animate__bounceOutLeft");

    setTimeout(() => {
        project.classList.remove("animate__bounceOutLeft");
        
        onCarrusel(position)
        project.classList.add("animate__bounceInRight");

    }, 200);

    setTimeout(() => {
        project.classList.remove("animate__bounceInRight");
    }, 500);
       
}

onCarrusel();


let left = document.getElementById("left");
let right = document.getElementById("right");



left.addEventListener("click", ()=>{
    if(contador==0){
        contador= proyectos.length-1;    
    }else{
        contador--;
    }

    onLeft(contador)

})


right.addEventListener("click", ()=>{
    if(contador == proyectos.length-1){
        contador= 0;    
    }else{
        contador++;
    }
    onRight(contador)

})





