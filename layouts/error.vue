<template>
  <div>
    <!-- Features -->
    <section class="flat-row background-color">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title-section">
              <i class="fa fa-times" aria-hidden="true"></i>
              <h1 class="title">{{ $t('error') }} {{ statusCode }}</h1>
              <div class="sub-title">
                {{ message }}
              </div>
              <div v-if="statusCode === 404">
                <br />
                <NuxtLink
                  :to="localePath('index')"
                  class="flat-button border-radius-small"
                >
                  {{ $t('links.home') }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Promobox></Promobox>
  </div>
</template>

<script>
import config from '~/data/siteConfig'
import Promobox from '~/components/Promobox.vue'

export default {
  components: {
    Promobox,
  },
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message
    },
  },
  layout: 'default',
  head() {
    return {
      title: `Error ${this.error.statusCode}`,
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Error ${this.error.statusCode} - ${config.siteTitle}`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Error ${this.error.statusCode} - ${config.siteTitle}`,
        },
      ],
    }
  },
}
</script>
