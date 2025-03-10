var swiper = new Swiper(".slide-content", 
{
   slidesPerView: 3,
   spaceBetween: 25,
   loop: true,
   centerSlide: 'true',
   fade: 'true',
   grabCursor: 'true',

   pagination: 
   {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
   },

   breakpoints:
   {
      0: { slidesPerView: 1 },
      525: { slidesPerView: 2 },
      950: { slidesPerView: 3 },
   }
});