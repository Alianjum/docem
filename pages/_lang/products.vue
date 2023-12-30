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

        <div class="row">
          <div class="col-lg-4 col-md-6 margin-30px-bottom products_row_1">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-link"></i></div>
                  <div v-if="selected === 2" class="box-title">
                    {{ $t('features.brokerage.box1.titleQc') }}
                  </div>
                  <div v-else class="box-title">
                    {{ $t('features.brokerage.box1.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li v-if="selected === 2">
                      {{ $t('features.brokerage.box1.list.list1Qc') }}
                    </li>
                    <li v-else>
                      {{ $t('features.brokerage.box1.list.list1') }}
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 margin-30px-bottom products_row_1">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-book"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box2.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box2.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box2.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 margin-30px-bottom products_row_1">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-list-ul"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box12.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box12.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box12.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 margin-30px-bottom products_row_2">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-file"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box8.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li v-if="selected === 2">
                      {{ $t('features.brokerage.box8.list.list1') }}
                    </li>
                    <li>{{ $t('features.brokerage.box8.list.list2') }}</li>
                    <li v-if="selected === 1">
                      {{ $t('features.brokerage.box8.list.list3') }}
                    </li>
                    <li v-if="selected === 2">
                      {{ $t('features.brokerage.box8.list.list4') }}
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 margin-30px-bottom products_row_2">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-file-text-o"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box14.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box14.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box14.list.list2') }}</li>
                    <li>{{ $t('features.brokerage.box14.list.list3') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 margin-30px-bottom products_row_2">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-usd"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box4.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box4.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box4.list.list2') }}</li>
                    <li>{{ $t('features.brokerage.box4.list.list3') }}</li>
                    <li>{{ $t('features.brokerage.box4.list.list4') }}</li>
                    <li>{{ $t('features.brokerage.box4.list.list5') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 margin-30px-bottom products_row_3">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-university"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box5.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box5.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box5.list.list2') }}</li>
                    <li>{{ $t('features.brokerage.box5.list.list3') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 margin-30px-bottom products_row_3">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-envelope"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box3.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box3.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box3.list.list2') }}</li>
                    <li>{{ $t('features.brokerage.box3.list.list3') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 margin-30px-bottom products_row_3">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-lock"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box13.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li v-if="selected === 2">
                      {{ $t('features.brokerage.box13.list.list1Qc') }}
                    </li>
                    <li v-else>
                      {{ $t('features.brokerage.box13.list.list1') }}
                    </li>
                    <li>{{ $t('features.brokerage.box13.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 margin-30px-bottom products_row_4">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-paper-plane"></i></div>
                  <div v-if="selected === 2" class="box-title">
                    {{ $t('features.brokerage.box6.titleQc') }}
                  </div>
                  <div v-else class="box-title">
                    {{ $t('features.brokerage.box6.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li v-if="selected === 2">
                      {{ $t('features.brokerage.box6.list.list1Qc') }}
                    </li>
                    <li v-else>
                      {{ $t('features.brokerage.box6.list.list1') }}
                    </li>
                    <li v-if="selected === 2">
                      {{ $t('features.brokerage.box6.list.list2Qc') }}
                    </li>
                    <li>
                      {{ $t('features.brokerage.box6.list.list2') }}
                    </li>
                    <li v-if="selected === 2">
                      {{ $t('features.brokerage.box6.list.list3Qc') }}
                    </li>
                    <li v-else>
                      {{ $t('features.brokerage.box6.list.list3') }}
                    </li>
                    <li v-if="selected === 2">
                      {{ $t('features.brokerage.box6.list.list4Qc') }}
                    </li>
                    <li v-else>
                      {{ $t('features.brokerage.box6.list.list4') }}
                    </li>
                    <li v-if="selected === 2">
                      {{ $t('features.brokerage.box6.list.list5Qc') }}
                    </li>
                    <li v-else>
                      {{ $t('features.brokerage.box6.list.list5') }}
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 margin-30px-bottom products_row_4">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-check"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box9.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li v-if="selected === 1">
                      {{ $t('features.brokerage.box9.list.list1') }}
                    </li>
                    <li v-if="selected === 2">
                      {{ $t('features.brokerage.box9.list.list2Qc') }}
                    </li>
                    <li v-else>
                      {{ $t('features.brokerage.box9.list.list2') }}
                    </li>
                    <li v-if="selected === 2">
                      {{ $t('features.brokerage.box9.list.list3Qc') }}
                    </li>
                    <li v-else>
                      {{ $t('features.brokerage.box9.list.list3') }}
                    </li>
                    <li>
                      {{ $t('features.brokerage.box9.list.list4') }}
                    </li>
                    <li>
                      {{ $t('features.brokerage.box9.list.list5') }}
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 margin-30px-bottom products_row_4">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-calendar"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box7.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <!-- <li>{{ $t('features.brokerage.box7.list.list1') }}</li> -->
                    <li>
                      {{ $t('features.brokerage.box7.list.list2') }}
                    </li>
                    <li v-if="selected === 2">
                      {{ $t('features.brokerage.box7.list.list3Qc') }}
                    </li>
                    <li v-else>
                      {{ $t('features.brokerage.box7.list.list3') }}
                    </li>
                    <li v-if="selected === 2">
                      {{ $t('features.brokerage.box7.list.list4') }}
                    </li>
                    <li v-else>
                      {{ $t('features.brokerage.box7.list.list4') }}
                    </li>
                    <li>
                      {{ $t('features.brokerage.box7.list.list5') }}
                    </li>
                    <li v-if="selected === 2">
                      {{ $t('features.brokerage.box7.list.list6') }}
                    </li>
                    <li v-else>
                      {{ $t('features.brokerage.box7.list.list6') }}
                    </li>
                    <li>
                      {{ $t('features.brokerage.box7.list.list7') }}
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 margin-30px-bottom products_row_4">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-comment"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box11.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box11.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box11.list.list2') }}</li>
                    <li>{{ $t('features.brokerage.box11.list.list3') }}</li>
                    <li v-if="selected === 2">
                      {{ $t('features.brokerage.box11.list.list4Qc') }}
                    </li>
                    <li v-else>
                      {{ $t('features.brokerage.box11.list.list4') }}
                    </li>
                    <li>{{ $t('features.brokerage.box11.list.list5') }}</li>
                    <li>{{ $t('features.brokerage.box11.list.list6') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 margin-30px-bottom products_row_4">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-comment"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box15.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box15.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box15.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 margin-30px-bottom products_row_4">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-comment"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box16.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box16.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box16.list.list2') }}</li>
                    <li>{{ $t('features.brokerage.box16.list.list3') }}</li>
                  </ul>
                </div>
              </a>
            </div>
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
