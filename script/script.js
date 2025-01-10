// INTRO
var introTL = gsap.timeline();
introTL.to(".intro", .1, {fontFamily: "Anton"})
introTL.to(".intro", .1, {fontFamily: "Jost"})
introTL.to(".intro", .1, {fontFamily: "Alkatra"})
introTL.to(".intro", .1, {fontFamily: "Nova Oval"})
introTL.to(".intro", .1, {fontFamily: "Oswald"})
introTL.to(".intro", .1, {fontFamily: "PT Serif"})
introTL.to(".intro", .1, {fontFamily: "Lexend"})
introTL.to(".intro", .1, {fontFamily: "Poppins"})
introTL.to(".intro", .1, {fontFamily: "Titillium Web"})
introTL.to(".intro", 1, {scaleY: 0, ease:"expo.inOut"})
introTL.to(".intro__red", 1, {scaleY: 2, ease:"expo.inOut"}, "-=1.25")

/*down-to-up*/
document.addEventListener("DOMContentLoaded", function() {
    const animateElements = document.querySelectorAll('.down-to-up');

    const options = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% از المان باید در نمای کاربر باشد
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    animateElements.forEach(element => observer.observe(element));
});

/*left-to-right*/
document.addEventListener("DOMContentLoaded", function() {
    const animateElements = document.querySelectorAll('.left-to-right');

    const options = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% از المان باید در نمای کاربر باشد
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    animateElements.forEach(element => observer.observe(element));
});
 
/*fade-in-out__popup*/
document.addEventListener("DOMContentLoaded", function() {
    const animateMe = document.querySelector('.fade-in-out__popup');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    });

    observer.observe(animateMe);
});

/*new*/


$(document).ready(function () {
    $('.tabs').slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 3,
        rtl: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });

    const tabs = document.querySelectorAll('.tab');
    const foodLists = document.querySelectorAll('.food-list');
    const searchInput = document.getElementById('search');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            foodLists.forEach(list => list.classList.remove('active'));
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        foodLists.forEach(list => {
            list.classList.remove('active');
            const items = list.querySelectorAll('.food-item');
            let found = false;
            items.forEach(item => {
                if (item.innerText.toLowerCase().includes(query)) {
                    item.style.display = 'flex';
                    found = true;
                } else {
                    item.style.display = 'none';
                }
            });
            if (found) {
                list.classList.add('active');
            }
        });
    });
});





/* */
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const popupBody = document.getElementById('popup-body');
let currentItem = 0;
let currentItemInList = 0;
let currentList = [];

// جلب کردن توجه همه آیتم‌های غذا در تمام تب‌ها
const allFoodItems = document.querySelectorAll('.food-item');
allFoodItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentList = Array.from(item.parentElement.children).filter(child => child.classList.contains('food-item'));
        currentItem = index;
        currentList.forEach((item, index) => {
            currentItemInList = index;
        });
        openPopup(allFoodItems[currentItem]);
    });
});

function openPopup(item) {
    popupBody.innerHTML = item.innerHTML;
    popup.classList.add('active');
    overlay.classList.add('active');
}

function closePopup() {
    popup.classList.remove('active');
    overlay.classList.remove('active');
}

function prevItem() {
    if (currentItemInList > 0) {
        currentItemInList--;
        openPopup(currentList[currentItemInList]);
    }
}

function nextItem() {
    if (currentItemInList < currentList.length - 1) {
        currentItemInList++;
        openPopup(currentList[currentItemInList]);
    }
}

overlay.addEventListener('click', closePopup);

