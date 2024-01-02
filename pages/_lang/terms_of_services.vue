<template>
  <div class="container">
    <div class="main_privacy">
      <div class="priv_paragraph">
        <h1>
          {{ $t('links.terms_of_services') }}
        </h1>
        <p>
         {{ $t('terms_of_services.text1') }}
        </p>
        <p>
          {{ $t('terms_of_services.text2') }}
        </p>
        <p>
          {{ $t('terms_of_services.text3') }}
        </p>
        <p>
          {{ $t('terms_of_services.text4') }}
        </p>
        <p class="paragraph_underline text_center">
          {{ $t('terms_of_services.text5') }}
        </p>
        <p>
          {{ $t('terms_of_services.text6') }}
        </p>
       
        <h2 class="paragraph_underline text_center">{{ $t('terms_of_services.heading1') }}</h2>
        <p>
          {{ $t('terms_of_services.text7') }}
        </p>
        <p>
          {{ $t('terms_of_services.text8') }}
        </p>
        <h2 class="paragraph_underline">{{ $t('terms_of_services.heading1') }}</h2>
        <p>
          {{ $t('terms_of_services.text9') }}
        </p>
        <h2 class="paragraph_underline">{{ $t('terms_of_services.heading3') }}</h2>
        <p>
          {{ $t('terms_of_services.text10') }}
        </p>
        <p>
          {{ $t('terms_of_services.text11') }}
        </p>
        <h2 class="paragraph_underline">{{ $t('terms_of_services.heading4') }}</h2>
        <p>
          {{ $t('terms_of_services.text12') }}
        </p>
        <h2 class="paragraph_underline">{{ $t('terms_of_services.heading5') }}</h2>
        <p>
          {{ $t('terms_of_services.text13') }}
        </p>
        <div class="list">
          <ul>
            <li>{{ $t('terms_of_services.ol1Li1') }}</li>
            <li>{{ $t('terms_of_services.ol1Li2') }}</li>
            <li>{{ $t('terms_of_services.ol1Li3') }}</li>
            <li>{{ $t('terms_of_services.ol1Li4') }}</li>
            <li>{{ $t('terms_of_services.ol1Li5') }}</li>
          </ul>
        </div>
        <p>
          {{ $t('terms_of_services.text14') }}
        </p>
        <h2 class="paragraph_underline">{{ $t('terms_of_services.heading6') }}</h2>
        <p>
          {{ $t('terms_of_services.text15') }}
        </p>
        <h2 class="paragraph_underline">{{ $t('terms_of_services.heading7') }}</h2>
        <p>
          {{ $t('terms_of_services.text16') }}
        </p>
        <h2 class="paragraph_underline">{{ $t('terms_of_services.heading8') }}</h2>
        <p>
          {{ $t('terms_of_services.text17') }}
        </p>
        <h2 class="paragraph_underline">{{ $t('terms_of_services.heading9') }}</h2>
        <p>
          {{ $t('terms_of_services.text18') }}
        </p>
        <h2 class="paragraph_underline">{{ $t('terms_of_services.heading10') }}</h2>
        <p>
          {{ $t('terms_of_services.text19') }}
        </p>
        <h2 class="paragraph_underline">{{ $t('terms_of_services.heading11') }}</h2>
        <p>
          {{ $t('terms_of_services.text20') }}
        </p>
        <h2 class="paragraph_underline">{{ $t('terms_of_services.heading12') }}</h2>
        <p>
          {{ $t('terms_of_services.text21') }}
        </p>
        <h2 class="paragraph_underline">{{ $t('terms_of_services.heading13') }}</h2>
        <p>
          {{ $t('terms_of_services.text22') }}
        </p>
        <h2 class="paragraph_underline">{{ $t('terms_of_services.heading14') }}</h2>
        <p>
          {{ $t('terms_of_services.text23') }}
        </p>
        <p>
          {{ $t('terms_of_services.text24') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
import config from '~/data/siteConfig'
// import PageTitle from '~/components/PageTitle.vue'

export default {
  components: {
    // PageTitle,
  },
  data() {
    return {
      metaTitle: this.$t('links.brokerage'),
      metaDesc: this.$t('meta.desc.home'),
      siteName: config.siteTitle,
      selected: '0',
      options: [
        { id: 0, value: '', province: this.$t('province.default') },
        { id: 1, value: 'on', province: this.$t('province.on') },
        { id: 2, value: 'qc', province: this.$t('province.qc') },
        { id: 3, value: 'bc', province: this.$t('province.bc') },
        { id: 4, value: 'ab', province: this.$t('province.ab') },
        { id: 5, value: 'sk', province: this.$t('province.sk') },
        { id: 6, value: 'mb', province: this.$t('province.mb') },
        { id: 7, value: 'ns', province: this.$t('province.ns') },
        { id: 8, value: 'nb', province: this.$t('province.nb') },
        { id: 9, value: 'pe', province: this.$t('province.pe') },
        { id: 10, value: 'nl', province: this.$t('province.nl') },
        { id: 11, value: 'nt', province: this.$t('province.nt') },
        { id: 12, value: 'nu', province: this.$t('province.nu') },
        { id: 13, value: 'yt', province: this.$t('province.yt') },
      ],
    }
  },
  head() {
    return {
      title: this.metaTitle,
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.metaTitle} - ${config.siteTitle}`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.metaTitle} - ${config.siteTitle}`,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.metaDesc,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.metaDesc,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.metaDesc,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${config.siteUrl}/img/${this.$t(
            'meta.social.brokerage'
          )}.jpg`,
        },
        {
          hid: 'twitter:image',
          property: 'og:image',
          content: `${config.siteUrl}/img/${this.$t(
            'meta.social.brokerage'
          )}.jpg`,
        },
      ],
    }
  },
}
</script>
