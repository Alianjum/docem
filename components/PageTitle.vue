<template>
  <div class="page-title parallax">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="page-title-heading">
            <h1 class="title">
              <slot name="title"></slot>
            </h1>
          </div>
          <div class="breadcrumbs">
            <ul>
              <li>
                <NuxtLink :to="localePath('index')">
                  {{ $t('links.home') }}
                </NuxtLink>
              </li>
              <slot name="breadcrumb"></slot>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import config from '~/data/siteConfig'

export default {
  data() {
    return {
      siteName: config.siteTitle,
    }
  },
  mounted() {
    const isMobile = {
      Android() {
        return navigator.userAgent.match(/Android/i)
      },
      BlackBerry() {
        return navigator.userAgent.match(/BlackBerry/i)
      },
      iOS() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
      },
      Opera() {
        return navigator.userAgent.match(/Opera Mini/i)
      },
      Windows() {
        return navigator.userAgent.match(/IEMobile/i)
      },
      any() {
        return (
          isMobile.Android() ||
          isMobile.BlackBerry() ||
          isMobile.iOS() ||
          isMobile.Opera() ||
          isMobile.Windows()
        )
      },
    }
    if ($().parallax && isMobile.any() == null) {
      $('.parallax1').parallax('50%', 0.2)
      $('.parallax4').parallax('50%', 0.4)
      $('.parallax2').parallax('50%', 0.4)
      $('.parallax3').parallax('50%', 0.5)
    }
  },
}
</script>
