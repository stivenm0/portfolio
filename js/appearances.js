let elements = document.querySelectorAll(".S")

const observer = new IntersectionObserver((objetos)=>{
    objetos.forEach(element=>{
        if(element.isIntersecting){
            element.target.classList.add("full");
        }
    })
},{
    threshold: .1,
    // rootMargin: "10px"
});


elements.forEach(element => {
    observer.observe(element);    
});