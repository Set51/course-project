window.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.hero__swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 2000,
        autoplay: {
          delay: 2000
        },
        effect: "fade",
        allowTouchMove: false
        
    });

});

window.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.event__swiper', {
        slidesPerView: 3,
        spaceBetween: 50,
        navigation: {
            nextEl: '.event__button-next',
            prevEl: '.event__button-prev',
        },
        pagination: {
            el: '.event__pagination',
        },
        
    });

});

const swiper = new Swiper('.gallery__swiper', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.gallery-button-next',
        prevEl: '.gallery-button-prev',
    },
    pagination: {
        el: '.gallery__pagination',
        type: 'fraction',
    },
});

window.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.project__swiper', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.project__button-next',
            prevEl: '.project__button-prev',
        },
       
    });

});

const element = document.querySelector('#customSelect');
const choices = new Choices(element, {
    searchEnabled: false
});

$( function() {
    $( "#accordion" ).accordion({
        collapsible: true
    });
});

document.querySelectorAll('.tabs-btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs-btn').forEach(function(btn){
    btn.classList.remove('tabs-btn--active')});
    e.currentTarget.classList.add('tabs-btn--active');
    document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
    tabsBtn.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
   
});

tippy('#tooltip-1', {
    content: 'Пример современных тенденций - современная методология разработки ',
    placement: 'top',
    arrow: true
});

tippy('#tooltip-2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    placement: 'top',
    arrow: true
});

tippy('#tooltip-3', {
    content: 'В стремлении повысить качество ',
    placement: 'top',
    arrow: true
});





