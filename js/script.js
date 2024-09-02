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

// My Skills
const skillList = document.querySelector('.skill-list');
const mySkill = document.querySelectorAll('.myskill');

skillList.addEventListener('click', (event) => {
    if (event.target.classList.contains('skill-item')) {
        skillList.querySelector('.active').classList.remove('active');
        event.target.classList.add('active');
        const filterValue = event.target.getAttribute('data-filter');
        mySkill.forEach((item) => {
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

// Animasi teks
// Menangkap event scroll
window.addEventListener("scroll", muncul);

// Fungsi untuk memberikan efek elemen muncul ketika di scroll
function muncul() {
    // Menangkap setiap tag dengan class elemen
    let elements = document.querySelectorAll(".elemen");

    // Perulangan untuk setiap tag dengan class elemen
    for (let i = 0; i < elements.length; i++) {
        // Mengambil ukuran tinggi layar
        let tinggiLayar = window.innerHeight;

        // Menangkap ukuran elemen dan posisinya relatif terhadap viewpoer
        let jarakAtasElemen = elements[i].getBoundingClientRect().top;

        // Menentukan ukuran scroll untuk memunculkan elemen
        let ukuranScroll = 50;

        // Jika jarak atas elemen kurang dari tinggi layar dikurangi ukuran scroll maka tambahkan class tampil di setiap tag dengan class elemen
        if (jarakAtasElemen < tinggiLayar - ukuranScroll) {
            elements[i].classList.add("tampil");
        }
        // Jika tida maka hapus class tampil
        else {
            elements[i].classList.remove("tampil");
        }
    }
}

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