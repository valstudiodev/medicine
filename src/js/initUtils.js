"use strict"

export function initUtils() {
   slidersInit()
}

// ===========================================================================================
// -----------------------------
// SLIDER
// -----------------------------
function slidersInit() {
   if (document.querySelector('.slider-review')) {
      const swiper = new Swiper('.slider-review', {
         loop: true,
         // slidesPerView: 2.5,
         // spaceBetween: 30,

         breakpoints: {
            320: {
               slidesPerView: 1.3,
               spaceBetween: 10,
            },
            430: {
               slidesPerView: 1.5,
               spaceBetween: 15,
               // centteredSlides: true,
            },
            740: {
               slidesPerView: 2.5,
               spaceBetween: 25,
               // centteredSlides: false,
            },
            1050: {
               slidesPerView: 3,
               spaceBetween: 32,
            },
         },
      });
   }
}


// ===========================================================================================
// -----------------------------
// accordions
// -----------------------------
document.addEventListener('click', (e) => {
   const btn = e.target.closest('[data-accordion-btn]');
   if (!btn) return;

   const accordionParent = btn.closest('[data-accordion]');
   if (!accordionParent) return;

   const body = accordionParent.querySelector('[data-accordion-body]');
   const icon = btn.querySelector('[data-accordion-icon]');
   if (!body) return;

   const isOpen = accordionParent.classList.contains('active');

   if (!isOpen) {
      accordionParent.classList.add('active');
      if (icon) icon.classList.add('icon-active');

      body.style.height = body.scrollHeight + 'px';

      body.addEventListener(
         'transitionend',
         () => {
            if (accordionParent.classList.contains('active')) {
               body.style.height = 'auto';
            }
         },
         { once: true }
      );
   } else {
      body.style.height = body.scrollHeight + 'px';
      body.offsetHeight;

      requestAnimationFrame(() => {
         accordionParent.classList.remove('active');
         if (icon) icon.classList.remove('icon-active');
         body.style.height = '0px';
      });
   }
});
