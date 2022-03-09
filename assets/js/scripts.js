

const togglerMenu = document.querySelector('.toggler-menu')
const navMenu = document.querySelector('.nav-menu__list')
let togglerOpen = false;

togglerMenu.addEventListener('click', () => {
    navMenu.classList.toggle("nav-menu__visible");
    if (!togglerOpen) {
        togglerMenu.classList.add('open')
        togglerOpen = true;
    }else{
        togglerMenu.classList.remove('open')
        togglerOpen = false;
    }
});



