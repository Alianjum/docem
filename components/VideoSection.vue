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
              {{ $t('about.video.desc1') }}
              <b>
                {{ $t('about.video.desc2') }}
              </b>
              {{ $t('about.video.desc3') }}
            </p>
            <div class="empty-space height30"></div>
            <div>
              <NuxtLink
                v-if="!isOnAbout"
                :to="isOnBrokerage ? '#subscription' : '#request_form_section'"
                class="flat-button border-radius-small"
              >
                {{ buttonText }}
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="video-thumbnail">
            <img
              v-if="$i18n.locale === 'en'"
              src="https://img.youtube.com/vi/WcUfcP1l0gg/maxresdefault.jpg"
              alt="Video Thumbnail"
              width="100%"
              height="315"
            />
            <img
              v-else
              src="https://img.youtube.com/vi/8ElBHdL5mhw/maxresdefault.jpg"
              alt="Video Thumbnail"
              width="100%"
              height="315"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import config from '~/data/siteConfig'

export default {
  props: {
    buttonText: {
      type: String,
      default: 'Book a Demo', // Default value if not provided
    },
  },
  data() {
    return {
      siteName: config.siteTitle,
    }
  },
  computed: {
    isOnAbout() {
      return this.$route.fullPath.startsWith('/about') ||
        this.$route.fullPath.startsWith('/fr/about');
    },
    isOnBrokerage() {
      return this.$route.fullPath.startsWith('/agent') ||
        this.$route.fullPath.startsWith('/fr/agent');
    },
  },
}
</script>
