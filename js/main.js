
const swup = new Swup();
function documentActions (e) {
    const targetElement = e.target;
    if(document.querySelector('.images__slider')){
        let imagesSlider = document.querySelector('.images__slider');
        let imagesSliderBody = document.querySelector('.images__slider-body');
        let imagesBtn = document.querySelector('.images__btn');
        let header = document.querySelector('.header');
        let body = document.querySelector('.body');
        if(!targetElement.closest('.images__close-slider') && !targetElement.closest('.images__slider-body') && !targetElement.closest('.header')){
            imagesSliderBody.classList.remove('_active');
            imagesSlider.classList.remove('_active');
            imagesBtn.classList.remove('_active');
            header.style.display = 'block';
        }
        if(targetElement.closest('.images__btn')){
            targetElement.classList.toggle('_active');
            imagesSliderBody.classList.add('_active');
            imagesSlider.classList.add('_active');
            header.style.display = 'none';
            body.classList.toggle('_lock');
        }
        if(targetElement.closest('.images__close-slider')){
            targetElement.classList.remove('_active');
            imagesSliderBody.classList.remove('_active');
            imagesSlider.classList.remove('_active');
            header.style.display = 'block';
        }
    }
    if(document.querySelector('.right__info-number')){
        if(targetElement.closest('[data-title]')){
            const titleId = targetElement.dataset.title;
            const list = document.querySelector(`[data-list='${titleId}']`);
            const item = document.querySelector(`[data-item='${titleId}']`);
            targetElement.classList.toggle('_active');
            list.classList.toggle('_active');
            item.classList.toggle('_active');
        }
    }
    if(document.querySelector('.header')){
        let menu = document.querySelector('.menu');
        let menu__burger = document.querySelector('.menu__burger');
        let body = document.querySelector('.body');
        let menuSocial = document.querySelector('.menu__social');
        let socialHeaderPhone = document.querySelector('.social__header-phone');
        let headerWrapper = document.querySelector('.header__wrapper');
        if(targetElement.closest('.menu__burger')){
            targetElement.classList.toggle('_active');
            menu.classList.toggle('_active');
            body.classList.toggle('_lock');
            socialHeaderPhone.classList.toggle('_del');
            menuSocial.classList.toggle('_active');
            headerWrapper.classList.toggle('_del');
        }
        if(!targetElement.closest('.menu__burger') && !targetElement.closest('.menu')){
                menu.classList.remove('_active');
                menu__burger.classList.remove('_active');
                body.classList.remove('_lock');
                socialHeaderPhone.classList.remove('_del');
                menuSocial.classList.remove('_active');
                headerWrapper.classList.remove('_del');

        }
        if(targetElement.closest('.menu__link-1')){
            if(body.classList.contains('_lock')){
                body.classList.remove('_lock');
            }
        }
    }
}
document.addEventListener('click', documentActions);
function yes (e) {
    if (document.querySelector('.images__swiper')) {
        const swiper2 = new Swiper('.images__swiper-mini', {
            slidesPerView: 5.5,
            spaceBetween: 7,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 2.5,
                },
                768: {
                    slidesPerView: 3.5,
                },
                1000: {
                    slidesPerView: 5.5,
                }
            }
        });
        
        const swiper = new Swiper('.images__swiper', {
            slidesPerWiew: 1,
            loop: true,
            navigation: {
              nextEl: '.controlls__images-swiper-next',
              prevEl: '.controlls__images-swiper-prev',
            },
            thumbs: {
                swiper: swiper2
            }
          });
        
        // --------------------------------swiper
    }
    if(document.querySelector('.slider__number')){
        const swiper2 = new Swiper ('.slider__number-mini', {
            loop: true,
            spaceBetween: 17,
            slidesPerView: 5.5,
            navigation: {
                nextEl: '.controls__slider-number-next',
                prevEl: '.controls__slider-number-prev',
              },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                },
                500: {
                    slidesPerView: 3.5,
                },
                686:{
                    slidesPerView: 5.5,
                }
            }
        })
        const swiper = new Swiper ('.slider__number', {
            loop: true,
            navigation: {
                nextEl: '.controls__slider-number-next',
                prevEl: '.controls__slider-number-prev',
              },
              thumbs: {
                  swiper: swiper2
              }
        })
    }
    if(document.querySelector('._ibg')){
        function ibg() {
            let ibg = document.querySelectorAll(".ibg");
            for (var i = 0; i < ibg.length; i++) {
                if (ibg[i].querySelector('img')) {
                    ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
                }
            }
        }
        
        ibg();
    }
    if(document.querySelector('.header')){
        let menu = document.querySelector('.menu');
        let body = document.querySelector('.body');
        let menu__social = document.querySelector('.menu__social');
        let menu__burger = document.querySelector('.menu__burger');
        let header__wrapper = document.querySelector('.header__wrapper');
        let social__header__phone = document.querySelector('.social__header-phone');
        window.addEventListener('resize', () => {
            if(menu__burger.classList.contains('_active') && window.innerWidth >= 768){
                menu.classList.remove('_active');
                menu__burger.classList.remove('_active');
                menu__social.classList.remove('_active');
                header__wrapper.classList.remove('_del');
                social__header__phone.classList.remove('_del');
            }
        })
        let headerElement = document.querySelector('.header');
        let callback = (entries) => {
            if(entries[0].isIntersecting){
                headerElement.classList.remove('_scroll');
            }else{
                headerElement.classList.add('_scroll');
            }
        }
        let headerObserver = new IntersectionObserver(callback);
        headerObserver.observe(headerElement)
        let menu__phone = document.querySelector('.menu__phone');
        menu__phone.addEventListener('click', () => {
                menu.classList.remove('_active');
                menu__burger.classList.remove('_active');
                body.classList.remove('_lock');
                menu__social.classList.remove('_active');
                header__wrapper.classList.remove('_del');
                social__header__phone.classList.remove('_del');
    
                // window.scrollTo({
                //     top: 0,
                //     left: 0,
                //     behavior: 'smooth'
                // })
        });
    }
    if(document.querySelector('.video')){
        let videoClick = document.querySelector('.video__main');
        videoClick.addEventListener('click', () => {
            videoClick.classList.add('_active');
        })

        // ------------------------------video()
    }
    window.scrollTo({
        top: 0,
        left: 0,
    })
}
swup.on('contentReplaced', function() {
    yes()
});
yes()

