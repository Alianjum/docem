$('.flat-testimonials').owlCarousel({
  loop: false,
  margin: 30,
  nav: $('.flat-testimonials').data('nav'),
  dots: $('.flat-testimonials').data('dots'),
  autoplay: $('.flat-testimonials').data('auto'),
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 1,
    },
    991: {
      items: 1,
    },
    1200: {
      items: $('.flat-testimonials').data('item'),
    },
  },
})
