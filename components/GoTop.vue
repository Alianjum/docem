<template>
  <a class="go-top" href="#top">
    <i class="fa fa-angle-up"></i>
  </a>
</template>

<script>
import $ from 'jquery'

export default {
  mounted() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 800) {
        $('.go-top').addClass('show')
      } else {
        $('.go-top').removeClass('show')
      }
    })

    // $('body').on('click', '.go-top', function () {
    //   $('html, body').animate({ scrollTop: 0 }, 1000, 'easeOut')
    //   return false
    // })
  },
}
</script>
