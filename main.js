const hambMenu = document.querySelector('#hamburger-menu');
const span = document.querySelectorAll('#hamburger-menu>span');
const navCard = document.querySelector('.nav-card');
let open = false;


const toggleMenu = () => {
    if(open === false){
        hambMenu.classList.add('open');
        open = true;
        span.forEach((span) => {
            span.style.backgroundColor = '#DA291C'
        })
        navCard.classList.add('toggle');
        
    }else{
        hambMenu.classList.remove('open');
        open = false;
        span.forEach((span) => {
            span.style.backgroundColor = '#858585'
        })
        navCard.classList.remove('toggle');
    }
    
}

hambMenu.addEventListener('click', toggleMenu);