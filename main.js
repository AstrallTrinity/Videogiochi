//pulsante
const navSlide = () =>{
    const burger = document.querySelector(".burger");
    const nav= document.querySelector(".nav-links");
    const nalinks =document.querySelector('.nav-links li');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    });
}

navSlide();
//fine pulsante

// Get the offset position of the navbar

