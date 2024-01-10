const headerE1 = document.querySelector('.header');

/*Listen to the click*/
window.addEventListener('scroll',()=>{
    /*If user scrolls a certaain amount of pixels it will change color  */
    if(window.scrollY > 50){
        headerE1.classList.add('header-scrolled');
    } 
    /*if user scrolls up it has to go back to normal*/
    else if (window.scrollY <= 50){
        headerE1.classList.remove('header-scrolled');
    }

});