const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
  },
    loop: true,
    slidesPerView: 1,

    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

aside = document.querySelector('.aside-nav')
menuIcon = document.querySelector('.menuIcon')
closeIcon = document.querySelector('.closeIcon')

menuIcon.addEventListener('click', () => {
    aside.classList.toggle('dis-inline');
});

closeIcon.addEventListener('click', () => {
    aside.classList.toggle('dis-inline');
});


