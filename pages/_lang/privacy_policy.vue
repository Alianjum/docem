<template>
  <div class="container">
    <div class="main_privacy">
      <div class="priv_paragraph">
        <h1>
          {{ $t('links.privacy_policy') }}
        </h1>
        <p>
          {{ $t('privacy_policy.text32') }}
        </p>
        <p>
          {{ $t('privacy_policy.text31') }}
        </p>
        <p>
          {{ $t('privacy_policy.text30') }}
        </p>
        <p>
          {{ $t('privacy_policy.text29') }}
        </p>
        <p>
          {{ $t('privacy_policy.text28') }}
        </p>
        <p class="paragraph_underline text_center">
          {{ $t('privacy_policy.text27') }}
        </p>
        <p>
          {{ $t('privacy_policy.text26') }}
        </p>
        <p>
          {{ $t('privacy_policy.text25') }}
        </p>
        <h2 class="politique text_center">
          {{ $t('privacy_policy.heading') }}
        </h2>
        <p class="text_center">
          {{ $t('privacy_policy.title') }} 
        </p>
        <p class="text_center">
          {{ $t('privacy_policy.date') }} 
        </p>
        <p>
          {{ $t('privacy_policy.text1') }}
        </p>
        <p>
          {{ $t('privacy_policy.text2') }}
        </p>
        <p>
          <a class="email_number" href="privacy@docem.net">{{ $t('privacy_policy.linkText1') }}</a>
        </p>
        <p>
          <a class="email_number" href="tel:(888) 896-4980">{{ $t('privacy_policy.linkText2') }}</a>
        </p>
        <p>{{ $t('privacy_policy.text3') }}</p>
        <h2 class="paragraph_underline">{{ $t('privacy_policy.heading2') }}</h2>
        <p>
          {{ $t('privacy_policy.text4') }}
        </p>
        <p>{{ $t('privacy_policy.text5') }}</p>
        <div class="list">
          <ol>
            <li>{{ $t('privacy_policy.Ol1Li1') }}</li>
            <li>{{ $t('privacy_policy.Ol1Li2') }}</li>
            <li>{{ $t('privacy_policy.Ol1Li3') }}</li>
            <li>{{ $t('privacy_policy.Ol1Li4') }}</li>
            <li>{{ $t('privacy_policy.Ol1Li5') }}</li>
          </ol>
        </div>
        <p>
          {{ $t('privacy_policy.text6') }}
        </p>
        <h2 class="paragraph_underline">{{ $t('privacy_policy.heading3') }}</h2>
        <p>
          {{ $t('privacy_policy.text7') }}
        </p>
        <div class="list">
          <ol>
            <li>
              {{ $t('privacy_policy.Ol2Li1') }}
            </li>
            <li>
              {{ $t('privacy_policy.Ol2Li2') }}
            </li>
          </ol>
        </div>
        <h2 class="paragraph_underline">
          {{ $t('privacy_policy.heading4') }}
        </h2>
        <p>
          {{ $t('privacy_policy.text8') }}
        </p>
        <h2 class="paragraph_underline">
          {{ $t('privacy_policy.heading5') }}
        </h2>
        <p class="paragraph_underline">{{ $t('privacy_policy.text9') }}</p>
        <p>
          {{ $t('privacy_policy.text10') }}
        </p>
        <p class="paragraph_underline">{{ $t('privacy_policy.text11') }}</p>
        <p>
          {{ $t('privacy_policy.text12') }}
        </p>
        <div class="list">
          <ol>
            <li>{{ $t('privacy_policy.Ol3Li1') }}</li>
            <li>{{ $t('privacy_policy.Ol3Li2') }}</li>
            <li>{{ $t('privacy_policy.Ol3Li3') }}</li>
            <li>
              {{ $t('privacy_policy.Ol3Li4') }}
            </li>
          </ol>
        </div>
        <p>
          {{ $t('privacy_policy.text13') }}
        </p>
        <h2 class="paragraph_underline">
          {{ $t('privacy_policy.heading6') }}
        </h2>
        <p>
          {{ $t('privacy_policy.text14') }}
        </p>
        <p>
          {{ $t('privacy_policy.text15') }}
        </p>
        <h2 class="paragraph_underline">
          {{ $t('privacy_policy.heading7') }}
        </h2>
        <p>
          {{ $t('privacy_policy.text16') }}
        </p>
        <p>
          {{ $t('privacy_policy.text17') }}
        </p>
        <h2 class="paragraph_underline">{{ $t('privacy_policy.heading8') }}</h2>
        <p>
          {{ $t('privacy_policy.text18') }}
        </p>
        <h2 class="paragraph_underline">
          {{ $t('privacy_policy.heading9') }}
        </h2>
        <p>
          {{ $t('privacy_policy.text19') }}
        </p>
        <p>
          <a class="email_number" href="privacy@docem.net">{{ $t('privacy_policy.linkText3') }}</a>
        </p>
        <h2 class="paragraph_underline">
          {{ $t('privacy_policy.heading10') }}
        </h2>
        <p>
          {{ $t('privacy_policy.text20') }}
        </p>
        <div class="list">
          <ol>
            <li>
              {{ $t('privacy_policy.Ol4Li1') }}
            </li>
          </ol>
        </div>
        <h2 class="paragraph_underline">{{ $t('privacy_policy.heading11') }}</h2>
        <p>
          {{ $t('privacy_policy.text21') }}
        </p>
        <div class="list">
          <ol>
            <li class="paragraph_underline">
              {{ $t('privacy_policy.Ol5Li1') }}
            </li>
          </ol>
        </div>
        <p>
          {{ $t('privacy_policy.text22') }}
        </p>
        <h2 class="paragraph_underline">{{ $t('privacy_policy.heading12') }}</h2>
        <p>
          {{ $t('privacy_policy.text23') }}
        </p>
        <h2 class="paragraph_underline">{{ $t('privacy_policy.heading13') }}</h2>
        <p>
          {{ $t('privacy_policy.text24') }}
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
