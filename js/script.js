// Sidebar
const sidebar = document.querySelector(".sidebar-content");
const menu = document.querySelector(".menu");

menu.addEventListener('click', function () {
    sidebar.classList.toggle("active");
});

// Menu filter
const menuFilter = document.querySelector('.menu-filter');
const sectionItem = document.querySelectorAll('.section-item');

menuFilter.addEventListener('click', (event) => {
    if (event.target.classList.contains('filter-item')) {
        menuFilter.querySelector('.active').classList.remove('active');
        event.target.classList.add('active');
        const filterValue = event.target.getAttribute('data-filter');
        sectionItem.forEach((item) => {
            if (item.classList.contains(filterValue)) {
                item.classList.remove('hide');
                item.classList.add('show');
            } else {
                item.classList.remove('show');
                item.classList.add('hide');
            }
        });
    }
});

// Animasi angka
let valueDisplays = document.querySelectorAll('.number');
let interval = 1000;

valueDisplays.forEach((valueDisplays) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute('data-val'));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplays.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

// Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        620: {
            slidesPerView: 2
        }
    }
});