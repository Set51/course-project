document.querySelector(".header__search-btn").addEventListener("click", function() {
    document.querySelector(".header__form-search").classList.toggle("form-search__active");
        this.classList.toggle("active");
        
    })

  document.addEventListener("click", function(e) {
    let target = e.target;
    let form = document.querySelector(".header__form-search");
    if (!target.closest(".header__form-search-container")) {
    form.classList.remove("form-search__active");
      form.querySelector("input").value = "";
      document.querySelector(".header__search-btn").classList.remove("active");
    }
})

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".header__style-btn").forEach(item => {
        item.addEventListener("click", function() {
            let btn = this;
            let dropdown = this.parentElement.querySelector(".header__menu");

            document.querySelectorAll(".header__style-btn").forEach(el => {
                if (el != btn) {
                  el.classList.remove("active--btn");
                }
            });

            document.querySelectorAll(".header__menu").forEach(el => {
                if (el != dropdown) {
                    el.classList.remove("header__menu--is-active");
                }
            })
            dropdown.classList.toggle("header__menu--is-active");
            btn.classList.toggle("active--btn")
        })
    })
})

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#header__burger').addEventListener('click', function() {
        document.querySelector('.header__burger-menu').classList.toggle('menu-is-active');
        document.querySelector('#header__burger').classList.toggle('menu-is-active');
        document.querySelector('body').classList.toggle('is-hidden');
    });

});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.header__link').forEach(link => {
        link.addEventListener('click', function() {
        document.querySelector('.header__burger-menu').classList.remove('menu-is-active');
        document.querySelector('#header__burger').classList.remove('menu-is-active');
        document.querySelector('body').classList.remove('is-hidden');
       });
    });

});

document.addEventListener("click", function (e) {
    let target = e.target;
    if (!target.closest(".header__style-list")) {
        document.querySelectorAll(".header__menu").forEach(el => {
            el.classList.remove("header__menu--is-active");
        });
    };
})

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
            clickable: true
        },
        breakpoints: {
            1620: {
                slidesPerView: 3,
                spaceBetween: 50
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: 50
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 25
            },
            920: {
                slidesPerView: 3,
                spaceBetween: 25
            },
            750: {
                slidesPerView: 2,
                spaceBetween: 34
            },
            320: {
                slidesPerView: 'auto',
                spaceBetween: 0
            },
           
        },
        
    });

});

window.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.gallery__swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            1620: {
                slidesPerView: 3,
                spaceBetween: 50
            },
            1441: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            1440: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 34
            },
            750: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 'auto',
                spaceBetween: 0
            },
           
        },
        navigation: {
            nextEl: '.gallery-button-next',
            prevEl: '.gallery-button-prev',
        },
        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },
    });
});

window.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.project__swiper', {
        slidesPerView: 3,
        breakpoints: {
            1620: {
                slidesPerView: 3,
                spaceBetween: 50
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 50
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 34
            },
            750: {
                slidesPerView: 2,
                spaceBetween: 20
            },

            320: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            
        },
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
        collapsible: true,
        heightStyle: "content"
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

    })    
});

tippy('#tooltip-1', {
    content: 'Пример современных тенденций - современная методология разработки ',
    placement: 'top',
    theme: 'primary',
    arrow: true
});

tippy('#tooltip-2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    placement: 'top',
    theme: 'primary',
    arrow: true
});

tippy('#tooltip-3', {
    content: 'В стремлении повысить качество ',
    placement: 'top',
    theme: 'primary',
    arrow: true
});


ymaps.ready(init);
function init(){
   
    var myMap = new ymaps.Map("contact__map", {
        center: [55.76, 37.61],
        zoom: 15
    });

    var myPlacemark = new ymaps.Placemark([55.7605, 37.6153], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-icon.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-40, -48]
    });
  
    myMap.geoObjects.add(myPlacemark);

    myMap.behaviors.disable('scrollZoom');
};

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

new JustValidate('.js-form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 20
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },
    },
    messages: {
        name: 'Как вас зовут?',
        tel: 'Недопустимый формат',
        
    },
    colorWrong: '#D11616'
});

$(document).ready(function(){
    $("#nav-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
    });

    $("#hero-btn").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
    });

    $("a.catalog__plug-link").click(function() {
        $("html, body").animate({
           scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
           duration: 500,
           easing: "swing"
        });
        return false;
    });
    
    
});










