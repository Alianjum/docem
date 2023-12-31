<template>
  <div>
    <!-- Page title -->
    <PageTitle class="parallax1">
      <template v-slot:title>
        {{ $t('links.association_boards') }}
      </template>
      <template v-slot:breadcrumb>
        <li>
          <NuxtLink :to="localePath('associations_boards')">
            {{ $t('links.association_boards') }}
          </NuxtLink>
        </li>
      </template>
    </PageTitle>

    <!-- Video Section -->
    <!-- <VideoSection></VideoSection> -->
    <section class="flat-row background-color">
    <div class="container">
      <div class="row">
       
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
        <div class="col-md-6">
          <div class="inner-box-about">
            <div class="title-box">
              <div class="title">
                <span>{{ siteName }}</span> {{ $t('featuresProducts.products.association.title') }}
              </div>
            </div>
            <p>
              {{ $t('featuresProducts.products.association.description') }}
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
      </div>
    </div>
  </section>
    <div class="row" style="margin-left: 40px; margin-bottom : 40px">
        <div
          class="col-lg-4 col-md-6 margin-30px-bottom products_row_1 display_feature"
        >
          <div class="iconbox center circle large services-block-three">
            <a href="javascript:void(0)" class="service_block_a">
              <div class="box-header custom_icons">
                <div><i class="fa fa-file-text-o"></i></div>
                <div class="box-title">
                  {{ $t('featuresProducts.products.eform.title') }}
                </div>
              </div>
              <div class="box-content">
                <ul>
                  <li>
                    {{ $t('featuresProducts.products.eform.description') }}
                  </li>
                </ul>
              </div>
            </a>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-6 margin-30px-bottom products_row_1 display_feature"
        >
          <div class="iconbox center circle large services-block-three">
            <a href="javascript:void(0)" class="service_block_a">
              <div class="box-header custom_icons">
                <div><i class="fa fa-tasks"></i></div>
                <div class="box-title">
                  {{ $t('featuresProducts.products.showingManagement.title') }}
                </div>
              </div>
              <div class="box-content">
                <ul>
                  <li>
                    {{
                      $t(
                        'featuresProducts.products.showingManagement.description'
                      )
                    }}
                  </li>
                </ul>
              </div>
            </a>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-6 margin-30px-bottom products_row_1 display_feature"
        >
          <div class="iconbox center circle large services-block-three">
            <a href="javascript:void(0)" class="service_block_a">
              <div class="box-header custom_icons">
                <div><i class="fa fa-home fa-dollar-sign"></i></div>
                <div class="box-title">
                  {{ $t('featuresProducts.products.offerManagement.title') }}
                </div>
              </div>
              <div class="box-content">
                <ul>
                  <li>
                    {{
                      $t(
                        'featuresProducts.products.offerManagement.description'
                      )
                    }}
                  </li>
                </ul>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Rfp pricing="150" footnote-alt2></Rfp>
  </div>
</template>

<script>
// import $ from 'jquery'
import config from '~/data/siteConfig'
import PageTitle from '~/components/PageTitle.vue'
import VideoSection from '~/components/VideoSection.vue'
import Rfp from '~/components/Rfp.vue'

export default {
  components: {
    PageTitle,
    VideoSection,
    Rfp
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
