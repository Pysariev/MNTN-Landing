const mobileNav = document.querySelector('.mobile__nav');
const navBtn = document.querySelector('.nav__button'); 
const body = document.body; 

// Клик по кнопке
navBtn.addEventListener('click', function (event) {
    event.stopPropagation(); //запрещаем событию click подниматься выше по DOM дереву
    toggleMobileNav();
})

// Клик по окну за пределами навигации
window.addEventListener('click', function () {  //отслеживаем событие click по окну (экрану) 
    if (body.classList.contains('no-scroll')) {  //проверка: если body содержит класс no-scroll значит навигация открыта
        toggleMobileNav();
    }
})

// Останавливаем клик внутри открытой мобильной навигации
mobileNav.addEventListener('click', function (event) {  //отслеживаем событие click внутри окна мобильного меню 
    event.stopPropagation();
})

// создаем функцию toggleMobileNav для оптимизации кода
function toggleMobileNav() {
    mobileNav.classList.toggle('mobile__nav--active'); //включаем мобильное меню на точке перелома 800px (добавляем класс:.mobile__nav--active)
    navBtn.classList.toggle('nav__button--close'); //превращаем кнопку мобильного меню (бургер) в крестик
    body.classList.toggle('no-scroll'); //убираем скрол у body при открытом мобильном меню
}