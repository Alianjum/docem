<template>
  <section class="flat-row background-color">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="inner-box-about">
            <div class="title-box">
              <div class="title">
                <span>{{ siteName }}</span> {{ $t('about.video.title') }}
              </div>
            </div>
            <p>
              {{ $t('about.video.desc') }}
            </p>
            <div class="empty-space height30"></div>
            <div>
              <NuxtLink
                v-if="!isOnAbout"
                :to="'#request_form_section'"
                class="flat-button border-radius-small"
              >
                {{ $t('links.BookaDemo') }}
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div v-if="$i18n.locale === 'en'" class="video">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/WcUfcP1l0gg"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div v-else class="video">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/8ElBHdL5mhw"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import config from '~/data/siteConfig'

export default {
  data() {
    return {
      siteName: config.siteTitle,
    }
  },
  computed: {
    isOnAbout() {
      return (
        this.$route.fullPath.startsWith('/about') ||
        this.$route.fullPath.startsWith('/fr/about')
      )
    },
  },
}
</script>
