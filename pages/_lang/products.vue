<template>
  <div>
    <!-- Page title -->
    <PageTitle class="parallax1">
      <template v-slot:title>
        {{ $t('links.products') }}
      </template>
      <template v-slot:breadcrumb>
        <li>
          <NuxtLink :to="localePath('products')">
            {{ $t('links.products') }}
          </NuxtLink>
        </li>
      </template>
    </PageTitle>

    <!-- Features -->
    <section class="flat-row brokerage-sol">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title-section">
              <h1 class="title">
                {{ $t('featuresProducts.products.title') }}
              </h1>
              <div class="sub-title">
                {{ $t('featuresProducts.products.subTitle') }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- cards -->
      <div class="row" style="margin-left: 40px">
        <div
          class="col-lg-4 col-md-6 margin-30px-bottom products_row_1 display_feature"
        >
          <div class="iconbox center circle large services-block-three">
            <a href="javascript:void(0)" class="service_block_a">
              <div class="box-header custom_icons">
                <div><i class="fa fa-book"></i></div>
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
                <div><i class="fa fa-book"></i></div>
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
                <div><i class="fa fa-book"></i></div>
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
        <div
          class="col-lg-4 col-md-6 margin-30px-bottom products_row_1 display_feature"
        >
          <div class="iconbox center circle large services-block-three">
            <a href="javascript:void(0)" class="service_block_a">
              <div class="box-header custom_icons">
                <div><i class="fa fa-book"></i></div>
                <div class="box-title">
                  {{
                    $t('featuresProducts.products.transactionManagement.title')
                  }}
                </div>
              </div>
              <div class="box-content">
                <ul>
                  <li>
                    {{
                      $t(
                        'featuresProducts.products.transactionManagement.description'
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
                <div><i class="fa fa-book"></i></div>
                <div class="box-title">
                  {{ $t('featuresProducts.products.association.title') }}
                </div>
              </div>
              <div class="box-content">
                <ul>
                  <li>
                    {{
                      $t('featuresProducts.products.association.description')
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
                <div><i class="fa fa-book"></i></div>
                <div class="box-title">
                  {{ $t('featuresProducts.products.propertyManager.title') }}
                </div>
              </div>
              <div class="box-content">
                <ul>
                  <li>
                    {{
                      $t(
                        'featuresProducts.products.propertyManager.description'
                      )
                    }}
                  </li>
                </ul>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import $ from 'jquery'
import config from '~/data/siteConfig'
import PageTitle from '~/components/PageTitle.vue'

export default {
  components: {
    PageTitle,
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
